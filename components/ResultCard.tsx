
import React from 'react';
import { FoodRecommendation, FlavorProfile } from '../types';
import { motion } from 'framer-motion';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { MapPin, Flame, Info, DollarSign, Utensils } from 'lucide-react';

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

  const getDominantFlavor = (profile: FlavorProfile) => {
    const max = Object.entries(profile).reduce((a, b) => a[1] > b[1] ? a : b);
    const map: Record<string, string> = {
      spicy: '热辣过瘾',
      salty: '咸鲜适口',
      sweet: '甜蜜滋味',
      sour: '酸爽开胃',
      greasy: '肥美油润'
    };
    return map[max[0]] || '口味丰富';
  };

  return (
    <motion.div 
      initial={{ scale: 0.8, opacity: 0, y: 50 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="w-full max-w-md bg-white border border-white/60 rounded-3xl overflow-hidden shadow-2xl shadow-red-900/10 backdrop-blur-xl relative"
    >
      {/* Decorative top pattern */}
      <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-red-500 via-amber-500 to-red-500"></div>

      <div className="relative pt-10 pb-6 px-6 text-center">
         <div className="absolute top-6 left-1/2 -translate-x-1/2 w-16 h-1 bg-red-100 rounded-full"></div>
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-black text-red-950 drop-shadow-sm z-10 leading-tight"
        >
          {data.dishName}
        </motion.h2>
      </div>

      <div className="p-6 space-y-6 pt-0">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-red-900/70 italic text-center font-serif leading-relaxed px-4"
        >
          "{data.shortDescription}"
        </motion.p>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="bg-red-50/50 p-3 rounded-xl flex items-center gap-2 border border-red-100/50 text-red-900">
            <MapPin size={16} className="text-red-500" />
            <span className="truncate font-medium">{data.restaurantType}</span>
          </div>
          <div className="bg-amber-50/50 p-3 rounded-xl flex items-center gap-2 border border-amber-100/50 text-amber-900">
            <DollarSign size={16} className="text-amber-500" />
            <span className="font-medium">{data.estimatedPrice}</span>
          </div>
          <div className="bg-orange-50/50 p-3 rounded-xl flex items-center gap-2 border border-orange-100/50 text-orange-900">
            <Flame size={16} className="text-orange-500" />
            <span className="font-medium">{getDominantFlavor(data.flavorProfile)}</span>
          </div>
          <div className="bg-slate-50/50 p-3 rounded-xl flex items-center gap-2 border border-slate-100/50 text-slate-700">
            <Info size={16} className="text-slate-400" />
            <span className="font-medium">{data.calories}</span>
          </div>
        </div>
        
        {/* Full reasoning expanded */}
         <div className="bg-gradient-to-br from-red-50 to-white p-4 rounded-2xl text-xs text-red-900/80 border border-red-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2 opacity-10">
              <Utensils size={40} className="text-red-900" />
            </div>
            <span className="font-bold text-red-800 block mb-1 text-sm">系统点评</span>
            <p className="leading-relaxed relative z-10">{data.reasoning}</p>
        </div>

        <div className="h-48 w-full relative">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
              <PolarGrid stroke="#e5e7eb" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#991b1b', fontSize: 12, fontWeight: 500 }} />
              <Radar
                name="Flavor"
                dataKey="A"
                stroke="#dc2626"
                strokeWidth={2}
                fill="#ef4444"
                fillOpacity={0.3}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onReset}
          className="w-full py-4 bg-red-600 text-white font-bold rounded-xl shadow-lg shadow-red-500/20 hover:shadow-red-500/40 transition-all text-lg"
        >
          再选一次
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ResultCard;
