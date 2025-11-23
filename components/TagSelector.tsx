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
    <div className="flex flex-wrap justify-center gap-3 p-4">
      {AVAILABLE_TAGS.map((tag, index) => {
        const isSelected = selectedTags.has(tag.id);
        return (
          <motion.button
            key={tag.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => toggleTag(tag.id)}
            disabled={disabled}
            className={`
              relative px-4 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300
              border-2 backdrop-blur-sm
              ${isSelected 
                ? 'border-red-500 bg-red-500/20 text-red-100 shadow-[0_0_15px_rgba(239,68,68,0.5)]' 
                : 'border-slate-700 bg-slate-800/50 text-slate-400 hover:border-slate-500 hover:text-slate-200'}
            `}
          >
            {tag.label}
          </motion.button>
        );
      })}
    </div>
  );
};

export default TagSelector;