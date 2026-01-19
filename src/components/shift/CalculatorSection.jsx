import React, { useState } from 'react';

export default function CalculatorSection({ onCalculate }) {
  const [revenue, setRevenue] = useState('');
  const [leads, setLeads] = useState('');
  const [jobValue, setJobValue] = useState('$15,000');
  const [results, setResults] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const revenueOptions = [
    { label: "Select revenue...", value: "" },
    { label: "$1M - $2M", value: 1500000 },
    { label: "$2M - $3M", value: 2500000 },
    { label: "$3M - $5M", value: 4000000 },
    { label: "$5M - $7M", value: 6000000 },
    { label: "$7M - $10M", value: 8500000 },
    { label: "$10M+", value: 12000000 }
  ];

  const leadsOptions = [
    { label: "Select lead volume...", value: "" },
    { label: "0-25 leads/month", value: 12 },
    { label: "25-50 leads/month", value: 37 },
    { label: "50-100 leads/month", value: 75 },
    { label: "100-150 leads/month", value: 125 },
    { label: "150+ leads/month", value: 175 }
  ];

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleCalculate = () => {
    if (!revenue || !leads) {
      alert('Please select your revenue and lead volume');
      return;
    }

    const parsedJobValue = parseFloat(jobValue.replace(/[$,]/g, '')) || 15000;
    const lossRate = 0.40;
    const avgCloseRate = 0.30;
    
    const monthlyLoss = Math.round(parseInt(leads) * lossRate * avgCloseRate * parsedJobValue);
    const annualLoss = monthlyLoss * 12;
    
    const systemCost = 597;
    const savings = Math.round(monthlyLoss * 0.70);
    const roi = Math.round(savings / systemCost);
    const annualNet = Math.round((savings - systemCost) * 12);

    const calculatedResults = {
      monthlyLoss,
      annualLoss,
      savings,
      roi,
      annualNet
    };

    setResults(calculatedResults);
    setShowResults(true);
    
    if (onCalculate) {
      onCalculate(calculatedResults);
    }

    setTimeout(() => {
      document.getElementById('results-display')?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
    }, 100);
  };

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-montserrat text-xs font-bold uppercase tracking-[2px] text-[#FA982F] mb-3 block">
            Your Numbers
          </span>
          <h2 className="font-montserrat font-black text-3xl md:text-[42px] text-[#0D0F33] mb-4 tracking-[-1px]">
            Calculate Your Revenue Leak
          </h2>
          <p className="text-lg md:text-xl text-[#6B7C93]">
            Let's see exactly how much you're losing each month
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-[#E0EAF4] border-[3px] border-[#F54A48] rounded-2xl p-8 md:p-12 max-w-[900px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Revenue Input */}
            <div>
              <label className="font-montserrat font-bold text-[#0D0F33] text-base mb-2 block">
                Annual Revenue
              </label>
              <select
                value={revenue}
                onChange={(e) => setRevenue(e.target.value)}
                className="w-full bg-white border-2 border-[#6B7C93]/30 rounded-lg p-4 text-base focus:border-[#F54A48] focus:ring-2 focus:ring-[#F54A48]/10 outline-none transition-all"
              >
                {revenueOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            {/* Leads Input */}
            <div>
              <label className="font-montserrat font-bold text-[#0D0F33] text-base mb-2 block">
                Inbound Leads/Month
              </label>
              <select
                value={leads}
                onChange={(e) => setLeads(e.target.value)}
                className="w-full bg-white border-2 border-[#6B7C93]/30 rounded-lg p-4 text-base focus:border-[#F54A48] focus:ring-2 focus:ring-[#F54A48]/10 outline-none transition-all"
              >
                {leadsOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            {/* Job Value Input */}
            <div>
              <label className="font-montserrat font-bold text-[#0D0F33] text-base mb-2 block">
                Average Job Value
              </label>
              <input
                type="text"
                value={jobValue}
                onChange={(e) => setJobValue(e.target.value)}
                placeholder="$15,000"
                className="w-full bg-white border-2 border-[#6B7C93]/30 rounded-lg p-4 text-base focus:border-[#F54A48] focus:ring-2 focus:ring-[#F54A48]/10 outline-none transition-all"
              />
            </div>
          </div>

          {/* Calculate Button */}
          <button
            onClick={handleCalculate}
            className="w-full gradient-coral-orange text-white py-5 rounded-xl font-montserrat font-extrabold text-lg uppercase tracking-wide shadow-[0_8px_24px_rgba(245,74,72,0.3)] btn-hover"
          >
            Calculate My Revenue Leak →
          </button>
        </div>

        {/* Results Display */}
        <div 
          id="results-display"
          className={`results-display max-w-[900px] mx-auto mt-12 p-10 gradient-navy border-[3px] border-[#F54A48] rounded-2xl text-center ${showResults ? 'visible' : ''}`}
        >
          {results && (
            <>
              <div className="text-[#FA982F] text-lg md:text-xl uppercase font-bold tracking-wider mb-4">
                💰 Your Estimated Monthly Loss
              </div>
              <div className="font-montserrat font-black text-5xl md:text-7xl text-[#F54A48] mb-3">
                ${formatNumber(results.monthlyLoss)}
              </div>
              <div className="text-white/80 text-lg mb-6">
                in lost revenue every month
              </div>
              <div className="inline-block bg-[#F54A48]/20 px-6 py-3 rounded-lg">
                <span className="text-white text-lg md:text-2xl font-semibold">
                  That's <span className="text-[#F54A48] font-bold">${formatNumber(results.annualLoss)}</span> per year going to competitors
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}