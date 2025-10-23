
import { landingData } from "@/lib/dummyData";
import { Countdown, EventDetails, HeroSection, RSVP } from "@/components/landing";
import '../../../styles/globals.css'; // Import global styles

// type Props = {
//   params: Promise<{ id: string }>;
// };

// export function generateStaticParams() {
//   return Object.keys(landingData).map((id) => ({ id }));
// }

// export default async function LandingPage({ params }: Props) {
//   const { id } = await params;

//   const eventData = landingData[id];
type Props = {
  params: { id: string };
};

// ✅ Generar las rutas estáticas según las keys de landingData
export function generateStaticParams() {
  return Object.keys(landingData).map((id) => ({ id }));
}

// ✅ Componente de página estática
export default function LandingPage({ params }: Props) {
  const { id } = params;
  const eventData = landingData[id];
  if (!eventData) {
    return (
      <div className="text-center p-10">
        <h1 className="text-4xl font-bold text-red-600">
          Página no encontrada
        </h1>
        <p className="mt-4">Lo sentimos, el evento solicitado no existe.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen w-full overflow-x-hidden py-2 space-y-8 bg-white">
      <div className="w-screen">
        <HeroSection 
          groomName={eventData.groomName}
          brideName={eventData.brideName}
          eventDate={eventData.eventDate}
        />
      </div>
      <div className="w-screen">
        <Countdown eventDate={eventData.eventDate} />
      </div>
      <div className="w-screen">
        <EventDetails 
          eventLocation={eventData.eventLocation}
          eventTime={eventData.eventTime}
          dressCode={eventData.dressCode}
          ceremonyPlace={eventData.ceremonyPlace}
          receptionPlace={eventData.receptionPlace}
          message={eventData.message}
        />
      </div>
      <div className="w-screen">
        <RSVP 
          whspUrl={eventData.whspUrl}
          emailUrl={eventData.emailUrl}
          phone={eventData.phone}
        />
      </div>
   
    </main>
  );
}
