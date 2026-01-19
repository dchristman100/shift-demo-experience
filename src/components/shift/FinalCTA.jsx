import React from 'react';

export default function FinalCTA() {
  return (
    <section className="gradient-navy py-24 px-6 border-t-4 border-[#F54A48]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Icon */}
        <div className="text-7xl md:text-[80px] mb-8 animate-bounce-soft">
          🚀
        </div>

        {/* Title */}
        <h2 className="font-montserrat font-black text-3xl md:text-5xl text-white mb-5 tracking-[-1px]">
          Ready to Stop the Bleeding?
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-[22px] text-[#FA982F] font-semibold mb-10">
          Live in 48-72 hours. Zero setup fees. Cancel anytime.
        </p>

        {/* Button Row */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-10">
          {/* Primary CTA */}
          <button className="gradient-coral-orange text-white px-10 md:px-12 py-6 rounded-xl font-montserrat font-extrabold text-lg md:text-xl uppercase tracking-wide shadow-[0_10px_30px_rgba(245,74,72,0.4)] btn-hover">
            Start Your 48-Hour Setup →
          </button>

          {/* Secondary CTA */}
          <a 
            href="https://makea.shiftnow.io/widget/bookings/convert-every-lead"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-[3px] border-[#F54A48] text-white px-10 md:px-12 py-6 rounded-xl font-montserrat font-extrabold text-lg md:text-xl uppercase tracking-wide hover:bg-[#F54A48]/10 transition-all btn-hover inline-block"
          >
            Schedule Implementation Call
          </a>
        </div>

        {/* Trust Note */}
        <p className="text-[#6B7C93] text-sm">
          ✓ No credit card required for demo  •  ✓ 89% retention rate  •  ✓ 5-10X average ROI
        </p>
      </div>
    </section>
  );
}