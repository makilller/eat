
import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#fff1f2]">
      {/* Warm Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-orange-50 to-red-50"></div>

      {/* Dynamic Watercolor Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-300/30 rounded-full mix-blend-multiply filter blur-[96px] animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber-300/40 rounded-full mix-blend-multiply filter blur-[96px] animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-rose-400/20 rounded-full mix-blend-multiply filter blur-[96px] animate-blob animation-delay-4000"></div>
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')] opacity-60 mix-blend-multiply"></div>
      
      {/* Decorative Circle (Traditional Motif Style) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-20 animate-slow-spin">
         <div className="w-full h-full rounded-full border border-dashed border-red-800/20"></div>
         <div className="absolute inset-4 rounded-full border border-dotted border-amber-600/20"></div>
      </div>
    </div>
  );
};

export default Background;