import React from 'react';
import { Tag } from '../types';
import { AVAILABLE_TAGS } from '../constants';
import { motion } from 'framer-motion';

interface TagSelectorProps {
  selectedTags: Set<string>;
  toggleTag: (id: string) => void;
  disabled: boolean;
}

const TagSelector: React.FC<TagSelectorProps> = ({ selectedTags, toggleTag, disabled }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 p-2">
      {AVAILABLE_TAGS.map((tag, index) => {
        const isSelected = selectedTags.has(tag.id);
        return (
          <motion.button
            key={tag.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.03, type: "spring" }}
            whileHover={{ scale: 1.1, textShadow: "0 0 8px rgb(255,255,255)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => toggleTag(tag.id)}
            disabled={disabled}
            className={`
              relative px-5 py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-300
              border backdrop-blur-md overflow-hidden group
              ${isSelected 
                ? 'border-red-500 bg-red-500/20 text-white shadow-[0_0_20px_rgba(239,68,68,0.6)]' 
                : 'border-slate-700 bg-slate-900/40 text-slate-400 hover:border-slate-500 hover:text-slate-200 hover:bg-slate-800/60'}
            `}
          >
            {/* Glossy overlay effect */}
            <div className={`absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-10 pointer-events-none`}></div>
            
            <span className="relative z-20">{tag.label}</span>
          </motion.button>
        );
      })}
    </div>
  );
};

export default TagSelector;