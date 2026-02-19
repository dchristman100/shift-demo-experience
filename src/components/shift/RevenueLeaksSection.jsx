import React, { useEffect, useRef } from 'react';
import { base44 } from '@/api/base44Client';

const leaks = [
  { number: 1, name: "Slow Lead Response", quote: "67% of prospects book with the competitor who responds first", fix: "AI answers every call in < 30 seconds", showDemo: true },
  { number: 2, name: "After-Hours Lead Loss", quote: "35% of leads arrive when your office is closed — 90% are gone forever", fix: "24/7 AI — your business never closes", showDemo: true },
  { number: 3, name: "Booking Conversion Gap", quote: "Leads you contact but never convert to booked appointments", fix: "AI booking + automated scheduling", showDemo: true },
  { number: 4, name: "Appointment No-Shows", quote: "40-50% of booked appointments never show up", fix: "Automated confirmations + reminders + rescheduling", showDemo: false },
  { number: 5, name: "Low Close Rate", quote: "Unqualified prospects waste your sales team's time", fix: "Pre-qualified, pre-sold appointments", showDemo: false },
  { number: 6, name: "Follow-Up Failure", quote: "Leads fall through pipeline cracks and never get re-engaged", fix: "AI follow-up recovers every dropped lead", showDemo: false },
  { number: 7, name: "Marketing Waste", quote: "No idea which marketing actually works — money disappears", fix: "AI eliminates SDR overhead + tracks every dollar", showDemo: false },
];

function LeakCard({ leak, onCardClick, onDemoClick }) {
  return (
    <div
      onClick={() => onCardClick(leak)}
      className="bg-[#12143A] rounded-lg p-5 min-h-[180px] flex flex-col gap-3 cursor-pointer hover:bg-[#1a1d4a] transition-colors"
      style={{ border: '1px solid rgba(255,255,255,0.08)', borderLeft: '3px solid #F54A48' }}
    >
      <span className="text-[12px] uppercase tracking-[1px] text-[#F54A48] font-bold">
        🩸 LEAK {leak.number}
      </span>
      <h3 className="font-montserrat font-bold text-white text-[18px] leading-tight">
        {leak.name}
      </h3>
      <p className="text-[#64748B] text-[14px] italic flex-1">
        "{leak.quote}"
      </p>
      <p className="text-[13px]">
        <span className="text-[#22C55E] font-semibold">ShiFt Fix:</span>{' '}
        <span className="text-white">{leak.fix}</span>
      </p>
      {leak.showDemo && (
        <button
          onClick={(e) => onDemoClick(e, leak)}
          className="text-[#F54A48] text-[13px] font-semibold text-left hover:underline w-fit"
        >
          See Demo ↓
        </button>
      )}
    </div>
  );
}

export default function RevenueLeaksSection({ pageLoadTime }) {
  const sectionRef = useRef(null);
  const urlParams = new URLSearchParams(window.location.search);
  const fromCalculator = urlParams.get('from') === 'calculator';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          base44.analytics.track({
            eventName: 'leaks_section_viewed',
            properties: { from_calculator: fromCalculator },
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [fromCalculator]);

  const handleCardClick = (leak) => {
    base44.analytics.track({
      eventName: 'leak_card_clicked',
      properties: { leak_number: leak.number, leak_name: leak.name },
    });
  };

  const handleDemoLinkClick = (e, leak) => {
    e.stopPropagation();
    base44.analytics.track({
      eventName: 'leak_demo_link_clicked',
      properties: { leak_number: leak.number },
    });
    document.getElementById('live-demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBookingClick = () => {
    const timeOnPage = Math.round((Date.now() - pageLoadTime) / 1000);
    base44.analytics.track({
      eventName: 'experience_to_booking',
      properties: { from_section: 'leaks', time_on_page: timeOnPage },
    });
  };

  return (
    <section ref={sectionRef} className="bg-[#0D0F33] py-20 px-6 border-b border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[12px] uppercase tracking-[2px] text-[#F54A48] font-bold block mb-4">
            WHY MOST CONTRACTORS LOSE $30K–$100K/MONTH
          </span>
          <h2 className="font-montserrat font-bold text-[24px] md:text-[32px] text-white mb-4">
            The 7 Revenue Leaks Hiding in Your Business
          </h2>
          <p className="text-[#64748B] text-[16px] max-w-[600px] mx-auto">
            Every service business has them. Most don't know they exist. Here's what they are — and how ShiFt plugs each one.
          </p>
        </div>

        {/* Row 1: 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {leaks.slice(0, 3).map((leak) => (
            <LeakCard key={leak.number} leak={leak} onCardClick={handleCardClick} onDemoClick={handleDemoLinkClick} />
          ))}
        </div>

        {/* Row 2: 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {leaks.slice(3).map((leak) => (
            <LeakCard key={leak.number} leak={leak} onCardClick={handleCardClick} onDemoClick={handleDemoLinkClick} />
          ))}
        </div>

        {/* Summary + CTA Block */}
        <div className="text-center mt-16">
          <p className="text-[#64748B] text-[16px] mb-3">
            The calculator showed you 2-3 of these leaks.
          </p>
          <p className="font-montserrat font-bold text-white text-[18px] mb-8 max-w-[600px] mx-auto">
            Your Reality Session reveals all 7 — with exact dollar amounts from YOUR business.
          </p>
          <a
            href="https://makea.shiftnow.io/widget/bookings/convert-every-lead"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleBookingClick}
            className="inline-block bg-[#F54A48] text-white px-10 py-5 rounded-xl font-montserrat font-extrabold text-lg uppercase tracking-wide shadow-[0_10px_30px_rgba(245,74,72,0.4)] btn-hover"
          >
            Book Your Reality Session →
          </a>
          <p className="text-[#64748B] text-[13px] mt-4">
            15 minutes. Your numbers. Zero obligation.
          </p>
        </div>
      </div>
    </section>
  );
}