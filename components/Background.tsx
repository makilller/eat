import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-slate-950">
      {/* Dynamic Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/20 rounded-full mix-blend-multiply filter blur-[128px] animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-600/20 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-4000"></div>
      
      {/* Rotating Cyber Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 animate-slow-spin">
         <div className="w-full h-full rounded-full border-2 border-dashed border-slate-700"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 contrast-150 mix-blend-overlay"></div>
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-slate-950 opacity-80"></div>
    </div>
  );
};

export default Background;