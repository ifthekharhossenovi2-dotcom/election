import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  MapPin, 
  Calendar, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  Clock,
  Sparkles,
  AlertCircle,
  Loader2,
  ShieldAlert,
  Lock
} from 'lucide-react';
import { CAMPAIGN_INFO } from '../data/campaignData';
import { FORMSPREE_ENDPOINT } from '../config';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    batch: '',
    message: '',
    honeypot: '' // Anti-spam honeypot (hidden from real users)
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Time trap anti-bot protection: record when user first focused or loaded the form
  const formLoadTimestamp = useRef<number>(Date.now());

  // Countdown timer to 29 October 2026
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    formLoadTimestamp.current = Date.now();
    const electionTarget = new Date('2026-10-29T09:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = electionTarget - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setErrorMessage(null);
    setValidationError(null);

    // 1. Anti-spam Check: Honeypot field must be empty
    if (formData.honeypot && formData.honeypot.trim().length > 0) {
      // Bot detected, silently reject without submitting
      return;
    }

    // 2. Anti-spam Check: Time-trap (submission in less than 1.5s is likely automated)
    const timeTaken = Date.now() - formLoadTimestamp.current;
    if (timeTaken < 1500) {
      setValidationError('Please take a moment before submitting.');
      return;
    }

    // 3. Validation: Required fields and minimum lengths
    const trimmedName = formData.name.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || trimmedName.length < 2) {
      setValidationError('Please enter a valid name (at least 2 characters).');
      return;
    }

    if (!trimmedMessage || trimmedMessage.length < 5) {
      setValidationError('Please enter a message of at least 5 characters.');
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        name: trimmedName,
        batch: formData.batch.trim() || 'N/A',
        message: trimmedMessage,
        _gotcha: formData.honeypot
      };

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: '', batch: '', message: '', honeypot: '' });

        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#25a244', '#05f244', '#ffffff', '#facc15']
        });
      } else {
        let userMessage = 'Unable to submit your message at this time. Please try again.';
        try {
          const result = await response.json();
          if (result && Array.isArray(result.errors) && result.errors.length > 0) {
            userMessage = result.errors.map((errItem: any) => errItem.message || 'Validation error').join('. ');
          } else if (result && typeof result.error === 'string') {
            userMessage = result.error;
          }
        } catch {
          // Response body was not JSON, keep default friendly message
        }
        setErrorMessage(userMessage);
      }
    } catch (err) {
      console.error('Form submission network error:', err);
      setErrorMessage(
        'A network connection error occurred. Please check your internet connection and try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="text-white py-16 px-4 sm:px-6 md:px-12 lg:px-16 relative">
      <div className="max-w-6xl mx-auto">
        {/* Countdown Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-emerald-300 border border-emerald-500/30 text-xs font-semibold uppercase mb-3">
            <Clock size={15} />
            Countdown to Election Day
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-md">
            ভোটের কাউন্টডাউন ও যোগাযোগ
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto mt-2 text-sm sm:text-base">
            Every club member's feedback, ideas, and endorsements are valuable for our transparent treasury roadmap.
          </p>

          {/* Countdown Clock Display */}
          <div className="grid grid-cols-4 gap-3 sm:gap-6 max-w-xl mx-auto mt-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-lg">
              <span className="block text-2xl sm:text-4xl font-extrabold text-[#05f244] font-mono">{timeLeft.days}</span>
              <span className="text-[11px] sm:text-xs text-gray-300 font-semibold uppercase mt-1">Days</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-lg">
              <span className="block text-2xl sm:text-4xl font-extrabold text-white font-mono">{timeLeft.hours}</span>
              <span className="text-[11px] sm:text-xs text-gray-300 font-semibold uppercase mt-1">Hours</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-lg">
              <span className="block text-2xl sm:text-4xl font-extrabold text-white font-mono">{timeLeft.minutes}</span>
              <span className="text-[11px] sm:text-xs text-gray-300 font-semibold uppercase mt-1">Minutes</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-lg">
              <span className="block text-2xl sm:text-4xl font-extrabold text-yellow-300 font-mono">{timeLeft.seconds}</span>
              <span className="text-[11px] sm:text-xs text-gray-300 font-semibold uppercase mt-1">Seconds</span>
            </div>
          </div>
        </motion.div>

        {/* Contact & Message Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Candidate Info Box */}
          <motion.div
            className="lg:col-span-5 bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-white/20 shadow-[0_8px_30px_rgba(37,162,68,0.25)] space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                Candidate Headquarters
              </span>
              <h3 className="text-2xl font-bold text-white">
                {CAMPAIGN_INFO.candidateName}
              </h3>
              <p className="text-xs sm:text-sm text-emerald-200 mt-1 font-semibold">
                {CAMPAIGN_INFO.officialHeaderTitle}
              </p>
            </div>

            <div className="space-y-4 text-sm text-gray-200">
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-[#05f244] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-gray-400 block">Direct Email</span>
                  <a href={`mailto:${CAMPAIGN_INFO.socialLinks.email}`} className="text-white hover:text-[#05f244] transition-colors font-medium">
                    {CAMPAIGN_INFO.socialLinks.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#05f244] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-gray-400 block">Campus</span>
                  <span className="text-white font-medium">
                    {CAMPAIGN_INFO.department}, {CAMPAIGN_INFO.institution}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar size={18} className="text-[#05f244] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-gray-400 block">Key Timeline</span>
                  <p className="text-white font-medium">
                    Campaign: <strong>{CAMPAIGN_INFO.campaignPeriod}</strong>
                  </p>
                  <p className="text-emerald-300 font-bold">
                    Voting Day: <strong>{CAMPAIGN_INFO.electionDate}</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Campaign mark reminder */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
              <div className="text-3xl">⌨️</div>
              <div>
                <p className="text-xs text-gray-300">ভোটের দিন মনে রাখবেন:</p>
                <p className="text-sm font-bold text-[#05f244]">কীবোর্ড (Keyboard) মার্কায় ভোট দিন</p>
                <p className="text-[11px] text-gray-400">"{CAMPAIGN_INFO.manifestoCentralTheme}"</p>
              </div>
            </div>
          </motion.div>

          {/* Functional Message / Endorsement Form */}
          <motion.div
            className="lg:col-span-7 bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-white/20 shadow-[0_8px_30px_rgba(37,162,68,0.25)]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-white font-bold text-lg mb-2">
              <MessageSquare size={20} className="text-[#05f244]" />
              <h3>মতামত বা সমর্থন পাঠান (Message / Endorsement)</h3>
            </div>
            <p className="text-xs text-gray-300 mb-5">
              Submit your thoughts, suggestions for club budgeting, or campaign endorsement. Your message is delivered directly to the candidate's campaign.
            </p>

            {/* Success state */}
            {submitSuccess ? (
              <motion.div
                className="bg-[#25a244]/20 border border-[#25a244] p-6 rounded-2xl text-center space-y-3"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <CheckCircle2 size={44} className="text-[#05f244] mx-auto animate-bounce" />
                <h4 className="text-lg font-bold text-white">ধন্যবাদ! আপনার বার্তা সফলভাবে সংরক্ষিত হয়েছে।</h4>
                <p className="text-sm text-gray-200">
                  Your message has been verified and received directly by the candidate's campaign.
                </p>
                <button
                  onClick={() => {
                    setSubmitSuccess(false);
                    setErrorMessage(null);
                    setValidationError(null);
                  }}
                  className="mt-3 inline-block bg-[#25a244] hover:bg-[#1f8838] text-white px-5 py-2 rounded-full text-xs font-semibold cursor-pointer shadow-md"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot hidden input for spam protection (Formspree _gotcha) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="gotcha-field">Leave this empty</label>
                  <input
                    id="gotcha-field"
                    type="text"
                    name="_gotcha"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  />
                </div>

                {/* Validation or Error Message display */}
                {validationError && (
                  <div className="p-3 rounded-xl bg-amber-500/20 border border-amber-400 text-amber-200 text-xs flex items-center gap-2">
                    <ShieldAlert size={16} className="text-amber-400 shrink-0" />
                    <span>{validationError}</span>
                  </div>
                )}

                {errorMessage && (
                  <div className="p-3 rounded-xl bg-red-500/20 border border-red-400 text-red-200 text-xs flex items-start gap-2">
                    <AlertCircle size={16} className="text-red-400 shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="form-name" className="block text-xs font-semibold text-gray-300 mb-1">
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="form-name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Tanvir Ahmed"
                      value={formData.name}
                      disabled={isSubmitting}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-[#25a244] text-sm disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="form-batch" className="block text-xs font-semibold text-gray-300 mb-1">
                      PCIU Batch / ID <span className="text-gray-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      id="form-batch"
                      name="batch"
                      type="text"
                      placeholder="e.g. CSE 28th Batch"
                      value={formData.batch}
                      disabled={isSubmitting}
                      onChange={(e) => setFormData({ ...formData, batch: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-[#25a244] text-sm disabled:opacity-50"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="form-message" className="block text-xs font-semibold text-gray-300 mb-1">
                    Your Message or Suggestion <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Write your feedback, questions on financial transparency, or words of encouragement for Ovi..."
                    value={formData.message}
                    disabled={isSubmitting}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:border-[#25a244] text-sm disabled:opacity-50"
                  />
                </div>

                {/* Privacy Assurance Statement matching prompt requirement */}
                <div className="p-3 rounded-xl bg-black/25 border border-white/10 flex items-start gap-2.5 text-left">
                  <Lock size={15} className="text-[#05f244] shrink-0 mt-0.5" />
                  <p className="text-[11px] text-gray-300 leading-relaxed">
                    <strong>Privacy Guarantee:</strong> Your message and details are collected strictly for Iftekhar Hossen Ovi's PCIU Computer Club election campaign. Your message or student ID will never be published publicly or shared with third parties without your explicit permission.
                  </p>
                </div>

                {/* Submit button with loader */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#25a244] hover:bg-[#1f8838] disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-xl shadow-[0_10px_20px_rgba(37,162,68,0.5)] transition-all transform hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2 cursor-pointer text-sm"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin text-white" />
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>বার্তা প্রেরণ করুন (Submit Message)</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
