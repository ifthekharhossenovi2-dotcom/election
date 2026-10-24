import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CAMPAIGN_INFO } from '../data/campaignData';
import { ShieldCheck, Calendar, Award } from 'lucide-react';

export const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#093A79] text-gray-300 py-10 mt-20 border-t border-white/10 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-20 bg-[#25a244]/20 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="flex justify-center py-2">
          <button
            onClick={() => {
              navigate('/');
              handleScrollTop();
            }}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <span className="text-3xl transform group-hover:scale-110 transition-transform">⌨️</span>
            <p className="text-3xl text-[#25a244] font-extrabold tracking-wide group-hover:text-[#05f244] transition-colors">
              🗳️ Ovi
            </p>
          </button>
        </div>

        <h2 className="text-xl md:text-2xl font-bold text-white mb-2 drop-shadow-lg">
          {CAMPAIGN_INFO.officialHeaderTitle}
        </h2>

        <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mb-4 font-medium">
          {CAMPAIGN_INFO.department} • {CAMPAIGN_INFO.institution}
        </p>

        {/* Bengali Voting Appeal matching reference */}
        <div className="my-6 py-4 px-6 bg-white/5 rounded-2xl max-w-3xl mx-auto border border-white/10 shadow-inner">
          <p className="font-extrabold text-base md:text-xl py-2 text-white">
            আপনার মূল্যবান ভোটটি{' '}
            <span className="text-[#05f244] md:text-2xl font-black underline decoration-emerald-500/50 underline-offset-4">
              “{CAMPAIGN_INFO.bengaliCandidateName}”
            </span>{' '}
            কে{' '}
            <span className="text-[#05f244] md:text-2xl font-black underline decoration-emerald-500/50 underline-offset-4">
              “{CAMPAIGN_INFO.bengaliSymbolName} ({CAMPAIGN_INFO.symbolEmoji})”
            </span>{' '}
            মার্কায় ভোট দিয়ে জয়যুক্ত করুন
          </p>
          <p className="text-emerald-300 font-semibold text-sm md:text-base mt-1">
            {CAMPAIGN_INFO.votingDesignationBengali}
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap justify-center gap-6 py-4 text-sm text-gray-300">
          <button onClick={() => { navigate('/'); handleScrollTop(); }} className="hover:text-[#05f244] transition-colors cursor-pointer">Home</button>
          <button onClick={() => { navigate('/skills'); handleScrollTop(); }} className="hover:text-[#05f244] transition-colors cursor-pointer">Skills</button>
          <button onClick={() => { navigate('/electionSection'); handleScrollTop(); }} className="hover:text-[#05f244] transition-colors cursor-pointer">Election Banner</button>
          <button onClick={() => { navigate('/electionPage'); handleScrollTop(); }} className="hover:text-[#05f244] transition-colors cursor-pointer">Manifesto (১২ দফা)</button>
          <button onClick={() => { navigate('/finance-demo'); handleScrollTop(); }} className="hover:text-[#05f244] transition-colors cursor-pointer">Finance Demonstration</button>
          <button onClick={() => { navigate('/gallery1'); handleScrollTop(); }} className="hover:text-[#05f244] transition-colors cursor-pointer">Gallery & Certificates</button>
        </div>

        <hr className="border-white/15 my-6 max-w-4xl mx-auto" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto text-sm">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-base">
            <Calendar size={18} className="text-[#05f244]" />
            <span>Election Date: {CAMPAIGN_INFO.electionDate} ({CAMPAIGN_INFO.bengaliElectionDate})</span>
          </div>

          <div className="flex items-center gap-2 text-emerald-300">
            <ShieldCheck size={18} className="text-[#05f244]" />
            <span className="font-semibold">"{CAMPAIGN_INFO.manifestoCentralTheme}"</span>
          </div>
        </div>

        <div className="mt-2 text-xs text-emerald-400 font-medium">
          <span>{CAMPAIGN_INFO.closingPrinciple}</span>
        </div>

        <div className="mt-8 text-xs text-gray-400">
          <p>© 2026 Campaign for Iftekhar Hossen Ovi. Treasurer Candidate, PCIU Computer Club. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
