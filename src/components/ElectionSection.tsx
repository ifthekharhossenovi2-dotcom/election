import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { CAMPAIGN_INFO } from '../data/campaignData';
import symbolImg from '../assets/symbol.jpg';
import candidateImg from '../assets/candidate.jpg';
import { CheckCircle2, HeartHandshake, Sparkles } from 'lucide-react';

export const ElectionSection: React.FC = () => {
  const navigate = useNavigate();
  const [pledged, setPledged] = useState(false);
  const [pledgeCount, setPledgeCount] = useState(384);

  const handlePledge = () => {
    if (!pledged) {
      setPledged(true);
      setPledgeCount((prev) => prev + 1);
    }
    // Launch celebratory confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#25a244', '#05f244', '#facc15', '#ffffff']
    });
  };

  return (
    <div className="pt-16 md:pt-20 px-3 sm:px-6 md:px-10">
      <section
        className="relative flex flex-col items-center justify-center text-center rounded-3xl md:rounded-4xl overflow-hidden py-14 px-4 md:px-10 shadow-2xl border border-white/20"
        style={{
          background: 'linear-gradient(135deg, #020024 0%, #093A79 50%, #2F58C2 100%)',
          color: 'white'
        }}
      >
        {/* Background Code Watermark matching reference */}
        <div className="absolute inset-0 opacity-10 select-none overflow-hidden pointer-events-none">
          <pre className="text-[10px] md:text-xs text-green-300 whitespace-pre-wrap font-mono p-6 md:p-10 text-left">
{`// Port City International University Computer Club Election
function voteNow() {
  const candidate = "${CAMPAIGN_INFO.candidateName}";
  const designation = "${CAMPAIGN_INFO.position}";
  const term = "${CAMPAIGN_INFO.term}";
  const symbol = "${CAMPAIGN_INFO.symbolName} (${CAMPAIGN_INFO.symbolEmoji})";
  const electionDate = "${CAMPAIGN_INFO.electionDate}";
  const slogan = "${CAMPAIGN_INFO.slogan}";
  
  const commitments = [
    "100% Financial Transparency",
    "Digital Spreadsheets & Audit Receipts",
    "Realistic Pre-Event Budgeting",
    "Clean Handover to Next Committee"
  ];
  
  console.log("Vote for Change & Integrity!");
  return { candidate, symbol, electionDate, victory: true };
}`}
          </pre>
        </div>

        {/* Ambient Top Glow */}
        <div className="absolute -top-20 w-80 h-40 bg-[#05f244]/20 rounded-full blur-3xl pointer-events-none" />

        {/* Three Floating Badges matching Hasnat's layout */}
        <div className="relative flex justify-center items-center gap-4 sm:gap-6 md:gap-12 mb-10 z-10">
          {/* Badge 1: PCIU Computer Club Logo */}
          <motion.div
            className="flex flex-col items-center"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full bg-white p-2.5 shadow-[0_20px_40px_rgba(37,162,68,0.7)] border-3 border-[#25a244] flex items-center justify-center">
              <img
                src="https://i.ibb.co.com/yn9tdWTF/club.png"
                alt="PCIU Computer Club"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="mt-2 text-[11px] md:text-xs font-semibold text-emerald-300">PCIU Club</span>
          </motion.div>

          {/* Badge 2: Election Mark (Keyboard Symbol) - Centered & Enlarged */}
          <motion.div
            className="flex flex-col items-center"
            animate={{ y: [-12, 12, -12] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full bg-white p-2 shadow-[0_25px_50px_rgba(5,242,68,0.8)] border-4 border-[#05f244] flex items-center justify-center relative group">
              <img
                src={symbolImg}
                alt="Keyboard Symbol"
                className="w-full h-full object-contain rounded-full transform group-hover:scale-105 transition-transform"
              />
              <span className="absolute -top-2 bg-[#25a244] text-white text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full shadow-md">
                মার্কা
              </span>
            </div>
            <span className="mt-2 text-xs md:text-sm font-extrabold text-[#05f244]">
              {CAMPAIGN_INFO.bengaliSymbolName} ({CAMPAIGN_INFO.symbolEmoji})
            </span>
          </motion.div>

          {/* Badge 3: Candidate Photo */}
          <motion.div
            className="flex flex-col items-center"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full bg-white overflow-hidden shadow-[0_20px_40px_rgba(37,162,68,0.7)] border-3 border-[#25a244]">
              <img
                src={candidateImg}
                alt={CAMPAIGN_INFO.candidateName}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <span className="mt-2 text-[11px] md:text-xs font-semibold text-emerald-300">ইফতেখার অভি</span>
          </motion.div>
        </div>

        {/* Floating Rotating Ballot Box Emoji */}
        <motion.div
          className="text-5xl md:text-6xl mb-4 select-none cursor-pointer"
          animate={{ scale: [1, 1.3, 1], rotate: [0, 15, -15, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          onClick={handlePledge}
          title="Click to support!"
        >
          🗳️
        </motion.div>

        {/* Main Header */}
        <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-white mb-2 drop-shadow-lg px-2 max-w-4xl leading-tight">
          {CAMPAIGN_INFO.officialHeaderTitle}
        </h1>

        {/* Bengali Call to Action matching Hasnat */}
        <p className="text-base sm:text-lg md:text-2xl font-extrabold py-3 max-w-4xl px-2 leading-relaxed">
          আপনার মূল্যবান ভোটটি{' '}
          <span className="text-[#05f244] text-xl sm:text-2xl md:text-3xl font-black underline decoration-emerald-500/60 underline-offset-4">
            “{CAMPAIGN_INFO.bengaliCandidateName}”
          </span>{' '}
          কে{' '}
          <span className="text-[#05f244] text-xl sm:text-2xl md:text-3xl font-black underline decoration-emerald-500/60 underline-offset-4">
            “{CAMPAIGN_INFO.bengaliSymbolName} ({CAMPAIGN_INFO.symbolEmoji})”
          </span>{' '}
          মার্কায় ভোট দিয়ে জয়যুক্ত করুন
        </p>

        {/* Designation Tag */}
        <p className="text-white text-base sm:text-lg md:text-2xl font-extrabold mb-2 tracking-wide text-emerald-200">
          {CAMPAIGN_INFO.votingDesignationBengali}
        </p>

        {/* Dates */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 my-2 text-sm md:text-lg">
          <p className="text-[#05f244] font-bold">
            Election Date: {CAMPAIGN_INFO.electionDate} ({CAMPAIGN_INFO.bengaliElectionDate})
          </p>
          <span className="hidden sm:inline text-white/50">•</span>
          <p className="text-gray-200 font-medium text-xs md:text-base">
            Campaign: {CAMPAIGN_INFO.campaignPeriod}
          </p>
        </div>

        {/* Central Theme and Closing Principle */}
        <div className="my-2 space-y-1">
          <p className="text-yellow-300 font-bold text-sm sm:text-base md:text-lg max-w-xl mx-auto">
            "{CAMPAIGN_INFO.manifestoCentralTheme}"
          </p>
          <p className="text-emerald-300 font-medium text-xs sm:text-sm">
            {CAMPAIGN_INFO.closingPrinciple}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6 z-10">
          <button
            onClick={() => {
              navigate('/electionPage');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-[#25a244] hover:bg-[#1f8838] text-white font-bold px-8 py-3.5 rounded-full shadow-[0_20px_40px_rgba(37,162,68,0.7)] transition-all transform hover:scale-105 active:scale-95 cursor-pointer text-base"
          >
            নির্বাচন ইশতিহার (Manifesto)
          </button>

          <button
            onClick={handlePledge}
            className={`font-semibold px-6 py-3.5 rounded-full border transition-all transform hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2 text-sm ${
              pledged
                ? 'bg-emerald-600 text-white border-emerald-400 shadow-[0_0_20px_rgba(5,242,68,0.6)]'
                : 'bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-md'
            }`}
          >
            {pledged ? (
              <>
                <CheckCircle2 size={18} className="text-white" />
                <span>সমর্থন নিশ্চিত! ({pledgeCount} জন)</span>
              </>
            ) : (
              <>
                <Sparkles size={18} className="text-[#05f244]" />
                <span>সমর্থন জানান / Vote Pledge</span>
              </>
            )}
          </button>
        </div>
      </section>
    </div>
  );
};
