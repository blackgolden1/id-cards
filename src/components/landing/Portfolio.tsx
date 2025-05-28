// components/landing/Projects.tsx
import {Network} from "@/components/landing/index";

interface Project {
    whspUrl: string;
    facebookUrl: string;
    emailUrl: string;
    instagramUrl: string;
    phone: string;
    youtubeUrl: string;
    companyLogo:string;
}


export default function Portfolio({whspUrl, facebookUrl, emailUrl, instagramUrl, phone, youtubeUrl,companyLogo}: Project) {
    return (
        <section className="px-36 mx-auto">
            <h2 className="text-4xl bg-primary text-white rounded-2xl py-3 px-6 w-fit mb-16 mx-auto">Portafolio de servicios </h2>
            <div className="grid grid-cols-3  ">
                    <Network name={'WhatsApp'} url={whspUrl} icon={'/network/whatsapp (2).png'}/>
                    <Network name={'Facebook'} url={whspUrl} icon={'/network/facebook.png'}/>
                    <Network name={'Correo'} url={whspUrl} icon={'/network/mensaje.png'}/>
                    <Network name={'Instagram'} url={whspUrl} icon={'/network/instagram.png'}/>
                    <Network name={'Telefono'} url={whspUrl} icon={'/network/whatsapp (2).png'}/>
                    <Network name={'Youtube'} url={whspUrl} icon={'/network/youtube (2).png'}/>
            </div>
            <img  className="mx-auto" src={companyLogo} alt="Edelco"/>
        </section>
    );
}
