import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export default function WidgetsSection() {
  const handleCallClick = () => {
    alert('🚀 LIVE WEB CALL INTEGRATION:\n\n✅ INSTANT browser-to-AI voice connection\n✅ NO phone number required\n✅ NO callback waiting\n✅ Talk RIGHT NOW through your browser\n\nIntegration: Vapi.ai Web Call, WebRTC, or custom voice API');
  };

  const handleChatClick = () => {
    alert('💬 AI CHAT INTEGRATION:\n\nEmbed your chat widget here.\n\nIntegration options:\n• Custom chat widget\n• Intercom\n• Drift\n• Custom solution');
  };

  return (
    <section className="bg-[#E0EAF4] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-montserrat text-xs font-bold uppercase tracking-[2px] text-[#FA982F] mb-3 block">
            Experience the AI
          </span>
          <h2 className="font-montserrat font-black text-3xl md:text-[42px] text-[#0D0F33] mb-4 tracking-[-1px]">
            Test Our AI Agents Live
          </h2>
          <p className="text-lg md:text-xl text-[#6B7C93] max-w-2xl mx-auto">
            See how ShiFt responds to real customers — instantly, intelligently, 24/7
          </p>
        </div>

        {/* Widget Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LIVE Web Call Card */}
          <div className="bg-white border-[3px] border-[#F54A48] rounded-2xl p-10 text-center card-hover relative">
            {/* Industry First Badge */}
            <div className="absolute -top-3 right-6 gradient-coral-orange px-4 py-1.5 rounded-full shadow-[0_4px_12px_rgba(245,74,72,0.4)]">
              <span className="text-white text-[11px] font-extrabold uppercase tracking-wide">
                🚀 Industry First
              </span>
            </div>

            {/* Icon */}
            <div className="text-7xl mb-6 animate-pulse-glow">📞</div>

            {/* Title */}
            <h3 className="font-montserrat font-extrabold text-2xl md:text-[28px] text-[#0D0F33] mb-3">
              LIVE Web Call Agent
            </h3>

            {/* Emphasized Headline */}
            <p className="font-semibold text-lg text-[#F54A48] mb-4">
              No Phone Required. Talk Now. Right Here.
            </p>

            {/* Description */}
            <p className="text-[#6B7C93] text-base mb-6 leading-relaxed">
              Click below and talk to our AI instantly through your browser — no phone number needed, no callback waiting. It's like Zoom, but with AI.
            </p>

            {/* Comparison Box */}
            <div className="bg-[#F54A48]/10 border-2 border-[#F54A48] rounded-xl p-5 mb-6 text-left">
              <div className="mb-4">
                <span className="text-[#6B7C93] font-semibold">❌ Everyone Else:</span>
                <p className="text-[#6B7C93] italic mt-1">
                  "Enter your phone number and wait for a callback..."
                </p>
              </div>
              <div>
                <span className="text-[#0D0F33] font-bold">✅ ShiFt:</span>
                <p className="text-[#0D0F33] font-semibold mt-1">
                  "Click and talk RIGHT NOW. Browser-to-AI in real-time."
                </p>
              </div>
            </div>

            {/* Widget Embed Area */}
            <div className="min-h-[150px] bg-[#E0EAF4] border-2 border-dashed border-[#6B7C93] rounded-xl p-6 flex flex-col items-center justify-center mb-6">
              <div className="text-4xl mb-3">🎙️</div>
              <p className="text-[#6B7C93] text-sm font-medium text-center">
                LIVE Web Call Widget Embed Area<br/>
                <span className="text-xs">(Integration: Vapi.ai Web Call / WebRTC / Custom)</span><br/>
                <span className="text-xs">Real-time voice → No phone → Instant connection</span>
              </p>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleCallClick}
              className="w-full gradient-coral-orange text-white py-5 rounded-xl font-montserrat font-extrabold text-base uppercase tracking-wide btn-hover"
            >
              🎙️ Start Live Call Now →
            </button>

            {/* Widget Note */}
            <p className="text-[#FA982F] text-[13px] font-semibold mt-4">
              ⚡ Instant connection • 🌐 Browser-based • 🚫 No phone needed
            </p>
          </div>

          {/* AI Chat Card */}
          <div className="bg-white border-[3px] border-[#F54A48] rounded-2xl p-10 text-center card-hover">
            {/* Icon */}
            <div className="text-7xl mb-6 animate-pulse-glow">💬</div>

            {/* Title */}
            <h3 className="font-montserrat font-extrabold text-2xl md:text-[28px] text-[#0D0F33] mb-6">
              AI Chat Agent
            </h3>

            {/* Description */}
            <p className="text-[#6B7C93] text-base mb-8 leading-relaxed">
              Ask the AI anything about roofing, pricing, or availability. Watch it qualify leads like a pro. Experience instant, intelligent responses that convert visitors into customers.
            </p>

            {/* Widget Embed Area */}
            <div className="min-h-[200px] bg-[#E0EAF4] border-2 border-dashed border-[#6B7C93] rounded-xl p-6 flex flex-col items-center justify-center mb-6">
              <div className="text-4xl mb-3">💬</div>
              <p className="text-[#6B7C93] text-sm font-medium text-center">
                AI Chat Widget Embed Area<br/>
                <span className="text-xs">(Integration: Custom / Intercom / Drift)</span>
              </p>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleChatClick}
              className="w-full gradient-coral-orange text-white py-5 rounded-xl font-montserrat font-extrabold text-base uppercase tracking-wide btn-hover"
            >
              Start Chatting →
            </button>

            {/* Widget Note */}
            <p className="text-[#FA982F] text-[13px] font-semibold mt-4">
              Trained on 10,000+ roofing conversations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}