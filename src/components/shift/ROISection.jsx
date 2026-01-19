import React from 'react';

export default function ROISection({ calculatorResults }) {
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Default values if calculator hasn't been used
  const savings = calculatorResults?.savings || 2500;
  const roi = calculatorResults?.roi || 4;
  const annualNet = calculatorResults?.annualNet || 22836;

  return (
    <section className="gradient-navy py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-black text-3xl md:text-[42px] text-white mb-4 tracking-[-1px]">
            The Math Is Simple
          </h2>
          <p className="text-lg md:text-xl text-[#FA982F] font-semibold">
            You're bleeding revenue. ShiFt stops the leak.
          </p>
        </div>

        {/* ROI Comparison Card */}
        <div className="bg-white/5 border-2 border-[#F54A48] rounded-2xl p-10 md:p-12 max-w-4xl mx-auto">
          {/* ROI Math Display */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-10">
            {/* You Save */}
            <div className="text-center">
              <div className="text-[#6B7C93] text-sm uppercase tracking-wider font-semibold mb-2">
                You Save
              </div>
              <div className="font-montserrat font-black text-4xl md:text-5xl text-[#F54A48]">
                ${formatNumber(savings)}/mo
              </div>
            </div>

            {/* Divider */}
            <div className="font-light text-4xl md:text-5xl text-[#FA982F] rotate-0 md:rotate-0">
              ÷
            </div>

            {/* You Pay */}
            <div className="text-center">
              <div className="text-[#6B7C93] text-sm uppercase tracking-wider font-semibold mb-2">
                You Pay
              </div>
              <div className="font-montserrat font-black text-4xl md:text-5xl text-white">
                $597/mo
              </div>
            </div>
          </div>

          {/* ROI Result Box */}
          <div className="bg-[#FA982F]/15 border-2 border-[#FA982F] rounded-xl p-8 text-center">
            <div className="text-[#FA982F] text-base uppercase tracking-wider font-bold mb-3">
              Return on Investment
            </div>
            <div className="font-montserrat font-black text-5xl md:text-[64px] text-white mb-3">
              {roi}:1
            </div>
            <div className="text-white/90 text-lg">
              Or <span className="font-bold text-[#FA982F]">${formatNumber(annualNet)}</span> saved per year
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}