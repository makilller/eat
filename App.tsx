
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Utensils } from 'lucide-react';
import TagSelector from './components/TagSelector';
import ResultCard from './components/ResultCard';
import Background from './components/Background';
import { getFoodRecommendation } from './services/geminiService';
import { FoodRecommendation } from './types';

const App: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<FoodRecommendation | null>(null);
  const [error, setError] = useState<string | null>(null);

  const toggleTag = (id: string) => {
    const newTags = new Set(selectedTags);
    if (newTags.has(id)) {
      newTags.delete(id);
    } else {
      newTags.add(id);
    }
    setSelectedTags(newTags);
  };

  const handleDecide = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getFoodRecommendation(Array.from(selectedTags));
      setResult(data);
    } catch (err) {
      console.error(err);
      setError('系统似乎饿晕了，请稍后再试。');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setError(null);
  };

  return (
    <div className="min-h-screen text-slate-100 flex flex-col items-center justify-center relative p-4 font-sans">
      <Background />

      <header className="absolute top-6 left-0 right-0 flex justify-center items-center gap-2 opacity-80">
        <Utensils size={20} className="text-red-500" />
        <span className="text-sm font-bold tracking-widest text-slate-400 uppercase">Beijing Food Guide</span>
      </header>

      <main className="w-full max-w-2xl flex flex-col items-center z-10">
        <AnimatePresence mode="wait">
          {!result && !loading && (
            <motion.div
              key="selection"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              className="flex flex-col items-center space-y-10 w-full"
            >
              <div className="text-center space-y-4">
                <motion.h1 
                  className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-slate-100 via-slate-300 to-slate-500 drop-shadow-lg"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  今天吃什么?
                </motion.h1>
                <p className="text-slate-400 text-lg">
                   人在北京，不知道吃啥？点几个标签，系统帮你决定。
                </p>
              </div>

              <div className="w-full bg-slate-900/40 border border-slate-800 p-6 rounded-3xl backdrop-blur-md shadow-inner">
                <TagSelector selectedTags={selectedTags} toggleTag={toggleTag} disabled={loading} />
              </div>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(239, 68, 68, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDecide}
                className="relative group px-12 py-5 bg-red-600 rounded-2xl overflow-hidden shadow-2xl shadow-red-900/50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-amber-600 opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                <span className="relative z-10 text-2xl font-black text-white tracking-widest">
                  决定吧！
                </span>
              </motion.button>
              
              {error && (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  className="text-red-400 bg-red-950/30 px-4 py-2 rounded-lg border border-red-900/50"
                >
                  {error}
                </motion.div>
              )}
            </motion.div>
          )}

          {loading && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center space-y-6"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-red-500 blur-xl opacity-20 animate-pulse"></div>
                <Loader2 size={64} className="text-red-500 animate-spin relative z-10" />
              </div>
              <p className="text-xl text-slate-300 font-light animate-pulse">
                正在检索本地美食库...
              </p>
              <p className="text-sm text-slate-500">
                算法正在计算匹配度
              </p>
            </motion.div>
          )}

          {result && (
            <motion.div key="result" className="flex justify-center w-full">
              <ResultCard data={result} onReset={handleReset} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="absolute bottom-4 text-xs text-slate-600 text-center">
        Beijing Food Guide • Local Edition
      </footer>
    </div>
  );
};

export default App;
