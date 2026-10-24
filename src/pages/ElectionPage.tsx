import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { CAMPAIGN_INFO, MANIFESTO_COMMITMENTS, Commitment } from '../data/campaignData';
import symbolImg from '../assets/symbol.jpg';
import candidateImg from '../assets/candidate.jpg';
import { 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  FileSpreadsheet, 
  ShieldCheck, 
  GraduationCap, 
  Sparkles,
  Search,
  Filter,
  FileText,
  Printer,
  X,
  Target
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ElectionPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [showFullDocModal, setShowFullDocModal] = useState<boolean>(false);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#25a244', '#05f244', '#facc15', '#ffffff']
    });
  };

  const filteredCommitments = MANIFESTO_COMMITMENTS.filter((item) => {
    const matchesTag = selectedTag === 'All' || item.tag === selectedTag;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.bengaliTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  const uniqueTags = ['All', ...Array.from(new Set(MANIFESTO_COMMITMENTS.map((c) => c.tag)))];

  return (
    <section className="relative text-white overflow-hidden min-h-screen">
      {/* Top Banner with University Background */}
      <section
        className="relative flex flex-col items-center text-center py-20 md:py-28 px-4"
        style={{
          backgroundImage: "url('https://i.ibb.co.com/TM0yp3Mr/Port-City-International-University.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]" />

        <div className="relative z-10 flex flex-col items-center max-w-4xl px-3">
          {/* Floating Candidate and Symbol Badges */}
          <div className="flex justify-center items-center gap-4 md:gap-10 mb-8">
            <motion.img
              src="https://i.ibb.co.com/yn9tdWTF/club.png"
              alt="PCIU Computer Club"
              className="w-24 h-24 md:w-36 md:h-36 object-contain rounded-full bg-white p-2 shadow-[0_20px_40px_rgba(37,162,68,0.7)] border-3 border-[#25a244]"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="w-32 h-32 md:w-44 md:h-44 rounded-full bg-white p-2 shadow-[0_25px_50px_rgba(5,242,68,0.8)] border-4 border-[#05f244] flex items-center justify-center relative cursor-pointer"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              onClick={handleConfetti}
              title="কীবোর্ড মার্কা"
            >
              <img
                src={symbolImg}
                alt="Keyboard Symbol"
                className="w-full h-full object-contain rounded-full"
              />
              <span className="absolute -top-2 bg-[#25a244] text-white text-[10px] md:text-xs font-bold px-2.5 py-0.5 rounded-full shadow-md">
                মার্কা
              </span>
            </motion.div>
            <motion.img
              src={candidateImg}
              alt={CAMPAIGN_INFO.candidateName}
              className="w-24 h-24 md:w-36 md:h-36 object-cover object-top rounded-full bg-white shadow-[0_20px_40px_rgba(37,162,68,0.7)] border-3 border-[#25a244] -mt-[15px]"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
            />
          </div>

          {/* Floating Emoji */}
          <motion.div
            className="text-5xl md:text-6xl mb-4 select-none cursor-pointer"
            animate={{ scale: [1, 1.3, 1], rotate: [0, 15, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            onClick={handleConfetti}
          >
            🗳️
          </motion.div>

          {/* Corrected Header */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2 drop-shadow-lg leading-tight">
            {CAMPAIGN_INFO.officialHeaderTitle}
          </h1>

          <p className="text-lg md:text-2xl font-extrabold py-3 leading-relaxed">
            আপনার মূল্যবান ভোটটি{' '}
            <span className="text-[#05f244] text-xl md:text-3xl font-black underline decoration-emerald-500/50 underline-offset-4">
              “{CAMPAIGN_INFO.bengaliCandidateName}”
            </span>{' '}
            কে{' '}
            <span className="text-[#05f244] text-xl md:text-3xl font-black underline decoration-emerald-500/50 underline-offset-4">
              “{CAMPAIGN_INFO.bengaliSymbolName} ({CAMPAIGN_INFO.symbolEmoji})”
            </span>{' '}
            মার্কায় ভোট দিয়ে জয়যুক্ত করুন
          </p>

          <p className="text-white text-lg md:text-3xl font-extrabold text-emerald-200">
            {CAMPAIGN_INFO.votingDesignationBengali}
          </p>

          <div className="mt-2 text-sm md:text-lg flex items-center gap-2 text-[#05f244] font-bold">
            <span>Election Date: {CAMPAIGN_INFO.electionDate}</span>
            <span className="text-white/60">•</span>
            <span className="text-gray-200">Campaign: {CAMPAIGN_INFO.campaignPeriod}</span>
          </div>

          {/* Central Theme Highlight */}
          <div className="mt-4 p-4 rounded-2xl bg-black/40 border border-[#25a244] max-w-2xl backdrop-blur-md shadow-lg">
            <span className="text-xs uppercase tracking-wider text-emerald-300 font-bold block mb-1">
              Manifesto Central Theme
            </span>
            <p className="text-xl sm:text-2xl font-extrabold text-yellow-300">
              "{CAMPAIGN_INFO.manifestoCentralTheme}"
            </p>
            <p className="text-xs sm:text-sm text-gray-200 mt-1 font-medium">
              {CAMPAIGN_INFO.bengaliManifestoTheme}
            </p>
          </div>
        </div>
      </section>

      {/* Manifesto Content Section #manifesto */}
      <section
        id="manifesto"
        className="relative z-10 max-w-6xl mx-auto -mt-10 mb-20 bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-12 shadow-[0_8px_30px_rgba(37,162,68,0.3)] border border-white/20"
      >
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 className="text-3xl md:text-4xl font-extrabold text-center mb-2 text-yellow-300 drop-shadow-lg flex items-center justify-center gap-3">
            <span>🗳️</span>
            <span>নির্বাচন ইশতেহার — ১২ দফা অঙ্গীকার</span>
          </motion.h2>

          <p className="text-gray-200 text-sm md:text-base max-w-2xl mx-auto">
            A comprehensive financial roadmap ensuring every taka serves the members and growth of PCIU Computer Club.
          </p>

          {/* Quick link button to read full official manifesto document */}
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setShowFullDocModal(true)}
              className="bg-[#25a244] hover:bg-[#1f8838] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-lg transition-all transform hover:scale-105 flex items-center gap-2 cursor-pointer"
            >
              <FileText size={16} />
              <span>Read Full Official Manifesto Document (সম্পূর্ণ দলিল)</span>
            </button>
          </div>
        </motion.div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {uniqueTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedTag === tag
                    ? 'bg-[#25a244] text-white shadow-md shadow-[#25a244]/50'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search commitments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 rounded-full bg-black/40 border border-white/20 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#25a244]"
            />
          </div>
        </div>

        {/* Visual Summary Grid of all 12 commitments */}
        <div className="grid md:grid-cols-2 gap-6 text-justify text-white/90 leading-relaxed">
          {filteredCommitments.map((e, r) => {
            const isExpanded = expandedId === e.id;
            return (
              <motion.div
                key={e.id}
                className="bg-white/10 rounded-2xl p-5 sm:p-6 border border-white/10 hover:bg-white/15 hover:shadow-[0_0_20px_rgba(37,162,68,0.4)] transition-all cursor-pointer group flex flex-col justify-between"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (r % 6) * 0.05 }}
                onClick={() => toggleExpand(e.id)}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-lg md:text-xl font-bold text-[#14e147] group-hover:text-[#05f244] transition-colors flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-[#25a244]/20 border border-[#25a244] flex items-center justify-center text-xs font-mono text-emerald-300 shrink-0">
                        {e.id}
                      </span>
                      <span>{e.title}</span>
                    </h3>
                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-white/10 text-yellow-300 border border-white/15 shrink-0">
                      {e.tag}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-emerald-200 mb-2">
                    {e.bengaliTitle}
                  </p>

                  <p className="text-sm md:text-base text-gray-200 leading-normal mb-3 font-normal">
                    {e.summary}
                  </p>

                  {/* Expandable Section */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-t border-white/15 pt-3 mt-2 text-xs sm:text-sm text-gray-300 space-y-2 overflow-hidden"
                      >
                        <p className="leading-relaxed text-gray-200">{e.description}</p>
                        <div className="bg-black/30 rounded-xl p-3 border border-white/10 space-y-1">
                          <span className="text-[11px] font-bold text-[#05f244] block">Key Execution Protocol:</span>
                          <ul className="space-y-1">
                            {e.keyPoints.map((point, pIdx) => (
                              <li key={pIdx} className="flex items-center gap-1.5 text-xs text-gray-300">
                                <CheckCircle2 size={13} className="text-[#05f244] shrink-0" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-xs text-emerald-400 font-medium">
                  <span>{isExpanded ? 'সংক্ষিপ্ত করুন (Hide Details)' : 'বিস্তারিত দেখুন (Tap to Expand)'}</span>
                  {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Closing Principle Banner matching prompt */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-emerald-950/80 via-[#093A79] to-emerald-950/80 border-2 border-[#25a244] text-center shadow-xl">
          <span className="text-xs uppercase tracking-wider text-emerald-300 font-bold block mb-1">
            Closing Principle
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            "{CAMPAIGN_INFO.closingPrinciple}"
          </h3>
          <p className="text-sm text-emerald-300 font-semibold mt-1">
            {CAMPAIGN_INFO.bengaliClosingPrinciple}
          </p>
        </div>

        {/* Home Back Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <button
            onClick={() => {
              navigate('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-[#25a244] hover:bg-[#1f8838] text-white font-semibold px-8 py-3.5 rounded-full shadow-[0_20px_40px_rgba(37,162,68,0.7)] transition-transform transform hover:scale-105 active:scale-95 cursor-pointer text-base"
          >
            হোমে ফিরে যান (Back to Home)
          </button>

          <button
            onClick={() => {
              navigate('/finance-demo');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-full border border-white/20 transition-transform transform hover:scale-105 cursor-pointer text-sm"
          >
            View Finance Demo Ledger
          </button>
        </div>
      </section>

      {/* Full Official Manifesto Modal Document */}
      <AnimatePresence>
        {showFullDocModal && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="bg-[#093A79] border-2 border-[#25a244] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 text-white shadow-2xl relative">
              <button
                onClick={() => setShowFullDocModal(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close Modal"
              >
                <X size={24} />
              </button>

              <div className="border-b border-white/20 pb-6 mb-6 text-center">
                <span className="text-xs font-bold text-emerald-300 uppercase tracking-widest block mb-1">
                  OFFICIAL ELECTION MANIFESTO DOCUMENT
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {CAMPAIGN_INFO.officialHeaderTitle}
                </h2>
                <p className="text-sm text-gray-300 mt-1">
                  Candidate: <strong>{CAMPAIGN_INFO.candidateName}</strong> ({CAMPAIGN_INFO.bengaliCandidateName}) • Symbol: {CAMPAIGN_INFO.symbolEmoji} {CAMPAIGN_INFO.symbolName}
                </p>

                <div className="mt-4 p-3 bg-emerald-950/60 rounded-xl border border-emerald-500/40 inline-block">
                  <span className="text-xs text-emerald-300 font-semibold block">Central Theme:</span>
                  <span className="text-lg font-extrabold text-yellow-300">"{CAMPAIGN_INFO.manifestoCentralTheme}"</span>
                </div>
              </div>

              {/* All 12 commitments in official document form */}
              <div className="space-y-6 text-sm text-gray-200">
                {MANIFESTO_COMMITMENTS.map((item) => (
                  <div key={item.id} className="bg-black/30 rounded-xl p-4 sm:p-5 border border-white/10">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="font-bold text-base text-[#14e147]">
                        Clause {item.id}. {item.title} ({item.bengaliTitle})
                      </h4>
                      <span className="text-[10px] uppercase font-bold text-yellow-300 px-2 py-0.5 rounded bg-white/10">
                        {item.tag}
                      </span>
                    </div>
                    <p className="font-medium text-white mb-2">{item.summary}</p>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-3">{item.description}</p>
                    
                    <div className="text-xs text-emerald-300">
                      <strong>Binding Actions:</strong>
                      <ul className="list-disc list-inside mt-1 space-y-0.5 text-gray-300">
                        {item.keyPoints.map((pt, pIdx) => (
                          <li key={pIdx}>{pt}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* Closing Principle */}
              <div className="mt-8 pt-6 border-t border-white/20 text-center space-y-2">
                <span className="text-xs uppercase text-emerald-300 font-bold tracking-widest block">
                  Closing Principle
                </span>
                <p className="text-xl font-black text-white">
                  "{CAMPAIGN_INFO.closingPrinciple}"
                </p>
                <p className="text-sm text-emerald-400">
                  {CAMPAIGN_INFO.bengaliClosingPrinciple}
                </p>

                <div className="pt-4 flex justify-center">
                  <button
                    onClick={() => setShowFullDocModal(false)}
                    className="bg-[#25a244] hover:bg-[#1f8838] text-white px-8 py-2.5 rounded-full font-bold shadow-lg transition-transform hover:scale-105 cursor-pointer text-sm"
                  >
                    Close Document
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
