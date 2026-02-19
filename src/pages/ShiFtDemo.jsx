import React, { useState, useRef } from 'react';
import Header from '@/components/shift/Header';
import HeroSection from '@/components/shift/HeroSection';
import RevenueLeaksSection from '@/components/shift/RevenueLeaksSection';
import CalculatorSection from '@/components/shift/CalculatorSection';
import WidgetsSection from '@/components/shift/WidgetsSection';
import ROISection from '@/components/shift/ROISection';
import PricingSection from '@/components/shift/PricingSection';
import FinalCTA from '@/components/shift/FinalCTA';

export default function ShiFtDemo() {
  const [calculatorResults, setCalculatorResults] = useState(null);
  const pageLoadTime = useRef(Date.now()).current;

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <RevenueLeaksSection pageLoadTime={pageLoadTime} />
      <div id="live-demo">
        <CalculatorSection onCalculate={setCalculatorResults} />
        <WidgetsSection />
      </div>
      <ROISection calculatorResults={calculatorResults} />
      <PricingSection />
      <FinalCTA pageLoadTime={pageLoadTime} />
    </div>
  );
}