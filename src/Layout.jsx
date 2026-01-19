import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "./utils";

export default function Layout({ children, currentPageName }) {
  return (
    <div className="min-h-screen bg-[#0D0F33]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap');
        
        :root {
          --navy-core: #0D0F33;
          --coral-action: #F54A48;
          --orange-energy: #FA982F;
          --blue-precision: #2E77AE;
          --slate-secondary: #6B7C93;
          --gray-canvas: #E0EAF4;
        }
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        .font-montserrat {
          font-family: 'Montserrat Alternates', sans-serif;
        }
        
        .gradient-coral-orange {
          background: linear-gradient(135deg, #F54A48 0%, #FA982F 100%);
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #F54A48 0%, #FA982F 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .gradient-navy {
          background: linear-gradient(135deg, #0D0F33 0%, #1a1d4a 100%);
        }
        
        @keyframes pulse-glow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
        
        @keyframes bounce-soft {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .animate-bounce-soft {
          animation: bounce-soft 2s ease-in-out infinite;
        }
        
        .card-hover {
          transition: all 0.3s ease;
        }
        
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(245, 74, 72, 0.2);
        }
        
        .btn-hover {
          transition: all 0.3s ease;
        }
        
        .btn-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(245, 74, 72, 0.4);
        }
        
        .results-display {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.5s ease;
        }
        
        .results-display.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      {children}
    </div>
  );
}