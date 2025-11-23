
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Utensils, CloudSun, CloudRain, Sun, Snowflake, CloudFog } from 'lucide-react';
import TagSelector from './components/TagSelector';
import ResultCard from './components/ResultCard';
import Background from './components/Background';
import CandidateList from './components/CandidateList';
import Wheel from './components/Wheel';
import { getFoodRecommendations } from './services/geminiService';
import { getBeijingWeather, getWeatherDescription } from './services/weatherService';
import { FoodRecommendation, WeatherData } from './types';

type AppState = 'selection' | 'loading' | 'candidates' | 'spinning' | 'result';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('selection');
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());
  const [candidates, setCandidates] = useState<FoodRecommendation[]>([]);
  const [selectedCandidateIds, setSelectedCandidateIds] = useState<Set<string>>(new Set());
  const [finalResult, setFinalResult] = useState<FoodRecommendation | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getBeijingWeather();
      setWeather(data);
    };
    fetchWeather();
  }, []);

  const toggleTag = (id: string) => {
    const newTags = new Set(selectedTags);
    if (newTags.has(id)) newTags.delete(id);
    else newTags.add(id);
    setSelectedTags(newTags);
  };

  const handleDecide = async () => {
    setAppState('loading');
    setError(null);
    try {
      const data = await getFoodRecommendations(Array.from(selectedTags), weather);
      setCandidates(data);
      // Select all by default
      setSelectedCandidateIds(new Set(data.map(d => d.id)));
      setAppState('candidates');
    } catch (err) {
      console.error(err);
      setError('系统似乎饿晕了，请稍后再试。');
      setAppState('selection');
    }
  };

  const toggleCandidate = (id: string) => {
    const newSet = new Set(selectedCandidateIds);
    if (newSet.has(id)) {
      if (newSet.size > 2) newSet.delete(id); // Prevent removing all
    } else {
      newSet.add(id);
    }
    setSelectedCandidateIds(newSet);
  };

  const handleStartSpin = () => {
    setAppState('spinning');
  };

  const handleSpinFinished = (winner: FoodRecommendation) => {
    setFinalResult(winner);
    // Add a small delay before showing result card for better transition
    setTimeout(() => {
      setAppState('result');
    }, 500);
  };

  const handleReset = () => {
    setAppState('selection');
    setCandidates([]);
    setFinalResult(null);
    setSelectedTags(new Set());
  };

  const handleSpinAgain = () => {
      // Go back to spin state directly using the same filtered candidates
      setFinalResult(null);
      setAppState('spinning');
  };

  const getWeatherIcon = (code: number) => {
    if (code === 0) return <Sun className="text-amber-500" size={18} />;
    if (code >= 1 && code <= 3) return <CloudSun className="text-red-800/60" size={18} />;
    if (code >= 71) return <Snowflake className="text-sky-400" size={18} />;
    if (code >= 51) return <CloudRain className="text-blue-500" size={18} />;
    if (code >= 45) return <CloudFog className="text-slate-500" size={18} />;
    return <Sun className="text-amber-500" size={18} />;
  };

  // Get filtered candidates for the wheel
  const activeCandidates = candidates.filter(c => selectedCandidateIds.has(c.id));

  return (
    <div className="min-h-screen text-red-950 flex flex-col items-center justify-center relative p-4 font-sans selection:bg-red-200 overflow-hidden">
      <Background />

      <header className="absolute top-6 left-0 right-0 flex justify-between items-center px-6 md:px-12 z-20 pointer-events-none">
        <div className="flex items-center gap-2 pointer-events-auto">
          <div className="bg-red-600 text-white p-1.5 rounded-lg shadow-md">
            <Utensils size={20} />
          </div>
          <span className="text-sm font-bold tracking-widest text-red-900 uppercase hidden md:inline opacity-80">Beijing Food Guide</span>
        </div>

        {weather && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 bg-white/60 backdrop-blur-md px-4 py-2 rounded-full border border-red-100 shadow-sm pointer-events-auto"
          >
            {getWeatherIcon(weather.weatherCode)}
            <div className="flex flex-col leading-none">
              <span className="text-sm font-bold text-red-900">{weather.temperature}°C</span>
              <span className="text-[10px] text-red-700/70">北京 • {getWeatherDescription(weather.weatherCode)}</span>
            </div>
          </motion.div>
        )}
      </header>

      <main className="w-full max-w-2xl flex flex-col items-center z-10 pt-16 md:pt-0">
        <AnimatePresence mode="wait">
          {appState === 'selection' && (
            <motion.div
              key="selection"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              className="flex flex-col items-center space-y-10 w-full"
            >
              <div className="text-center space-y-4">
                <motion.h1 
                  className="text-5xl md:text-7xl font-black tracking-tight"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-red-600 to-amber-600 drop-shadow-sm">
                    今天吃什么?
                  </span>
                </motion.h1>
                <p className="text-red-800/60 text-lg flex items-center gap-2 justify-center font-medium">
                   {weather ? (
                     <span>根据 <span className="text-red-600 font-bold border-b-2 border-red-200">北京天气</span> 为您推荐</span>
                   ) : "人在北京，不知道吃啥？"}
                </p>
              </div>

              <div className="w-full bg-white/40 border border-white/60 p-8 rounded-3xl backdrop-blur-xl shadow-xl shadow-red-900/5">
                <TagSelector selectedTags={selectedTags} toggleTag={toggleTag} disabled={false} />
              </div>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 40px -10px rgba(220, 38, 38, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDecide}
                className="relative group px-16 py-6 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl overflow-hidden shadow-2xl shadow-red-500/30 cursor-pointer"
              >
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/30 to-amber-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                <span className="relative z-10 text-2xl font-black text-white tracking-[0.2em] flex items-center gap-2">
                  决定吧
                </span>
              </motion.button>
              
              {error && (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  className="text-red-600 bg-red-50 px-4 py-2 rounded-lg border border-red-200"
                >
                  {error}
                </motion.div>
              )}
            </motion.div>
          )}

          {appState === 'loading' && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center space-y-6"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-red-500 blur-2xl opacity-20 animate-pulse"></div>
                <div className="bg-white p-4 rounded-full shadow-xl">
                    <Loader2 size={48} className="text-red-600 animate-spin" />
                </div>
              </div>
              <p className="text-xl text-red-900 font-medium animate-pulse">
                正在寻觅街头巷尾的美味...
              </p>
            </motion.div>
          )}

          {appState === 'candidates' && (
            <motion.div
              key="candidates"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              className="w-full flex justify-center"
            >
              <CandidateList 
                candidates={candidates} 
                selectedIds={selectedCandidateIds} 
                toggleCandidate={toggleCandidate} 
                onStartSpin={handleStartSpin} 
              />
            </motion.div>
          )}

          {appState === 'spinning' && (
             <motion.div
                key="spinning"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex flex-col items-center gap-8"
             >
                <Wheel candidates={activeCandidates} onFinished={handleSpinFinished} />
                <div className="text-2xl font-black text-red-900 animate-pulse">
                   正在随机选中...
                </div>
             </motion.div>
          )}

          {appState === 'result' && finalResult && (
            <motion.div key="result" className="flex justify-center w-full relative z-30">
              <ResultCard data={finalResult} onReset={handleSpinAgain} />
              <button 
                onClick={handleReset}
                className="absolute -bottom-16 text-sm text-red-800/60 underline hover:text-red-800"
              >
                返回首页重新筛选
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="absolute bottom-4 text-[10px] text-red-900/30 text-center w-full tracking-widest uppercase pointer-events-none">
        Beijing Food Guide • Designed for Locals
      </footer>
    </div>
  );
};

export default App;
