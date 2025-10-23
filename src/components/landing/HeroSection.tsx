"use client";

interface HeroSectionProps {
  groomName: string;
  brideName: string;
  eventDate: string;
}

export default function HeroSection({ groomName, eventDate }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-50 via-pink-50/50 to-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl animate-float-slow-delayed" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-100/30 rounded-full blur-3xl animate-pulse-very-slow" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Floating animated hearts background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 text-5xl animate-float-up opacity-40">💗</div>
          <div className="absolute top-32 right-20 text-4xl animate-float-up-delayed opacity-30">✨</div>
          <div className="absolute top-40 left-1/3 text-6xl animate-float-up-slower opacity-20">💕</div>
          <div className="absolute top-1/3 right-1/4 text-5xl animate-float-up-delayed-2 opacity-35">🌸</div>
          <div className="absolute top-1/2 left-20 text-4xl animate-float-up opacity-25">✨</div>
        </div>

        <div className="mb-12 flex flex-col items-center">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-purple-400 to-purple-500 rounded-full" />
            <svg className="w-8 h-8 text-purple-400 animate-spin-slow" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <div className="h-1 w-24 bg-gradient-to-l from-transparent via-purple-400 to-purple-500 rounded-full" />
          </div>

          {/* Animated cake with sparkles */}
          <div className="relative group mb-8">
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-purple-400/50 via-pink-400/50 to-purple-400/50 rounded-full scale-150 group-hover:scale-175 transition-all duration-700 animate-pulse-glow" />
            <div className="relative text-9xl md:text-10xl drop-shadow-2xl animate-bounce-gentle">🎂</div>
            <div className="absolute -top-4 -right-4 text-6xl animate-float-sparkle">✨</div>
            <div className="absolute -bottom-4 -left-4 text-6xl animate-float-sparkle-delayed">🎉</div>
          </div>

          {/* Animated sparkle trio */}
          <div className="flex items-center justify-center gap-6 mb-8 relative">
            <span className="text-5xl animate-twinkle">✨</span>
            <span className="text-5xl md:text-6xl animate-bounce-intense delay-100">🎉</span>
            <span className="text-5xl animate-twinkle-delayed">✨</span>
          </div>
        </div>

        {/* Main title with animated gradient */}
        <h1 className="font-serif text-7xl md:text-8xl font-extralight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 mb-4 tracking-wider leading-tight animate-title-shimmer">
          {groomName}
        </h1>

        {/* Subtitle with elegant animation */}
        <p className="font-serif text-3xl md:text-4xl text-pink-400 font-light tracking-widest mb-2 animate-fade-in-down">
          Te celebramos
        </p>
        <p className="font-serif text-2xl text-purple-400 font-light tracking-widest mb-10 animate-fade-in-down-delayed">
          🎈 Cumple años en grande 🎈
        </p>

        {/* Decorative elements with animations */}
        <div className="flex items-center justify-center gap-8 my-12">
          <div className="relative group">
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-purple-300 to-pink-300 rounded-full group-hover:via-purple-400 transition-all" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse-bright shadow-lg shadow-purple-400/50" />
          </div>
          <div className="text-4xl font-light animate-spin-slow-reverse">❧</div>
          <div className="relative group">
            <div className="h-1 w-32 bg-gradient-to-l from-transparent via-pink-300 to-purple-300 rounded-full group-hover:via-pink-400 transition-all" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-l from-pink-400 to-purple-400 rounded-full animate-pulse-bright shadow-lg shadow-pink-400/50" />
          </div>
        </div>

        {/* Main tagline */}
        <p className="font-serif text-2xl md:text-3xl text-gray-700 italic mb-14 tracking-wide font-light animate-fade-in">
          Una noche llena de magia, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500">luces y celebración</span> 🌟
        </p>

        {/* Date card with enhanced effects */}
        <div className="relative inline-block group">
          {/* Animated glow background */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400/40 via-pink-400/40 to-purple-400/40 blur-3xl scale-125 group-hover:scale-150 transition-all duration-700 animate-glow-pulse rounded-3xl" />
          
          {/* Particle effects around card */}
          <div className="absolute -top-6 -right-6 w-4 h-4 bg-pink-400 rounded-full animate-float-particle opacity-60" />
          <div className="absolute -bottom-8 -left-8 w-3 h-3 bg-purple-400 rounded-full animate-float-particle-delayed opacity-50" />
          <div className="absolute top-1/2 -right-10 w-3 h-3 bg-pink-300 rounded-full animate-float-particle-2 opacity-40" />
          
          {/* Main card */}
          <div className="relative bg-gradient-to-br from-white/95 via-purple-50/80 to-pink-50/80 backdrop-blur-xl border-2 border-purple-200/70 rounded-3xl p-12 md:p-16 shadow-2xl transition-all duration-500 group-hover:shadow-pink-300/40 group-hover:border-pink-300/50">
            <div className="absolute top-4 left-4 w-8 h-8 border-t-3 border-l-3 border-purple-300 rounded-tl-xl" />
            <div className="absolute top-4 right-4 w-8 h-8 border-t-3 border-r-3 border-pink-300 rounded-tr-xl" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-3 border-l-3 border-pink-300 rounded-bl-xl" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-3 border-r-3 border-purple-300 rounded-br-xl" />
            
            {/* Date display with icon */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <svg className="w-8 h-8 text-purple-400 animate-spin-slow" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <svg className="w-8 h-8 text-pink-400 animate-spin-slow-reverse" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            
            <p className="font-serif text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-600 to-purple-700 tracking-wider font-light mb-6 animate-fade-in-up">
              {eventDate}
            </p>
            
            <div className="flex items-center justify-center gap-3">
              <div className="h-1 flex-1 bg-gradient-to-r from-transparent to-pink-300 rounded-full" />
              <span className="text-3xl animate-pulse-bright">💝</span>
              <div className="h-1 flex-1 bg-gradient-to-l from-transparent to-pink-300 rounded-full" />
            </div>
          </div>
        </div>


      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.1); }
        }
        @keyframes float-slow-delayed {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, 30px) scale(1.05); }
        }
        @keyframes pulse-very-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        @keyframes float-up {
          0% { 
            transform: translateY(0) translateX(0);
            opacity: 1;
          }
          100% { 
            transform: translateY(-200px) translateX(20px);
            opacity: 0;
          }
        }
        @keyframes float-up-delayed {
          0% { 
            transform: translateY(0) translateX(0);
            opacity: 1;
          }
          100% { 
            transform: translateY(-250px) translateX(-30px);
            opacity: 0;
          }
        }
        @keyframes float-up-slower {
          0% { 
            transform: translateY(0) translateX(0);
            opacity: 1;
          }
          100% { 
            transform: translateY(-150px) translateX(40px);
            opacity: 0;
          }
        }
        @keyframes float-up-delayed-2 {
          0% { 
            transform: translateY(0) translateX(0);
            opacity: 1;
          }
          100% { 
            transform: translateY(-300px) translateX(-50px);
            opacity: 0;
          }
        }
        @keyframes float-sparkle {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.4; }
          50% { transform: scale(1.3) rotate(20deg); opacity: 1; }
        }
        @keyframes float-sparkle-delayed {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.3; }
          50% { transform: scale(1.2) rotate(-20deg); opacity: 0.8; }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes twinkle-delayed {
          0%, 100% { opacity: 0.2; transform: scale(0.7); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        @keyframes bounce-intense {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.2); }
        }
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        @keyframes pulse-bright {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes float-particle {
          0% { transform: translateY(0) translateX(0); opacity: 1; }
          100% { transform: translateY(-100px) translateX(50px); opacity: 0; }
        }
        @keyframes float-particle-delayed {
          0% { transform: translateY(0) translateX(0); opacity: 1; }
          100% { transform: translateY(-150px) translateX(-40px); opacity: 0; }
        }
        @keyframes float-particle-2 {
          0% { transform: translateY(0) translateX(0); opacity: 1; }
          100% { transform: translateY(-120px) translateX(80px); opacity: 0; }
        }
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        @keyframes title-shimmer {
          0%, 100% { text-shadow: 0 0 10px rgba(168, 85, 247, 0.3); }
          50% { text-shadow: 0 0 20px rgba(236, 72, 153, 0.5); }
        }
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-down-delayed {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
        .animate-float-slow-delayed {
          animation: float-slow-delayed 14s ease-in-out infinite;
        }
        .animate-pulse-very-slow {
          animation: pulse-very-slow 8s ease-in-out infinite;
        }
        .animate-float-up {
          animation: float-up 6s ease-out infinite;
        }
        .animate-float-up-delayed {
          animation: float-up-delayed 7s ease-out 1s infinite;
        }
        .animate-float-up-slower {
          animation: float-up-slower 8s ease-out 2s infinite;
        }
        .animate-float-up-delayed-2 {
          animation: float-up-delayed-2 8s ease-out 1.5s infinite;
        }
        .animate-float-sparkle {
          animation: float-sparkle 2s ease-in-out infinite;
        }
        .animate-float-sparkle-delayed {
          animation: float-sparkle-delayed 2.5s ease-in-out 0.5s infinite;
        }
        .animate-twinkle {
          animation: twinkle 1.5s ease-in-out infinite;
        }
        .animate-twinkle-delayed {
          animation: twinkle-delayed 1.5s ease-in-out 0.7s infinite;
        }
        .animate-bounce-intense {
          animation: bounce-intense 1s ease-in-out infinite;
        }
        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 10s linear infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        .animate-pulse-bright {
          animation: pulse-bright 2s ease-in-out infinite;
        }
        .animate-float-particle {
          animation: float-particle 4s ease-out infinite;
        }
        .animate-float-particle-delayed {
          animation: float-particle-delayed 5s ease-out 1s infinite;
        }
        .animate-float-particle-2 {
          animation: float-particle-2 4.5s ease-out 0.8s infinite;
        }
        .animate-glow-pulse {
          animation: glow-pulse 4s ease-in-out infinite;
        }
        .animate-title-shimmer {
          animation: title-shimmer 3s ease-in-out infinite;
        }
        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out;
        }
        .animate-fade-in-down-delayed {
          animation: fade-in-down-delayed 1s ease-out 0.3s both;
        }
        .animate-fade-in {
          animation: fade-in 2s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.5s both;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
      `}</style>
    </section>
  );
}