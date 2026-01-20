"use client";
import React, { useState, useEffect } from 'react';
import { Construction, Rocket, Lock } from 'lucide-react';

// SET THE ACTUAL LAUNCH DATE HERE
// This ensures the counter is consistent for all users.
// Format: Year, Month (0-indexed, so 3 is April), Day, Hour, Minute
const LAUNCH_DATE = new Date(2026, 3, 20, 0, 0, 0).getTime();

const DashboardPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const distance = LAUNCH_DATE - now;

      // If the date has passed, keep it at zero
      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    // Run once immediately to prevent "00" flicker on load
    calculateTime();

    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      {/* Floated Card */}
      <div className="relative z-10 w-full max-w-lg bg-white rounded-3xl shadow-[0_20px_50px_rgba(15,23,42,0.1)] border border-slate-100 p-8 md:p-12 text-center transform transition-all">
        
        <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-50 rounded-full mb-6">
          <Construction className="w-10 h-10 text-yellow-600 animate-pulse" />
        </div>

        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">
          Platform Under Development
        </h1>
        <p className="text-slate-600 mb-8 text-sm md:text-base">
          Our Royal Student Portal is being handcrafted for excellence. 
          The official launch is scheduled for <span className="font-bold text-slate-900">April 20, 2026</span>.
        </p>

        {/* Countdown Grid */}
        <div className="grid grid-cols-4 gap-2 md:gap-4 mb-10">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hrs', value: timeLeft.hours },
            { label: 'Min', value: timeLeft.minutes },
            { label: 'Sec', value: timeLeft.seconds },
          ].map((item, index) => (
            <div key={index} className="bg-slate-900 rounded-2xl p-3 md:p-4 border-b-4 border-yellow-600 shadow-lg">
              <span className="block text-xl md:text-3xl font-bold text-white leading-none tabular-nums">
                {item.value.toString().padStart(2, '0')}
              </span>
              <span className="text-[10px] md:text-xs uppercase tracking-widest text-yellow-500 font-bold mt-1 block">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-widest">
            <Lock className="w-3 h-3" />
            Secure Enrollment Portal
          </div>
          <button 
            disabled 
            className="w-full py-4 bg-yellow-400/50 text-yellow-900/60 font-bold rounded-xl flex items-center justify-center gap-2 cursor-not-allowed border border-yellow-200"
          >
            <Rocket className="w-5 h-5" />
            IN PROGRESS
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100">
          <p className="text-[10px] text-slate-400 font-medium uppercase tracking-[0.2em]">
            Imma Royal Open University • Florida USA
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;