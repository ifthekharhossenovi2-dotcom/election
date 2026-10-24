import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Calculator, 
  FileSpreadsheet, 
  TrendingDown, 
  ShieldCheck, 
  Receipt, 
  AlertCircle, 
  CheckCircle2, 
  ArrowUpRight,
  Filter,
  DollarSign
} from 'lucide-react';
import { ILLUSTRATIVE_FINANCE_DATA, FinanceItem } from '../data/campaignData';

export const FinanceDemo: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<FinanceItem | null>(null);

  // Interactive Simulator States
  const [simParticipants, setSimParticipants] = useState<number>(120);
  const [simSponsorship, setSimSponsorship] = useState<number>(25000);
  const [simSnacksCost, setSimSnacksCost] = useState<number>(100); // per person
  const [simVenueMerch, setSimVenueMerch] = useState<number>(12000);

  const filteredItems = selectedCategory === 'All'
    ? ILLUSTRATIVE_FINANCE_DATA
    : ILLUSTRATIVE_FINANCE_DATA.filter(item => item.category === selectedCategory);

  const totalBudget = ILLUSTRATIVE_FINANCE_DATA.reduce((sum, item) => sum + item.budgeted, 0);
  const totalActual = ILLUSTRATIVE_FINANCE_DATA.reduce((sum, item) => sum + item.actual, 0);
  const totalSavings = totalBudget - totalActual;

  // Simulator calculations
  const simRegistrationIncome = simParticipants * 150; // BDT 150 reg fee
  const simTotalIncome = simRegistrationIncome + simSponsorship;
  const simTotalExpense = (simParticipants * simSnacksCost) + simVenueMerch + 5000; // +5000 prize/certificates
  const simNetBalance = simTotalIncome - simTotalExpense;
  const simContingency = Math.round(simTotalIncome * 0.1); // 10% reserve

  return (
    <section id="finance-demo" className="text-white py-16 px-4 sm:px-6 md:px-12 lg:px-16 relative">
      {/* Background glow */}
      <div className="absolute top-1/4 right-5 w-80 h-80 bg-[#05f244]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-emerald-300 border border-emerald-500/30 text-xs font-semibold uppercase mb-3">
            <Calculator size={15} />
            Commitment In Action
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-md">
            আর্থিক ব্যবস্থাপনা ও ডিজিটাল লেজার ডেমো
          </h2>
          <p className="text-emerald-400 font-semibold text-sm md:text-base mt-2">
            Illustrative Finance Demonstration Model • PCIU Computer Club 2026–2027
          </p>

          {/* Explicit disclaimer as instructed */}
          <div className="mt-4 p-3 bg-amber-500/10 border border-amber-400/30 rounded-xl max-w-2xl mx-auto flex items-start gap-3 text-left">
            <AlertCircle size={18} className="text-amber-400 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-200/90 leading-relaxed">
              <strong>Notice:</strong> This is an interactive illustrative demonstration created by candidate Iftekhar Hossen Ovi
              to exhibit the transparent accounting framework, variance analysis, and digital audit methods planned for the 2026–2027 term.
              It does not represent historical or official club accounts.
            </p>
          </div>
        </motion.div>

        {/* Metric Cards matching Hasnat glowing cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 border border-white/15 shadow-[0_8px_20px_rgba(37,162,68,0.2)] hover:border-[#25a244] transition-all"
            whileHover={{ y: -4 }}
          >
            <div className="flex items-center justify-between text-gray-300 text-xs font-medium mb-1">
              <span>Total Planned Budget</span>
              <FileSpreadsheet size={16} className="text-[#05f244]" />
            </div>
            <p className="text-2xl md:text-3xl font-extrabold text-white">
              ৳ {totalBudget.toLocaleString()}
            </p>
            <p className="text-[11px] text-gray-300 mt-1">Across 5 illustrative events</p>
          </motion.div>

          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 border border-white/15 shadow-[0_8px_20px_rgba(37,162,68,0.2)] hover:border-[#25a244] transition-all"
            whileHover={{ y: -4 }}
          >
            <div className="flex items-center justify-between text-gray-300 text-xs font-medium mb-1">
              <span>Audited Expenditure</span>
              <Receipt size={16} className="text-[#05f244]" />
            </div>
            <p className="text-2xl md:text-3xl font-extrabold text-white">
              ৳ {totalActual.toLocaleString()}
            </p>
            <p className="text-[11px] text-emerald-300 mt-1">100% matched with cash memos</p>
          </motion.div>

          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 border border-[#25a244] shadow-[0_0_20px_rgba(37,162,68,0.4)] bg-[#25a244]/10"
            whileHover={{ y: -4 }}
          >
            <div className="flex items-center justify-between text-emerald-300 text-xs font-semibold mb-1">
              <span>Net Cost Optimization</span>
              <TrendingDown size={16} className="text-[#05f244]" />
            </div>
            <p className="text-2xl md:text-3xl font-extrabold text-[#05f244]">
              +৳ {totalSavings.toLocaleString()}
            </p>
            <p className="text-[11px] text-emerald-200 mt-1">Savings retained in emergency reserve</p>
          </motion.div>

          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 border border-white/15 shadow-[0_8px_20px_rgba(37,162,68,0.2)] hover:border-[#25a244] transition-all"
            whileHover={{ y: -4 }}
          >
            <div className="flex items-center justify-between text-gray-300 text-xs font-medium mb-1">
              <span>Audit Verification Status</span>
              <ShieldCheck size={16} className="text-[#05f244]" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl md:text-3xl font-extrabold text-yellow-300">100%</span>
              <CheckCircle2 size={20} className="text-[#05f244]" />
            </div>
            <p className="text-[11px] text-gray-300 mt-1">71 digital vouchers verified</p>
          </motion.div>
        </div>

        {/* Tab Filter & Event Ledger Table */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-white/20 shadow-[0_8px_30px_rgba(37,162,68,0.3)] mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>📋</span>
                <span>PCIU Event Budget vs. Actual Ledger</span>
              </h3>
              <p className="text-xs text-gray-300 mt-0.5">
                Every transaction logged with category, variance calculation, and attached receipts.
              </p>
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-2">
              {['All', 'Workshops', 'Contests', 'Tech Fest', 'Logistics'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#25a244] text-white shadow-md'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/15 text-xs uppercase text-gray-300 tracking-wider">
                  <th className="py-3 px-3">Event / Operation</th>
                  <th className="py-3 px-3">Category</th>
                  <th className="py-3 px-3 text-right">Budgeted</th>
                  <th className="py-3 px-3 text-right">Actual</th>
                  <th className="py-3 px-3 text-right">Variance</th>
                  <th className="py-3 px-3 text-center">Receipts</th>
                  <th className="py-3 px-3 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {filteredItems.map((item) => {
                  const variance = item.budgeted - item.actual;
                  return (
                    <tr
                      key={item.id}
                      onClick={() => setActiveItem(item)}
                      className="hover:bg-white/10 transition-colors cursor-pointer group"
                    >
                      <td className="py-3.5 px-3">
                        <div className="font-semibold text-white group-hover:text-[#05f244] transition-colors flex items-center gap-1.5">
                          <span>{item.eventName}</span>
                          <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="text-[11px] text-gray-400 font-mono">{item.id} • {item.date}</div>
                      </td>
                      <td className="py-3.5 px-3">
                        <span className="px-2.5 py-0.5 rounded-full text-xs bg-white/10 border border-white/15 text-emerald-300">
                          {item.category}
                        </span>
                      </td>
                      <td className="py-3.5 px-3 text-right font-mono text-gray-200">
                        ৳ {item.budgeted.toLocaleString()}
                      </td>
                      <td className="py-3.5 px-3 text-right font-mono font-semibold text-white">
                        ৳ {item.actual.toLocaleString()}
                      </td>
                      <td className="py-3.5 px-3 text-right font-mono font-bold text-[#05f244]">
                        {variance >= 0 ? `+৳ ${variance.toLocaleString()}` : `-৳ ${Math.abs(variance).toLocaleString()}`}
                      </td>
                      <td className="py-3.5 px-3 text-center">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/10 text-xs font-mono">
                          <Receipt size={12} className="text-[#05f244]" />
                          {item.receiptCount}
                        </span>
                      </td>
                      <td className="py-3.5 px-3 text-center">
                        <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#25a244]/20 text-[#05f244] border border-[#25a244]/40">
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Interactive Event Budget Simulator */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-white/20 shadow-[0_8px_30px_rgba(37,162,68,0.3)]">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
            <div className="p-2.5 rounded-xl bg-[#25a244] text-white">
              <Calculator size={22} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                ইন্টারেক্টিভ ইভেন্ট বাজেট ক্যালকুলেটর (Budget Simulator)
              </h3>
              <p className="text-xs text-gray-300">
                Test how proactive budgeting balances participation fees, catering costs, and emergency reserves.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Sliders */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span>Expected Participants (Students)</span>
                  <span className="text-[#05f244] font-mono text-sm">{simParticipants} Students</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="300"
                  step="10"
                  value={simParticipants}
                  onChange={(e) => setSimParticipants(Number(e.target.value))}
                  className="w-full accent-[#25a244] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span>Corporate / Alumni Sponsorship</span>
                  <span className="text-[#05f244] font-mono text-sm">৳ {simSponsorship.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="60000"
                  step="5000"
                  value={simSponsorship}
                  onChange={(e) => setSimSponsorship(Number(e.target.value))}
                  className="w-full accent-[#25a244] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span>Snacks & Refreshments (Per Student)</span>
                  <span className="text-[#05f244] font-mono text-sm">৳ {simSnacksCost} / head</span>
                </div>
                <input
                  type="range"
                  min="60"
                  max="200"
                  step="10"
                  value={simSnacksCost}
                  onChange={(e) => setSimSnacksCost(Number(e.target.value))}
                  className="w-full accent-[#25a244] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span>Logistics, Banners & Certificates</span>
                  <span className="text-[#05f244] font-mono text-sm">৳ {simVenueMerch.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="30000"
                  step="1000"
                  value={simVenueMerch}
                  onChange={(e) => setSimVenueMerch(Number(e.target.value))}
                  className="w-full accent-[#25a244] cursor-pointer"
                />
              </div>
            </div>

            {/* Calculated Results Box */}
            <div className="lg:col-span-5 bg-black/30 rounded-2xl p-6 border border-white/10 space-y-4">
              <h4 className="text-sm font-bold text-gray-200 uppercase tracking-wider pb-2 border-b border-white/10">
                Projected Balance Statement
              </h4>

              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Registration Income (৳150/head):</span>
                <span className="font-mono text-white font-semibold">৳ {simRegistrationIncome.toLocaleString()}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Sponsorship Funds:</span>
                <span className="font-mono text-emerald-300 font-semibold">+৳ {simSponsorship.toLocaleString()}</span>
              </div>

              <div className="flex justify-between text-sm border-t border-white/10 pt-2 font-bold">
                <span className="text-white">Total Estimated Revenue:</span>
                <span className="font-mono text-yellow-300">৳ {simTotalIncome.toLocaleString()}</span>
              </div>

              <div className="flex justify-between text-sm text-red-300">
                <span>Total Operational Expense:</span>
                <span className="font-mono font-semibold">-৳ {simTotalExpense.toLocaleString()}</span>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                <div>
                  <span className="text-xs text-gray-300 block">Surplus / Reserve Fund</span>
                  <span className="text-xs text-emerald-400">Rolled over to next event</span>
                </div>
                <span className={`text-xl font-mono font-extrabold ${simNetBalance >= 0 ? 'text-[#05f244]' : 'text-red-400'}`}>
                  {simNetBalance >= 0 ? `+৳ ${simNetBalance.toLocaleString()}` : `-৳ ${Math.abs(simNetBalance).toLocaleString()}`}
                </span>
              </div>

              <div className="text-[11px] text-gray-400 text-center">
                Recommended 10% Emergency Contingency: <strong className="text-white">৳ {simContingency.toLocaleString()}</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for item details */}
        {activeItem && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm">
            <motion.div
              className="bg-[#093A79] border-2 border-[#25a244] rounded-3xl p-6 sm:p-8 max-w-lg w-full text-white shadow-2xl relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-mono text-emerald-300">{activeItem.id}</span>
                  <h3 className="text-xl font-bold mt-1">{activeItem.eventName}</h3>
                </div>
                <button
                  onClick={() => setActiveItem(null)}
                  className="p-1 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-3 text-sm py-4 border-y border-white/15">
                <div className="flex justify-between">
                  <span className="text-gray-300">Category:</span>
                  <span className="font-semibold text-emerald-300">{activeItem.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Date:</span>
                  <span className="font-semibold">{activeItem.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Budgeted Allocation:</span>
                  <span className="font-mono font-semibold">৳ {activeItem.budgeted.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Actual Expenditures:</span>
                  <span className="font-mono font-semibold">৳ {activeItem.actual.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#05f244]">
                  <span>Optimized Variance:</span>
                  <span className="font-mono">৳ {(activeItem.budgeted - activeItem.actual).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Digital Voucher Proofs:</span>
                  <span className="font-mono font-semibold">{activeItem.receiptCount} verified receipts</span>
                </div>
                <div className="bg-white/5 p-3 rounded-xl mt-3 text-xs text-gray-200">
                  <strong>Treasurer Audit Notes:</strong> {activeItem.notes}
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setActiveItem(null)}
                  className="bg-[#25a244] hover:bg-[#1f8838] text-white px-6 py-2 rounded-full font-semibold cursor-pointer"
                >
                  Close Record
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};
