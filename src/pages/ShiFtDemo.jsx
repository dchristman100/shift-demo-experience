import React, { useState } from 'react';
import Header from '@/components/shift/Header';
import HeroSection from '@/components/shift/HeroSection';
import CalculatorSection from '@/components/shift/CalculatorSection';
import WidgetsSection from '@/components/shift/WidgetsSection';
import ROISection from '@/components/shift/ROISection';
import PricingSection from '@/components/shift/PricingSection';
import FinalCTA from '@/components/shift/FinalCTA';

export default function ShiFtDemo() {
  const [calculatorResults, setCalculatorResults] = useState(null);

  const handleCalculate = (results) => {
    setCalculatorResults(results);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CalculatorSection onCalculate={handleCalculate} />
      <WidgetsSection />
      <ROISection calculatorResults={calculatorResults} />
      <PricingSection />
      <FinalCTA />
    </div>
  );
}