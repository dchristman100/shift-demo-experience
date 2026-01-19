import React from 'react';
import { Check } from 'lucide-react';

export default function PricingSection() {
  const plans = [
    {
      name: "Essential",
      price: "$297",
      tagline: "AI answering — Call OR Chat",
      featured: false,
      features: [
        { text: "AI Call answering OR AI Chat (choose one)", bold: true },
        { text: "Automated lead capture & qualification", bold: false },
        { text: "Appointment booking & calendar sync", bold: false },
        { text: "24/7 coverage (nights, weekends, storms)", bold: true },
        { text: "Up to 10 leads/day", bold: true },
        { text: "Email support (24-hour response)", bold: false },
        { text: "Basic dashboard", bold: false }
      ]
    },
    {
      name: "Professional",
      price: "$597",
      tagline: "Full Revenue Capture — Call + Chat + CRM + Automation",
      featured: true,
      badge: "⚡ Most Popular",
      features: [
        { text: "AI Call + AI Chat (both included)", bold: true },
        { text: "GoHighLevel CRM with pipelines", bold: true },
        { text: "Marketing automation (email/SMS)", bold: true },
        { text: "Advanced qualification & scoring", bold: false },
        { text: "Missed-call recovery (auto text + callback)", bold: true },
        { text: "Up to 30 leads/day", bold: true },
        { text: "Priority support (4-hour response)", bold: true },
        { text: "Advanced analytics & ROI tracking", bold: false }
      ]
    },
    {
      name: "Enterprise",
      price: "$997",
      tagline: "Multi-Location + White-Label + Dedicated Support",
      featured: false,
      features: [
        { text: "Everything in Professional +", bold: true },
        { text: "Multi-location support (up to 5 locations)", bold: true },
        { text: "Unlimited leads", bold: true },
        { text: "White-label branding", bold: true },
        { text: "Custom AI training", bold: true },
        { text: "Dedicated account manager", bold: true },
        { text: "Custom workflows & integrations", bold: false },
        { text: "99.5% uptime SLA", bold: false },
        { text: "24/7 phone support (1-hour response)", bold: true },
        { text: "Custom reporting & API access", bold: false }
      ]
    }
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="font-montserrat text-xs font-bold uppercase tracking-[2px] text-[#FA982F] mb-3 block">
            Choose Your System
          </span>
          <h2 className="font-montserrat font-black text-3xl md:text-[42px] text-[#0D0F33] mb-4 tracking-[-1px]">
            Stop Bleeding Revenue Today
          </h2>
          <p className="text-lg md:text-xl text-[#6B7C93]">
            No setup fees. No long-term contracts. Live in 48-72 hours.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-[#E0EAF4] rounded-2xl p-10 card-hover ${
                plan.featured 
                  ? 'border-[3px] border-[#F54A48] lg:scale-105 shadow-xl' 
                  : 'border-[3px] border-[#6B7C93]/30 hover:border-[#F54A48]'
              }`}
            >
              {/* Featured Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-coral-orange px-6 py-2 rounded-full shadow-lg">
                  <span className="text-white text-sm font-extrabold">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="text-center pb-6 border-b-2 border-[#0D0F33]/10 mb-6">
                <h3 className="font-montserrat font-extrabold text-2xl text-[#0D0F33] mb-3">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1 mb-3">
                  <span className="font-montserrat font-black text-5xl text-[#F54A48]">
                    {plan.price}
                  </span>
                  <span className="text-[#6B7C93] text-xl">/mo</span>
                </div>
                <p className="text-[#6B7C93] text-base font-semibold">
                  {plan.tagline}
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <span className="text-[#FA982F] text-lg mt-0.5 flex-shrink-0">✓</span>
                    <span className={`text-[15px] ${feature.bold ? 'font-bold text-[#0D0F33]' : 'text-[#6B7C93]'}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className="w-full gradient-coral-orange text-white py-5 rounded-xl font-montserrat font-extrabold text-base uppercase tracking-wide btn-hover">
                Get Started →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}