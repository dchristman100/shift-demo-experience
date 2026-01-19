import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-20 bg-[#0D0F33]/95 backdrop-blur-md border-b-[3px] border-[#F54A48]">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/696d870db950ef67250e12a0/68b3121c0_ShiFtFavicon.png"
          alt="ShiFT"
          className="h-10 w-auto"
        />
        
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