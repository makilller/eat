
import React from 'react';
import { FoodRecommendation } from '../types';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

interface CandidateListProps {
  candidates: FoodRecommendation[];
  selectedIds: Set<string>;
  toggleCandidate: (id: string) => void;
  onStartSpin: () => void;
}

const CandidateList: React.FC<CandidateListProps> = ({ candidates, selectedIds, toggleCandidate, onStartSpin }) => {
  return (
    <div className="w-full max-w-lg bg-white/60 backdrop-blur-xl border border-white/80 rounded-3xl p-6 shadow-xl">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-black text-red-900 mb-2">候选名单</h2>
        <p className="text-sm text-red-800/60">系统为您精选了以下美食，去掉不喜欢的，然后开始！</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar">
        {candidates.map((dish, index) => {
          const isSelected = selectedIds.has(dish.id);
          return (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => toggleCandidate(dish.id)}
              className={`
                relative p-4 rounded-xl cursor-pointer transition-all border-2 select-none flex flex-col justify-between
                ${isSelected 
                  ? 'bg-white border-red-500 shadow-md' 
                  : 'bg-slate-50 border-transparent opacity-60 grayscale'}
              `}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className={`font-bold text-sm ${isSelected ? 'text-red-900' : 'text-slate-600'}`}>
                  {dish.dishName}
                </h3>
                <div className={`
                  w-5 h-5 rounded-full flex items-center justify-center text-xs
                  ${isSelected ? 'bg-red-500 text-white' : 'bg-slate-300 text-white'}
                `}>
                  {isSelected ? <Check size={12} /> : <X size={12} />}
                </div>
              </div>
              <p className="text-xs text-slate-500 line-clamp-1">{dish.restaurantType}</p>
            </motion.div>
          );
        })}
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onStartSpin}
        disabled={selectedIds.size < 2}
        className={`
          w-full py-4 rounded-xl font-black text-xl shadow-lg transition-all
          ${selectedIds.size < 2 
            ? 'bg-slate-300 text-slate-500 cursor-not-allowed' 
            : 'bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-red-500/30 hover:shadow-red-500/50'}
        `}
      >
        {selectedIds.size < 2 ? '至少选2个' : '开始转盘！'}
      </motion.button>
    </div>
  );
};

export default CandidateList;
