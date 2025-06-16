import { Network } from "@/components/landing/index";

interface Project {
  whspUrl: string;
  facebookUrl: string;
  emailUrl: string;
  instagramUrl: string;
  phone: string;
  youtubeUrl: string;
  companyLogo: string;
}

export default function Portfolio({
  whspUrl,
  facebookUrl,
  emailUrl,
  instagramUrl,
  phone,
  youtubeUrl,
  companyLogo,
}: Project) {
  const networks = [
    { name: "WhatsApp", url: whspUrl, icon: "/network/whatsapp (2).png" },
    { name: "Facebook", url: facebookUrl, icon: "/network/facebook.png" },
    { name: "Correo", url: emailUrl, icon: "/network/mensaje.png" },
    { name: "Instagram", url: instagramUrl, icon: "/network/instagram.png" },
    { name: "Teléfono", url: phone, icon: "/network/llamada-telefonica.png" },
    { name: "YouTube", url: youtubeUrl, icon: "/network/youtube (2).png" },
  ];

  return (
    <section className="md:px-36 px-8 mx-auto">
      <a href="/brochure.pdf" target="_blank" rel="noopener noreferrer" className="w-fit">
        <h2 className="heading bg-primary text-white rounded-2xl py-3 md:px-6 px-2 w-fit mx-auto text-center">
          Portafolio de servicios
        </h2>
      </a>
      <div className="grid grid-cols-3 md:my-16 my-8 gap-12 w-full mx-auto place-items-center">
        {networks.map((network) => (
          <Network
            key={network.name}
            name={network.name}
            url={network.url}
            icon={network.icon}
          />
        ))}
      </div>

      <img
        className="mx-auto"
        src={companyLogo}
        alt="Logo de la empresa"
        width={400}
      />
    </section>
  );
}
