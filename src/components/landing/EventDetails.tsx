"use client";

interface EventDetailsProps {
  eventDate?: string;
  eventTime: string;
  ceremonyPlace?: string;
  receptionPlace: string;
  eventLocation: string;
  dressCode: string;
  message?: string;
}

export default function EventDetails({
  receptionPlace,
  dressCode,
  message,
}: EventDetailsProps) {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-purple-50/30 via-white to-pink-50/30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl animate-pulse-very-slow" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl animate-pulse-very-slow-delayed" />
      </div>

      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="details-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="1" fill="#a855f7" />
            <path d="M30,25 Q33,28 30,31 Q27,28 30,25" fill="none" stroke="#a855f7" strokeWidth="0.3" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#details-pattern)" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-20 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-purple-300 to-purple-400" />
            <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <div className="h-px w-20 bg-gradient-to-l from-transparent via-purple-300 to-purple-400" />
          </div>

          <h2 className="font-serif text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 mb-6 font-light tracking-wide">
            Detalles del Evento
          </h2>
          
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-purple-300" />
            <div className="text-purple-300">✦</div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-purple-300" />
          </div>

          {message && (
            <p className="font-serif text-xl text-gray-600 italic font-light tracking-wide max-w-3xl mx-auto">
              {message}
            </p>
          )}
        </div>

        {/* Ceremony & Reception Cards */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16">
          {/* Celebration */}
          <div className="group relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
            
            <div className="relative bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-pink-100/50 transition-all duration-500 hover:scale-105 hover:shadow-pink-200/50 min-h-96">
              {/* Corner decorations */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-pink-300/50 rounded-tl-xl" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-pink-300/50 rounded-tr-xl" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-pink-300/50 rounded-bl-xl" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-pink-300/50 rounded-br-xl" />

              {/* Icon with glow */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full blur-xl opacity-40" />
                  <div className="relative bg-gradient-to-br from-pink-100 to-purple-100 p-5 rounded-full">
                    <svg className="w-14 h-14" fill="none" stroke="url(#celebration-gradient)" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <defs>
                        <linearGradient id="celebration-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ec4899" />
                          <stop offset="100%" stopColor="#a855f7" />
                        </linearGradient>
                      </defs>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <h3 className="font-serif text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 text-center mb-6 font-light">
                Celebración
              </h3>

              {/* Divider */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-pink-300" />
                <div className="w-1.5 h-1.5 bg-pink-400 rounded-full" />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-pink-300" />
              </div>

              <div className="space-y-4">
                <div className="flex items-start justify-center gap-3 group/item">
                  <div className="mt-1">
                    <svg className="w-6 h-6 text-pink-400 group-hover/item:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-serif text-lg">Toda la noche</p>
                </div>

                <div className="flex items-start justify-center gap-3 group/item">
                  <div className="mt-1">
                    <svg className="w-6 h-6 text-pink-400 group-hover/item:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-serif text-lg text-center">{receptionPlace}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dress Code */}
          <div className="group relative animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {/* Glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
            
            <div className="relative bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-purple-100/50 transition-all duration-500 hover:scale-105 hover:shadow-rose-200/50 min-h-96 flex flex-col">
              {/* Corner decorations */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-purple-300/50 rounded-tl-xl" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-purple-300/50 rounded-tr-xl" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-purple-300/50 rounded-bl-xl" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-purple-300/50 rounded-br-xl" />

              {/* Icon with glow */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-xl opacity-40" />
                  <div className="relative bg-gradient-to-br from-purple-100 to-pink-100 p-5 rounded-full">
                    <svg className="w-14 h-14 text-transparent bg-clip-text" fill="none" stroke="url(#dress-gradient)" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <defs>
                        <linearGradient id="dress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#a855f7" />
                          <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                      </defs>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              <h3 className="font-serif text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 text-center mb-6 font-light">
                Código de Vestimenta
              </h3>

              {/* Divider */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-300" />
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-300" />
              </div>

              <div className="space-y-4 text-center flex-grow flex items-center justify-center">
                <p className="text-gray-700 font-serif text-lg leading-relaxed">{dressCode}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-very-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.05); }
        }
        
        @keyframes pulse-very-slow-delayed {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.08); }
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
        
        .animate-pulse-very-slow {
          animation: pulse-very-slow 10s ease-in-out infinite;
        }
        
        .animate-pulse-very-slow-delayed {
          animation: pulse-very-slow-delayed 12s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }
      `}</style>
    </section>
  );
}
