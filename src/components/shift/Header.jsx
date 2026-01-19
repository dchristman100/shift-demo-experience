import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-20 bg-[#0D0F33]/95 backdrop-blur-md border-b-[3px] border-[#F54A48]">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="font-montserrat font-extrabold text-4xl tracking-tight flex items-center">
          <span className="text-white">SH</span>
          <span className="relative inline-flex flex-col items-center mx-0.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FA982F] mb-0.5"></span>
            <span className="text-white">i</span>
          </span>
          <span className="text-white">FT</span>
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