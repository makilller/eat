
import React from 'react';
import { AVAILABLE_TAGS } from '../constants';
import { motion } from 'framer-motion';

interface TagSelectorProps {
  selectedTags: Set<string>;
  toggleTag: (id: string) => void;
  disabled: boolean;
}

const TagSelector: React.FC<TagSelectorProps> = ({ selectedTags, toggleTag, disabled }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {AVAILABLE_TAGS.map((tag, index) => {
        const isSelected = selectedTags.has(tag.id);
        return (
          <motion.button
            key={tag.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.03, type: "spring" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => toggleTag(tag.id)}
            disabled={disabled}
            className={`
              relative px-5 py-2 rounded-xl text-sm font-bold tracking-wide transition-all duration-300
              border shadow-sm overflow-hidden
              ${isSelected 
                ? 'border-red-600 bg-red-600 text-white shadow-red-500/30' 
                : 'border-white/50 bg-white/50 text-red-900/70 hover:bg-white hover:text-red-700 hover:shadow-md'}
            `}
          >
            <span className="relative z-20">{tag.label}</span>
          </motion.button>
        );
      })}
    </div>
  );
};

export default TagSelector;