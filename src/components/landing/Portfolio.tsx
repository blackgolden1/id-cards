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
        <section className="md:px-36 px-8 mx-auto">
            <h2 className="heading bg-primary text-white rounded-2xl py-3 md:px-6 px-2 w-fit mx-auto text-center">Portafolio de servicios </h2>
            <div className="grid grid-cols-3  md:my-16 my-8">
                    <Network name={'WhatsApp'} url={whspUrl} icon={'/network/whatsapp (2).png'}/>
                    <Network name={'Facebook'} url={whspUrl} icon={'/network/facebook.png'}/>
                    <Network name={'Correo'} url={whspUrl} icon={'/network/mensaje.png'}/>
                    <Network name={'Instagram'} url={whspUrl} icon={'/network/instagram.png'}/>
                    <Network name={'Telefono'} url={whspUrl} icon={'/network/whatsapp (2).png'}/>
                    <Network name={'Youtube'} url={whspUrl} icon={'/network/youtube (2).png'}/>
            </div>
            <img  className="mx-auto" src={companyLogo} alt="Edelco" width={400}/>
        </section>
    );
}
