"use client";

import { useState, useEffect } from "react";

interface CountdownProps {
  eventDate: string; // Format: "15 de Diciembre, 2025"
}

export default function Countdown({ eventDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Parse the Spanish date format
    const months: Record<string, number> = {
      enero: 0, febrero: 1, marzo: 2, abril: 3, mayo: 4, junio: 5,
      julio: 6, agosto: 7, septiembre: 8, octubre: 9, noviembre: 10, diciembre: 11
    };

    const dateParts = eventDate.toLowerCase().match(/(\d+)\s+de\s+(\w+),?\s+(\d+)/);
    if (!dateParts) return;

    const day = parseInt(dateParts[1]);
    const month = months[dateParts[2]];
    const year = parseInt(dateParts[3]);
    const targetDate = new Date(year, month, day).getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  return (
    <section className="relative py-32 px-6 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 overflow-hidden">
      {/* Elegant background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl animate-pulse-very-slow" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl animate-pulse-very-slow-delayed" />
      </div>

      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="countdown-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M40,30 Q45,35 40,40 Q35,35 40,30" fill="none" stroke="#a855f7" strokeWidth="0.5" />
            <circle cx="40" cy="40" r="1.5" fill="#a855f7" opacity="0.3" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#countdown-pattern)" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Header section */}
        <div className="mb-16">
          {/* Ornamental top */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-purple-300 to-purple-400" />
            <svg className="w-5 h-5 text-purple-400 animate-spin-slow" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <div className="h-px w-20 bg-gradient-to-l from-transparent via-purple-300 to-purple-400" />
          </div>

          <h2 className="font-serif text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 mb-6 font-light tracking-wide">
            Cuenta Regresiva
          </h2>
          
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-purple-300" />
            <div className="text-purple-300">✦</div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-purple-300" />
          </div>

          <p className="font-serif text-xl text-gray-600 italic font-light tracking-wide">
            Cada momento nos acerca más al gran día
          </p>
        </div>

        {/* Countdown cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
          {[
            { label: "Días", value: timeLeft.days, gradient: "from-purple-500 to-pink-500", delay: "0s" },
            { label: "Horas", value: timeLeft.hours, gradient: "from-pink-500 to-purple-400", delay: "0.2s" },
            { label: "Minutos", value: timeLeft.minutes, gradient: "from-purple-400 to-pink-400", delay: "0.4s" },
            { label: "Segundos", value: timeLeft.seconds, gradient: "from-pink-400 to-purple-500", delay: "0.6s" },
          ].map((item) => (
            <div
              key={item.label}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: item.delay }}
            >
              {/* Background glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700 rounded-3xl scale-110`} />
              
              {/* Card */}
              <div className="relative bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-purple-100/50 p-8 md:p-10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-purple-200">
                {/* Corner decorations */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-purple-300/40 rounded-tl-lg" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-purple-300/40 rounded-tr-lg" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-purple-300/40 rounded-bl-lg" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-purple-300/40 rounded-br-lg" />

                {/* Number with gradient */}
                <div className={`text-6xl md:text-7xl font-light mb-4 text-transparent bg-clip-text bg-gradient-to-br ${item.gradient} tabular-nums tracking-tight`}>
                  {item.value.toString().padStart(2, "0")}
                </div>

                {/* Divider */}
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className={`h-px w-8 bg-gradient-to-r ${item.gradient} opacity-50`} />
                  <div className={`w-1 h-1 bg-gradient-to-r ${item.gradient} rounded-full`} />
                  <div className={`h-px w-8 bg-gradient-to-l ${item.gradient} opacity-50`} />
                </div>

                {/* Label */}
                <div className="font-serif text-sm md:text-base text-gray-600 tracking-widest uppercase">
                  {item.label}
                </div>

                {/* Floating sparkle on hover */}
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`w-3 h-3 bg-gradient-to-br ${item.gradient} rounded-full animate-ping`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom ornament */}
        <div className="flex items-center justify-center gap-6">
          <div className="relative">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-purple-300 to-pink-300" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 text-purple-400 mb-2 text-2xl">🎂</div>
            <p className="font-serif text-gray-500 italic text-sm tracking-wide">
              Un día para celebrar juntas
            </p>
          </div>

          <div className="relative">
            <div className="h-px w-24 bg-gradient-to-l from-transparent via-pink-300 to-purple-300" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-very-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.05); }
        }
        
        @keyframes pulse-very-slow-delayed {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.1); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-pulse-very-slow {
          animation: pulse-very-slow 8s ease-in-out infinite;
        }
        
        .animate-pulse-very-slow-delayed {
          animation: pulse-very-slow-delayed 10s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }
      `}</style>
    </section>
  );
}
