import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CAMPAIGN_INFO, LEADERSHIP_DATA, ACHIEVEMENTS_DATA } from '../data/campaignData';
import { 
  Building2, 
  GraduationCap, 
  ShieldCheck, 
  Target, 
  HeartHandshake, 
  Award,
  Trophy,
  CheckCircle,
  FileSpreadsheet,
  Briefcase,
  Calendar,
  ExternalLink
} from 'lucide-react';
import candidateImg from '../assets/candidate.jpg';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vision' | 'leadership' | 'achievements'>('vision');

  return (
    <section id="about" className="text-white py-16 px-4 sm:px-6 md:px-12 lg:px-16 relative">
      {/* Ambient background light */}
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-[#25a244]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-emerald-300 border border-emerald-500/30 text-xs font-semibold uppercase mb-3">
            <GraduationCap size={15} />
            About the Candidate
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-md">
            প্রার্থীর পরিচিতি, নেতৃত্ব ও অর্জন
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-3 text-sm md:text-base">
            Dedicated student of CSE at Port City International University (PCIU), active club organizer, and competitive programmer running for Treasurer.
          </p>
        </motion.div>

        {/* Profile Card & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          {/* Candidate Card */}
          <motion.div
            className="lg:col-span-5 bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-white/20 shadow-[0_8px_30px_rgba(37,162,68,0.25)] flex flex-col items-center text-center relative overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-[#25a244] shadow-[0_10px_30px_rgba(37,162,68,0.6)] mb-6 bg-[#093A79]">
              <img
                src={candidateImg}
                alt={CAMPAIGN_INFO.candidateName}
                className="w-full h-full object-cover object-top -mt-[20px]"
              />
            </div>

            <h3 className="text-2xl font-extrabold text-white mb-1">
              {CAMPAIGN_INFO.candidateName}
            </h3>
            <p className="text-[#05f244] font-bold text-base mb-2">
              {CAMPAIGN_INFO.bengaliCandidateName}
            </p>
            <p className="text-xs font-medium text-emerald-200 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full mb-4">
              {CAMPAIGN_INFO.officialHeaderTitle}
            </p>

            <div className="w-full space-y-2.5 text-left text-xs sm:text-sm text-gray-200 border-t border-white/10 pt-4">
              <div className="flex items-center gap-2">
                <Building2 size={16} className="text-[#05f244] shrink-0" />
                <span><strong>Dept:</strong> {CAMPAIGN_INFO.department}</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap size={16} className="text-[#05f244] shrink-0" />
                <span><strong>University:</strong> {CAMPAIGN_INFO.institution}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base shrink-0">⌨️</span>
                <span><strong>Symbol:</strong> {CAMPAIGN_INFO.symbolName} ({CAMPAIGN_INFO.bengaliSymbolName})</span>
              </div>
              <div className="flex items-center gap-2 text-yellow-300">
                <Target size={16} className="text-yellow-400 shrink-0" />
                <span><strong>Theme:</strong> "{CAMPAIGN_INFO.manifestoCentralTheme}"</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Tabbed sections for Vision, Leadership, and Achievements */}
          <motion.div
            className="lg:col-span-7 space-y-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-black/40 border border-white/15">
              <button
                onClick={() => setActiveTab('vision')}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  activeTab === 'vision'
                    ? 'bg-[#25a244] text-white shadow-md'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Target size={16} />
                <span>Treasury Vision</span>
              </button>
              <button
                onClick={() => setActiveTab('leadership')}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  activeTab === 'leadership'
                    ? 'bg-[#25a244] text-white shadow-md'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Briefcase size={16} />
                <span>Leadership ({LEADERSHIP_DATA.length})</span>
              </button>
              <button
                onClick={() => setActiveTab('achievements')}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  activeTab === 'achievements'
                    ? 'bg-[#25a244] text-white shadow-md'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Trophy size={16} />
                <span>Achievements ({ACHIEVEMENTS_DATA.length})</span>
              </button>
            </div>

            {/* Tab 1: Vision */}
            {activeTab === 'vision' && (
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/15 hover:border-[#25a244] transition-all">
                  <div className="flex items-center gap-3 text-[#05f244] font-bold text-lg mb-2">
                    <Target size={22} />
                    <h3>Vision: Every Taka Should Have a Purpose</h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-200 leading-relaxed text-justify">
                    "My vision for the PCIU Computer Club Treasury is rooted in absolute clarity. 
                    Every single taka collected from club fees, university allotments, and corporate sponsorships 
                    must have an intentional, planned objective that benefits general students. 
                    Through digital recordkeeping and rigorous variance analysis, we will make club finances completely open, auditable, and debt-free."
                  </p>
                  <div className="mt-3 pt-3 border-t border-white/10 text-xs text-emerald-300 font-semibold flex items-center gap-2">
                    <CheckCircle size={15} />
                    <span>Closing Principle: {CAMPAIGN_INFO.closingPrinciple}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/15">
                    <div className="flex items-center gap-2 text-yellow-300 font-bold text-sm mb-1.5">
                      <ShieldCheck size={16} className="text-[#05f244]" />
                      <h4>Planned Spending</h4>
                    </div>
                    <p className="text-xs text-gray-300 leading-normal">
                      Every event itemized before execution with vendor quotes to prevent overspending and budget shocks.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/15">
                    <div className="flex items-center gap-2 text-yellow-300 font-bold text-sm mb-1.5">
                      <FileSpreadsheet size={16} className="text-[#05f244]" />
                      <h4>Digital Cloud Ledgers</h4>
                    </div>
                    <p className="text-xs text-gray-300 leading-normal">
                      Cloud-based Excel/Sheets audit trail with linked voucher scans, instantly accessible by advisers and committee.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/15">
                    <div className="flex items-center gap-2 text-yellow-300 font-bold text-sm mb-1.5">
                      <Award size={16} className="text-[#05f244]" />
                      <h4>Student Priority</h4>
                    </div>
                    <p className="text-xs text-gray-300 leading-normal">
                      Maximizing budget allocation towards hands-on programming contests, workshops, and learning hackathons.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/15">
                    <div className="flex items-center gap-2 text-yellow-300 font-bold text-sm mb-1.5">
                      <HeartHandshake size={16} className="text-[#05f244]" />
                      <h4>Accountable Handover</h4>
                    </div>
                    <p className="text-xs text-gray-300 leading-normal">
                      Delivering an exhaustive audited ledger with zero unaccounted obligations to the 2027–2028 committee.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Leadership & Campus Involvement */}
            {activeTab === 'leadership' && (
              <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
                {LEADERSHIP_DATA.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-5 border border-white/15 hover:border-[#25a244] transition-all text-left"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <h4 className="font-bold text-white text-base flex items-center gap-2">
                        <span className="text-[#05f244]">◈</span>
                        <span>{item.role}</span>
                        <span className="text-gray-300 font-normal text-xs sm:text-sm">— {item.organization}</span>
                      </h4>
                      <span className="text-[11px] font-semibold text-emerald-300 bg-emerald-950/70 px-2.5 py-0.5 rounded-full border border-emerald-500/30 shrink-0 self-start sm:self-auto">
                        {item.type} {item.duration && `• ${item.duration}`}
                      </span>
                    </div>

                    <ul className="space-y-1 mt-2 text-xs text-gray-300 list-disc list-inside">
                      {item.description.map((desc, dIdx) => (
                        <li key={dIdx} className="leading-relaxed">{desc}</li>
                      ))}
                    </ul>

                    {item.certificate && (
                      <div className="mt-2.5 inline-flex items-center gap-1.5 text-[11px] text-yellow-300 font-semibold bg-yellow-950/40 px-2.5 py-1 rounded-md border border-yellow-500/30">
                        <Award size={13} className="text-yellow-400" />
                        <span>{item.certificate}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Tab 3: Certifications & Achievements */}
            {activeTab === 'achievements' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-h-[500px] overflow-y-auto pr-1">
                {ACHIEVEMENTS_DATA.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/15 hover:border-[#25a244] hover:bg-white/15 transition-all text-left flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start gap-2 mb-2">
                        {item.category === 'award' ? (
                          <Trophy size={18} className="text-yellow-400 shrink-0 mt-0.5" />
                        ) : (
                          <Award size={18} className="text-[#05f244] shrink-0 mt-0.5" />
                        )}
                        <h4 className="font-bold text-white text-sm leading-snug">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-xs text-emerald-300 font-medium">
                        {item.issuer}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
                      <span>{item.date || 'Verified'}</span>
                      {item.validity && (
                        <span className="text-yellow-300 font-mono text-[10px]">{item.validity}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
