import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Typewriter } from './Typewriter';
import { CAMPAIGN_INFO } from '../data/campaignData';
import { ShieldCheck, FileSpreadsheet, Vote, Calendar, Award } from 'lucide-react';
import candidateImg from '../assets/candidate.jpg';
import symbolImg from '../assets/symbol.jpg';

export const Designation: React.FC = () => {
  const navigate = useNavigate();

  const typewriterWords = [
    'Every Taka Should Have a Purpose...',
    'Clear Records. Planned Spending. Accountable Finances...',
    'Treasurer — PCIU Computer Club...',
    'Election 2026–2027 • Symbol: Keyboard ⌨️...'
  ];

  const textContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const textVariant = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' as const }
    }
  };

  return (
    <section className="text-white flex flex-col-reverse lg:flex-row items-center justify-between min-h-[90vh] px-5 md:px-10 lg:px-16 py-20 md:py-28 gap-12 lg:gap-20 relative overflow-hidden">
      {/* Decorative ambient glowing orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#25a244]/15 rounded-full blur-3xl pointer-events-none animate-ambient" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#2F58C2]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Left text column */}
      <motion.div
        className="flex-1 z-10"
        variants={textContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={textVariant} className="flex items-center gap-2 mb-3">
          <span className="px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-[#25a244]/20 border border-[#25a244]/40 text-[#05f244] shadow-sm">
            {CAMPAIGN_INFO.officialHeaderTitle}
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/20">
            <Calendar size={13} className="text-[#05f244]" />
            29 Oct 2026
          </span>
        </motion.div>

        <motion.p variants={textVariant} className="text-2xl md:text-3xl font-bold mb-2 text-gray-200">
          Hello I'm
        </motion.p>

        <motion.h1
          variants={textVariant}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-3 text-[#25a244] tracking-tight drop-shadow-lg"
        >
          {CAMPAIGN_INFO.candidateName}
        </motion.h1>

        <motion.div variants={textVariant} className="mb-4">
          <p className="text-lg md:text-xl font-bold text-emerald-300">
            {CAMPAIGN_INFO.bengaliCandidateName} •{' '}
            <span className="text-white">{CAMPAIGN_INFO.bengaliPosition}</span>
          </p>
        </motion.div>

        <motion.h2
          variants={textVariant}
          className="text-xl md:text-2xl font-semibold mb-6 text-gray-300 flex flex-wrap items-center gap-2"
        >
          <span>Candidate for Treasurer,</span>
          <span className="text-emerald-400 font-bold">
            <Typewriter words={typewriterWords} loop={0} cursor={true} cursorStyle="_" />
          </span>
        </motion.h2>

        <motion.p
          variants={textVariant}
          className="text-gray-200 mb-6 leading-relaxed text-sm md:text-base max-w-2xl text-justify"
        >
          I am a student of Computer Science & Engineering at{' '}
          <strong className="text-white">Port City International University (PCIU)</strong>, dedicated to institutionalizing
          responsible budgeting and financial transparency. Guided by the core principle{' '}
          <strong className="text-emerald-300">"{CAMPAIGN_INFO.manifestoCentralTheme}"</strong>, I aim to ensure{' '}
          <span className="text-white font-semibold">{CAMPAIGN_INFO.closingPrinciple}</span> across all club operations.
        </motion.p>

        {/* Campaign Pillars Pills */}
        <motion.div variants={textVariant} className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/15 hover:border-[#25a244] transition-all">
            <div className="flex items-center gap-2 text-[#05f244] font-bold text-sm mb-1">
              <ShieldCheck size={16} />
              <span>Transparency</span>
            </div>
            <p className="text-xs text-gray-300">Every taka earned & spent logged in real-time.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/15 hover:border-[#25a244] transition-all">
            <div className="flex items-center gap-2 text-[#05f244] font-bold text-sm mb-1">
              <FileSpreadsheet size={16} />
              <span>Digital Audits</span>
            </div>
            <p className="text-xs text-gray-300">Structured Sheets with voucher & memo scans.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/15 hover:border-[#25a244] transition-all">
            <div className="flex items-center gap-2 text-[#05f244] font-bold text-sm mb-1">
              <Award size={16} />
              <span>Clean Handover</span>
            </div>
            <p className="text-xs text-gray-300">Zero debt, audited ledgers for future committee.</p>
          </div>
        </motion.div>

        {/* Action Buttons matching Hasnat's styling */}
        <motion.div variants={textVariant} className="flex flex-wrap items-center gap-4">
          <button
            onClick={() => {
              navigate('/electionPage');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-[#25a244] hover:bg-[#1f8838] text-white font-bold px-7 py-3.5 rounded-full shadow-[0_15px_30px_rgba(37,162,68,0.5)] transition-all transform hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2 text-base"
          >
            <Vote size={20} />
            <span>নির্বাচন ইশতিহার (১২ দফা)</span>
          </button>

          <button
            onClick={() => {
              navigate('/finance-demo');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-full border border-white/30 backdrop-blur-md transition-all transform hover:scale-105 cursor-pointer flex items-center gap-2 text-sm"
          >
            <FileSpreadsheet size={18} className="text-[#05f244]" />
            <span>Finance Demo & Ledger</span>
          </button>
        </motion.div>
      </motion.div>

      {/* Right candidate photo with round frame and glowing shadow */}
      <motion.div
        className="flex-1 flex flex-col items-center justify-center relative z-10"
        initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        whileHover={{
          scale: 1.04,
          rotate: 2,
          boxShadow: '0 25px 50px rgba(37, 162, 68, 0.75)'
        }}
      >
        <div className="relative group">
          {/* Ambient outer rotating gradient ring */}
          <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-[#25a244] via-[#05f244] to-[#2F58C2] opacity-70 blur-md group-hover:opacity-100 transition duration-500 animate-pulse" />

          {/* Portrait Container */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-4 border-[#25a244] shadow-[0_20px_50px_rgba(37,162,68,0.65)] bg-[#093A79]">
            <img
              src={candidateImg}
              alt="Iftekhar Hossen Ovi"
              className="w-full h-full object-cover object-top -mt-[25px] transition-transform duration-500 group-hover:scale-105"
              style={{ marginTop: '-25px' }}
            />
          </div>

          {/* Floating Symbol Pill Badge */}
          <motion.div
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#020024]/95 border-2 border-[#25a244] shadow-[0_10px_25px_rgba(37,162,68,0.6)] px-5 py-2 rounded-full flex items-center gap-3 backdrop-blur-md whitespace-nowrap z-20 cursor-pointer"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            onClick={() => navigate('/electionSection')}
          >
            <div className="w-8 h-8 rounded-full bg-white overflow-hidden p-0.5 border border-[#25a244]">
              <img src={symbolImg} alt="Keyboard Mark" className="w-full h-full object-contain" />
            </div>
            <div className="text-left">
              <span className="text-[10px] text-gray-300 block font-medium leading-none">মার্কা / Symbol</span>
              <span className="text-sm font-extrabold text-[#05f244] leading-tight block">কীবোর্ড (Keyboard ⌨️)</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
