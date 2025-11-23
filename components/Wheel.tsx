
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

  // Expanded color palette to reduce collisions with large numbers of slices
  const colors = [
    '#ef4444', // Red 500
    '#f97316', // Orange 500
    '#f59e0b', // Amber 500
    '#eab308', // Yellow 500
    '#84cc16', // Lime 500
    '#22c55e', // Green 500
    '#10b981', // Emerald 500
    '#14b8a6', // Teal 500
    '#06b6d4', // Cyan 500
    '#0ea5e9', // Sky 500
    '#3b82f6', // Blue 500
    '#6366f1', // Indigo 500
    '#8b5cf6', // Violet 500
    '#a855f7', // Purple 500
    '#d946ef', // Fuchsia 500
    '#ec4899', // Pink 500
    '#f43f5e', // Rose 500
    '#78716c', // Stone 500
  ];

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
    // Add 8 full spins for drama if list is huge
    const extraSpins = candidates.length > 50 ? 10 : 5;
    
    // Optional: Add a tiny random jitter within the slice (+/- 30% of slice width) to look organic
    const jitter = (Math.random() - 0.5) * (sliceAngle * 0.6);
    
    const targetRotation = 360 * extraSpins - currentAngleFromTop + jitter;

    await controls.start({
      rotate: targetRotation,
      transition: { duration: candidates.length > 50 ? 6.5 : 4.5, ease: [0.15, 0, 0.10, 1] } 
    });

    setTimeout(() => {
      onFinished(candidates[winnerIndex]);
      setSpinning(false);
    }, 500);
  };

  const count = candidates.length;
  // Extreme Dynamic sizing logic for 100 items
  let textSizeClass = "text-xs md:text-sm";
  let maxWClass = "w-24";
  let showText = true;
  let textOpacity = "opacity-100";
  
  if (count > 60) {
      textSizeClass = "text-[4px] md:text-[6px]"; // Microscopic text
      maxWClass = "w-20";
      textOpacity = "opacity-80"; // Fade slightly to reduce noise
  } else if (count > 40) {
      textSizeClass = "text-[6px] md:text-[8px]";
      maxWClass = "w-16";
  } else if (count > 20) {
      textSizeClass = "text-[8px] md:text-[10px]";
      maxWClass = "w-12";
  } else if (count > 12) {
      textSizeClass = "text-[10px] md:text-xs";
      maxWClass = "w-16";
  }

  return (
    <div className="relative w-[320px] h-[320px] md:w-[600px] md:h-[600px]">
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
                strokeWidth={count > 50 ? "0.2" : "0.8"}
               />
             );
          })}
        </svg>

        {/* Text Labels Overlay */}
        {showText && candidates.map((item, index) => {
            const sliceAngle = 360 / count;
            // Center text in the slice
            const rotate = index * sliceAngle + sliceAngle / 2;
            
            // For extreme numbers, hide every other label if needed, OR just let it act as texture
            // If > 80 items, maybe alternate layout? 
            // Current approach: Just render them all, they create a cool "sunburst" text effect.
            
            return (
              <div
                key={`label-${index}`}
                className="absolute top-0 left-0 w-full h-full pointer-events-none flex justify-center pt-2 md:pt-4"
                style={{ transform: `rotate(${rotate}deg)` }}
              >
                  <div className={`flex flex-col items-center max-w-[120px] ${textOpacity}`}>
                      <span className={`text-white font-bold ${textSizeClass} drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] text-center leading-tight truncate ${maxWClass}`} style={{writingMode: count > 40 ? 'vertical-rl' : 'horizontal-tb'}}>
                          {item.dishName.split(/[\s·(]/)[0]} 
                      </span>
                  </div>
              </div>
            );
        })}
      </motion.div>
      
      {/* Center Cap */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-white to-red-50 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] flex items-center justify-center z-10 border-4 border-red-100">
         <div className="text-red-600 font-black text-xl md:text-3xl">吃</div>
      </div>
    </div>
  );
};

export default Wheel;
