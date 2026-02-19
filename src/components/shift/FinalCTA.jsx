import React from 'react';
import { base44 } from '@/api/base44Client';

export default function FinalCTA({ pageLoadTime }) {
  const handleBookingClick = () => {
    const timeOnPage = Math.round((Date.now() - (pageLoadTime || Date.now())) / 1000);
    base44.analytics.track({
      eventName: 'experience_to_booking',
      properties: { from_section: 'cta_bottom', time_on_page: timeOnPage },
    });
  };

  return (
    <section className="gradient-navy py-24 px-6 border-t-4 border-[#F54A48]">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-white text-[16px] mb-5">
          The calculator showed you the problem. This page showed you the fix.
        </p>

        <h2 className="font-montserrat font-bold text-[28px] md:text-[32px] text-white mb-4 tracking-[-0.5px] max-w-[700px] mx-auto">
          Your Reality Session shows you the exact math — all 7 leaks quantified in dollars, with your numbers, live on screen.
        </h2>

        <p className="text-[#64748B] text-[14px] mb-10">
          15 minutes. Zero obligation.
        </p>

        <a
          href="https://makea.shiftnow.io/widget/bookings/convert-every-lead"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleBookingClick}
          className="inline-block bg-[#F54A48] text-white px-12 py-6 rounded-xl font-montserrat font-extrabold text-lg md:text-xl uppercase tracking-wide shadow-[0_10px_30px_rgba(245,74,72,0.4)] btn-hover"
        >
          Book My Reality Session →
        </a>

        <p className="text-[#6B7C93] text-sm mt-8">
          ✓ No credit card required for demo  •  ✓ 89% retention rate  •  ✓ 5-10X average ROI
        </p>
      </div>
    </section>
  );
}