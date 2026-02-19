import React from 'react';

export default function HeroSection() {
  const urlParams = new URLSearchParams(window.location.search);
  const fromCalculator = urlParams.get('from') === 'calculator';
  const totalGap = urlParams.get('total_gap');

  const headline = fromCalculator && totalGap
    ? `You're losing $${totalGap}/month across at least 3 revenue leaks. Here's how ShiFt plugs all 7.`
    : `See How ShiFt Plugs the 7 Revenue Leaks That Cost Contractors $30K–$100K/Month`;

  const stats = [
    { value: "24/7", label: "Always On" },
    { value: "<1s", label: "Connection Time" },
    { value: "5-10X", label: "Average ROI" }
  ];

  return (
    <section className="gradient-navy py-16 px-6 border-b-[3px] border-[#F54A48]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Eyebrow Badge */}
        <div className="inline-block mb-8">
          <span className="font-montserrat text-[13px] font-bold uppercase tracking-[2px] text-[#FA982F] bg-[#FA982F]/15 border border-[#FA982F]/30 px-5 py-2 rounded">
            Interactive Demo Experience
          </span>
        </div>
        
        {/* Main Heading */}
        <h1 className="font-montserrat font-black text-4xl md:text-5xl lg:text-[56px] text-white mb-5 tracking-[-2px] leading-tight">
          {headline}
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-[22px] text-white/90 max-w-[800px] mx-auto mb-12 leading-relaxed">
          Test our AI-powered revenue system in real-time. Talk to our AI live through your browser — no phone needed. See how we capture every lead, answer every call, and convert every opportunity.
        </p>
        
        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-montserrat font-black text-3xl md:text-[42px] text-[#FA982F] mb-2">
                {stat.value}
              </div>
              <div className="text-[13px] uppercase tracking-[1px] text-[#6B7C93] font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}