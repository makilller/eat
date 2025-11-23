
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FoodRecommendation } from '../types';

interface WheelProps {
  candidates: FoodRecommendation[];
  onFinished: (winner: FoodRecommendation) => void;
}

const Wheel: React.FC<WheelProps> = ({ candidates, onFinished }) => {
  const controls = useAnimation();
  const [spinning, setSpinning] = useState(false);

  const colors = ['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899', '#f97316', '#6366f1'];

  useEffect(() => {
    startSpin();
  }, []);

  const startSpin = async () => {
    if (spinning) return;
    setSpinning(true);

    const sliceAngle = 360 / candidates.length;
    // Pick a winner index randomly
    const winnerIndex = Math.floor(Math.random() * candidates.length);
    
    // Calculate the angle of the winner's slice center relative to the wheel's 0deg (Top)
    // Index 0 is at [0, sliceAngle], center at sliceAngle/2
    const currentAngleFromTop = (winnerIndex * sliceAngle) + (sliceAngle / 2);
    
    // To bring this angle to 0 (Top), we need to rotate the wheel backwards by currentAngleFromTop.
    // Add 5 full spins (1800 degrees) for effect.
    // Formula: Target = 360 * Spins - CurrentPosition
    
    // Optional: Add a tiny random jitter within the slice (+/- 40% of slice width) to look organic
    const jitter = (Math.random() - 0.5) * (sliceAngle * 0.8);
    
    const targetRotation = 360 * 6 - currentAngleFromTop + jitter;

    await controls.start({
      rotate: targetRotation,
      transition: { duration: 4.5, ease: [0.15, 0, 0.10, 1] } 
    });

    setTimeout(() => {
      onFinished(candidates[winnerIndex]);
      setSpinning(false);
    }, 500);
  };

  return (
    <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px]">
      {/* Pointer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 z-20 w-8 h-10 drop-shadow-xl filter">
        <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[24px] border-t-red-600"></div>
      </div>

      {/* Wheel Container */}
      <motion.div
        animate={controls}
        className="w-full h-full rounded-full border-[8px] border-white shadow-2xl overflow-hidden relative bg-white"
        style={{ transformOrigin: 'center' }}
      >
        {/* SVG Slices */}
        {/* We explicitly rotate the SVG -90deg via style to ensure 0deg is at 12 o'clock, matching our text logic */}
        <svg 
          viewBox="0 0 100 100" 
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ transform: 'rotate(-90deg)' }} 
        >
          {candidates.map((item, index) => {
             const count = candidates.length;
             const sliceAngle = 360 / count;
             // Calculate coordinates
             const startAngle = (index * sliceAngle) * (Math.PI / 180);
             const endAngle = ((index + 1) * sliceAngle) * (Math.PI / 180);
             const x1 = 50 + 50 * Math.cos(startAngle);
             const y1 = 50 + 50 * Math.sin(startAngle);
             const x2 = 50 + 50 * Math.cos(endAngle);
             const y2 = 50 + 50 * Math.sin(endAngle);
             
             const largeArcFlag = sliceAngle > 180 ? 1 : 0;
             const pathData = `M 50 50 L ${x1} ${y1} A 50 50 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;

             return (
               <path 
                key={`slice-${index}`} 
                d={pathData} 
                fill={colors[index % colors.length]} 
                stroke="white" 
                strokeWidth="0.8" 
               />
             );
          })}
        </svg>

        {/* Text Labels Overlay */}
        {candidates.map((item, index) => {
            const count = candidates.length;
            const sliceAngle = 360 / count;
            // Center text in the slice
            const rotate = index * sliceAngle + sliceAngle / 2;
            return (
              <div
                key={`label-${index}`}
                className="absolute top-0 left-0 w-full h-full pointer-events-none flex justify-center pt-4"
                style={{ transform: `rotate(${rotate}deg)` }}
              >
                  <div className="flex flex-col items-center max-w-[80px]">
                      <span className="text-white font-black text-xs md:text-sm drop-shadow-md text-center leading-tight truncate w-24">
                          {item.dishName.split(/[\s·]/)[0]} 
                      </span>
                  </div>
              </div>
            );
        })}
      </motion.div>
      
      {/* Center Cap */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-white to-red-50 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] flex items-center justify-center z-10 border-4 border-red-100">
         <div className="text-red-600 font-black text-xl">吃</div>
      </div>
    </div>
  );
};

export default Wheel;
