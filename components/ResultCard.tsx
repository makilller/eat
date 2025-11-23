import React from 'react';
import { FoodRecommendation } from '../types';
import { motion } from 'framer-motion';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { MapPin, Thermometer, Info, DollarSign } from 'lucide-react';

interface ResultCardProps {
  data: FoodRecommendation;
  onReset: () => void;
}

const ResultCard: React.FC<ResultCardProps> = ({ data, onReset }) => {
  const chartData = [
    { subject: '辣度', A: data.flavorProfile.spicy, fullMark: 100 },
    { subject: '咸度', A: data.flavorProfile.salty, fullMark: 100 },
    { subject: '甜度', A: data.flavorProfile.sweet, fullMark: 100 },
    { subject: '酸度', A: data.flavorProfile.sour, fullMark: 100 },
    { subject: '油腻', A: data.flavorProfile.greasy, fullMark: 100 },
  ];

  return (
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="w-full max-w-md bg-slate-900/80 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl"
    >
      <div className="relative h-48 bg-gradient-to-br from-red-900 to-slate-900 flex items-center justify-center p-6 text-center">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-500 drop-shadow-sm z-10"
        >
          {data.dishName}
        </motion.h2>
      </div>

      <div className="p-6 space-y-6">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-slate-300 italic text-center font-serif leading-relaxed"
        >
          "{data.shortDescription}"
        </motion.p>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="bg-slate-800/50 p-3 rounded-xl flex items-center gap-2 border border-slate-700/50">
            <MapPin size={16} className="text-red-400" />
            <span className="text-slate-300 truncate">{data.restaurantType}</span>
          </div>
          <div className="bg-slate-800/50 p-3 rounded-xl flex items-center gap-2 border border-slate-700/50">
            <DollarSign size={16} className="text-amber-400" />
            <span className="text-slate-300">{data.estimatedPrice}</span>
          </div>
          <div className="bg-slate-800/50 p-3 rounded-xl flex items-center gap-2 border border-slate-700/50">
            <Thermometer size={16} className="text-orange-400" />
            <span className="text-slate-300">推荐理由: {data.reasoning.substring(0, 10)}...</span>
          </div>
          <div className="bg-slate-800/50 p-3 rounded-xl flex items-center gap-2 border border-slate-700/50">
            <Info size={16} className="text-sky-400" />
            <span className="text-slate-300">{data.calories}</span>
          </div>
        </div>
        
        {/* Full reasoning expanded */}
         <div className="bg-slate-800/30 p-3 rounded-xl text-xs text-slate-400 border border-slate-700/30">
            <span className="font-bold text-slate-300 block mb-1">AI 推荐语:</span>
            {data.reasoning}
        </div>

        <div className="h-48 w-full relative">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
              <PolarGrid stroke="#334155" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
              <Radar
                name="Flavor"
                dataKey="A"
                stroke="#ef4444"
                strokeWidth={2}
                fill="#ef4444"
                fillOpacity={0.4}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onReset}
          className="w-full py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-xl shadow-lg shadow-red-900/40 hover:shadow-red-900/60 transition-all text-lg"
        >
          再选一次
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ResultCard;