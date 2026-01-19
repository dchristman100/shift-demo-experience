import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-20 bg-[#0D0F33]/95 backdrop-blur-md border-b-[3px] border-[#F54A48]">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="font-montserrat font-extrabold text-[36px] tracking-[-0.5px] text-white flex items-baseline leading-none">
          SH
          <span className="relative inline-flex flex-col items-center mx-[2px]">
            <span className="w-[10px] h-[10px] rounded-full bg-[#FA982F] mb-[3px]"></span>
            <span className="w-[6px] h-[26px] bg-white"></span>
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