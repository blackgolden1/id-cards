"use client";

interface RSVPProps {
  whspUrl: string;
  emailUrl: string;
  phone: string;
}

export default function RSVP({ whspUrl, emailUrl, phone }: RSVPProps) {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-white via-purple-50/30 to-pink-50/50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl animate-pulse-slow-delayed" />
      </div>

      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="rsvp-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <circle cx="40" cy="40" r="1" fill="#a855f7" />
            <path d="M40,35 Q43,38 40,41 Q37,38 40,35" fill="none" stroke="#a855f7" strokeWidth="0.3" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#rsvp-pattern)" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-purple-300 to-purple-400" />
            <svg className="w-6 h-6 text-purple-400 animate-pulse-gentle" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <div className="h-px w-24 bg-gradient-to-l from-transparent via-purple-300 to-purple-400" />
          </div>

          <h2 className="font-serif text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 mb-6 font-light tracking-wide">
            Confirma tu Asistencia
          </h2>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-purple-300" />
            <div className="text-purple-300">✦</div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-purple-300" />
          </div>

          <p className="font-serif text-xl text-gray-600 italic font-light tracking-wide max-w-2xl mx-auto">
            Tu presencia es el mejor regalo que podemos recibir
          </p>
        </div>

        {/* Main RSVP Card */}
        <div className="group relative max-w-3xl mx-auto">
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-purple-400/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
          
          <div className="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-10 md:p-14 border border-purple-100/50">
            {/* Corner ornaments */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-purple-300/50 rounded-tl-2xl" />
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-purple-300/50 rounded-tr-2xl" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-purple-300/50 rounded-bl-2xl" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-purple-300/50 rounded-br-2xl" />

            {/* Deadline message */}
            <div className="mb-10">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200/60 rounded-full px-6 py-3 shadow-md">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="font-serif text-lg text-gray-700 font-light">
                  Confirma antes del <span className="font-normal text-purple-600">1 de Diciembre</span>
                </p>
              </div>
            </div>

            {/* Contact buttons */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {/* WhatsApp Button */}
              <a
                href={whspUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn relative"
              >
                {/* Button glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-lime-400 to-emerald-400 rounded-full blur-lg opacity-0 group-hover/btn:opacity-50 transition-all duration-500" />
                
                <div className="relative flex items-center justify-center gap-3 bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-600 hover:to-emerald-600 text-white rounded-full px-8 py-5 shadow-xl transition-all duration-500 group-hover/btn:scale-105 group-hover/btn:shadow-2xl">
                  <svg className="w-7 h-7 transition-transform group-hover/btn:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span className="font-serif text-lg md:text-xl font-light tracking-wide">WhatsApp</span>
                  
                  {/* Sparkle effect */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full opacity-0 group-hover/btn:opacity-100 animate-ping" />
                </div>
              </a>

              {/* Email Button */}
              <a
                href={emailUrl}
                className="group/btn relative"
              >
                {/* Button glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-lg opacity-0 group-hover/btn:opacity-50 transition-all duration-500" />
                
                <div className="relative flex items-center justify-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full px-8 py-5 shadow-xl transition-all duration-500 group-hover/btn:scale-105 group-hover/btn:shadow-2xl">
                  <svg className="w-7 h-7 transition-transform group-hover/btn:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-serif text-lg md:text-xl font-light tracking-wide">Email</span>
                  
                  {/* Sparkle effect */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full opacity-0 group-hover/btn:opacity-100 animate-ping" />
                </div>
              </a>
            </div>

            {/* Phone contact */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-50/50 to-pink-50/50 border border-purple-100 rounded-full px-6 py-4 shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-white p-2 rounded-full shadow-sm">
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <p className="font-serif text-gray-700 text-base md:text-lg font-light">
                  O llámanos al: <span className="font-normal text-purple-600">{phone}</span>
                </p>
              </div>
            </div>

            {/* Bottom ornament */}
            <div className="flex items-center justify-center gap-6 pt-6 border-t border-purple-100/50">
              <div className="relative">
                <div className="h-px w-20 bg-gradient-to-r from-transparent via-purple-300 to-pink-300" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-lg opacity-30" />
                <svg className="relative w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>

              <div className="relative">
                <div className="h-px w-20 bg-gradient-to-l from-transparent via-pink-300 to-purple-300" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                </div>
              </div>
            </div>

            {/* Thank you message */}
            <p className="mt-6 font-serif text-gray-500 italic text-sm tracking-wide">
              ¡Esperamos verte allí!
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.05); }
        }
        
        @keyframes pulse-slow-delayed {
          0%, 100% { opacity: 0.12; transform: scale(1); }
          50% { opacity: 0.22; transform: scale(1.08); }
        }
        
        @keyframes pulse-gentle {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.85; }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 10s ease-in-out infinite;
        }
        
        .animate-pulse-slow-delayed {
          animation: pulse-slow-delayed 12s ease-in-out infinite;
        }
        
        .animate-pulse-gentle {
          animation: pulse-gentle 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
