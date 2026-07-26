import React from 'react';

export const AuroraBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#050816]">
      {/* Aurora Layer 1 - Electric Blue */}
      <div 
        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full blur-[140px] opacity-30 animate-aurora-1"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.5) 0%, rgba(6,182,212,0.2) 60%, transparent 100%)'
        }}
      />

      {/* Aurora Layer 2 - Cyan & Violet */}
      <div 
        className="absolute top-[30%] -right-[15%] w-[65vw] h-[65vw] rounded-full blur-[150px] opacity-25 animate-aurora-2"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.5) 0%, rgba(6,182,212,0.3) 50%, transparent 100%)'
        }}
      />

      {/* Aurora Layer 3 - Bottom Accent */}
      <div 
        className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full blur-[160px] opacity-20 animate-aurora-1"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(139,92,246,0.3) 60%, transparent 100%)'
        }}
      />

      {/* Ambient Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
};
