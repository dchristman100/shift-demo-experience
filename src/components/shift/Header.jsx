import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-20 bg-[#0D0F33]/95 backdrop-blur-md border-b-[3px] border-[#F54A48]">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="font-montserrat font-extrabold text-[36px] tracking-[-0.5px] text-white flex items-start leading-none select-none">
          SH
          <span className="relative inline-block" style={{ fontFeatureSettings: '"case" 1' }}>
            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-[10px] h-[10px] rounded-full bg-[#FA982F]"></span>
            <span className="text-transparent bg-clip-text">i</span>
            <span className="absolute inset-0 overflow-hidden" style={{ color: 'white', clipPath: 'inset(40% 0 0 0)' }}>i</span>
          </span>
          FT
        </div>
        
        {/* Live Demo Badge */}
        <div className="gradient-coral-orange px-5 py-2 rounded-md">
          <span className="font-montserrat text-xs font-bold uppercase tracking-[1px] text-white">
            Live Demo
          </span>
        </div>
      </div>
    </header>
  );
}