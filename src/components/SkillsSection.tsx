import React from 'react';
import { motion } from 'motion/react';
import { 
  Star, 
  Code, 
  Globe, 
  Server, 
  Database, 
  Terminal, 
  Layers, 
  Lightbulb, 
  Cpu, 
  Wrench, 
  FileSpreadsheet, 
  Table, 
  Binary, 
  Palette, 
  Calculator, 
  BookOpen, 
  Receipt, 
  HandCoins, 
  CreditCard 
} from 'lucide-react';
import { SKILLS_DATA } from '../data/campaignData';

export const SkillsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code size={18} />;
      case 'Globe': return <Globe size={18} />;
      case 'Server': return <Server size={18} />;
      case 'Database': return <Database size={18} />;
      case 'Terminal': return <Terminal size={18} />;
      case 'Layers': return <Layers size={18} />;
      case 'Lightbulb': return <Lightbulb size={18} />;
      case 'Cpu': return <Cpu size={18} />;
      case 'Wrench': return <Wrench size={18} />;
      case 'FileSpreadsheet': return <FileSpreadsheet size={18} />;
      case 'Table': return <Table size={18} />;
      case 'Binary': return <Binary size={18} />;
      case 'Palette': return <Palette size={18} />;
      case 'Calculator': return <Calculator size={18} />;
      case 'BookOpen': return <BookOpen size={18} />;
      case 'Receipt': return <Receipt size={18} />;
      case 'HandCoins': return <HandCoins size={18} />;
      case 'CreditCard': return <CreditCard size={18} />;
      default: return <Star size={18} />;
    }
  };

  return (
    <section id="skills" className="text-white py-16 px-5 sm:px-8 md:px-16 relative">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading matching Hasnat's FaStar design */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 flex items-center justify-center gap-3 text-white drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Star className="text-[#25a244] fill-[#25a244] text-3xl md:text-4xl animate-pulse" />
          <span>My Skills</span>
          <Star className="text-[#25a244] fill-[#25a244] text-3xl md:text-4xl animate-pulse" />
        </motion.h1>

        {/* Category 1: Treasury & Financial Management Skills */}
        <motion.div
          className="mb-10 bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-6 pb-2 border-b-2 border-[#25a244]">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-[#05f244]">📊</span>
              <span>Treasury & Financial Management</span>
            </h2>
            <span className="text-xs text-emerald-300 font-semibold uppercase bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-500/30">
              Governance
            </span>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            {SKILLS_DATA.treasury.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-2.5 bg-white/10 px-4 sm:px-5 py-2.5 rounded-full shadow-md hover:bg-white/20 transition-all cursor-pointer border border-white/10 hover:border-[#25a244] hover:shadow-[0_0_15px_rgba(37,162,68,0.5)]"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-[#05f244]">{getIcon(item.icon)}</span>
                <span className="font-semibold text-sm sm:text-base text-gray-100">{item.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category 2: Programming Languages */}
        <motion.div
          className="mb-10 bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center justify-between mb-6 pb-2 border-b-2 border-white/30">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-[#05f244]">💻</span>
              <span>Programming Languages</span>
            </h2>
            <span className="text-xs text-blue-300 font-semibold uppercase bg-blue-950/80 px-2.5 py-1 rounded-full border border-blue-500/30">
              Languages
            </span>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            {SKILLS_DATA.programmingLanguages.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-2.5 bg-white/10 px-4 sm:px-5 py-2.5 rounded-full shadow-md hover:bg-white/20 transition-all cursor-pointer border border-white/10 hover:border-[#25a244] hover:shadow-[0_0_15px_rgba(37,162,68,0.5)]"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-[#05f244]">{getIcon(item.icon)}</span>
                <span className="font-medium text-sm sm:text-base">{item.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category 3: Web Development */}
        <motion.div
          className="mb-10 bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="flex items-center justify-between mb-6 pb-2 border-b-2 border-white/30">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-[#05f244]">🌐</span>
              <span>Web Development</span>
            </h2>
            <span className="text-xs text-purple-300 font-semibold uppercase bg-purple-950/80 px-2.5 py-1 rounded-full border border-purple-500/30">
              Web Tech
            </span>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            {SKILLS_DATA.webDevelopment.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-2.5 bg-white/10 px-4 sm:px-5 py-2.5 rounded-full shadow-md hover:bg-white/20 transition-all cursor-pointer border border-white/10 hover:border-[#25a244] hover:shadow-[0_0_15px_rgba(37,162,68,0.5)]"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-[#05f244]">{getIcon(item.icon)}</span>
                <span className="font-medium text-sm sm:text-base">{item.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category 4: Database & DBMS */}
        <motion.div
          className="mb-10 bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-6 pb-2 border-b-2 border-white/30">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-[#05f244]">🗄️</span>
              <span>Database & DBMS Concepts</span>
            </h2>
            <span className="text-xs text-cyan-300 font-semibold uppercase bg-cyan-950/80 px-2.5 py-1 rounded-full border border-cyan-500/30">
              Data Storage
            </span>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            {SKILLS_DATA.database.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-2.5 bg-white/10 px-4 sm:px-5 py-2.5 rounded-full shadow-md hover:bg-white/20 transition-all cursor-pointer border border-white/10 hover:border-[#25a244] hover:shadow-[0_0_15px_rgba(37,162,68,0.5)]"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-[#05f244]">{getIcon(item.icon)}</span>
                <span className="font-medium text-sm sm:text-base">{item.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category 5: Core Competencies */}
        <motion.div
          className="mb-10 bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <div className="flex items-center justify-between mb-6 pb-2 border-b-2 border-white/30">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-[#05f244]">⚡</span>
              <span>Core Competencies & Problem Solving</span>
            </h2>
            <span className="text-xs text-yellow-300 font-semibold uppercase bg-yellow-950/80 px-2.5 py-1 rounded-full border border-yellow-500/30">
              Analytical
            </span>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            {SKILLS_DATA.coreCompetencies.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-2.5 bg-white/10 px-4 sm:px-5 py-2.5 rounded-full shadow-md hover:bg-white/20 transition-all cursor-pointer border border-white/10 hover:border-[#25a244] hover:shadow-[0_0_15px_rgba(37,162,68,0.5)]"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-[#05f244]">{getIcon(item.icon)}</span>
                <span className="font-medium text-sm sm:text-base">{item.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category 6: Tools & Platforms */}
        <motion.div
          className="bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-6 pb-2 border-b-2 border-white/30">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-[#05f244]">🛠️</span>
              <span>Tools & Platforms</span>
            </h2>
            <span className="text-xs text-emerald-300 font-semibold uppercase bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-500/30">
              Workflows
            </span>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            {SKILLS_DATA.toolsAndPlatforms.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-2.5 bg-white/10 px-4 sm:px-5 py-2.5 rounded-full shadow-md hover:bg-white/20 transition-all cursor-pointer border border-white/10 hover:border-[#25a244] hover:shadow-[0_0_15px_rgba(37,162,68,0.5)]"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-[#05f244]">{getIcon(item.icon)}</span>
                <span className="font-medium text-sm sm:text-base">{item.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
