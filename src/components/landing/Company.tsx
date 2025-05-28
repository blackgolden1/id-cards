// components/landing/About.tsx
interface AboutProps {
    company_description2: string;
    address: Address[];
    image1: string;
    image2: string;
    image3: string;
    image4: string;
}

interface Address {
    city: string;
    description: string;
}

export default function Company({address, company_description2, image1, image2, image3, image4}: AboutProps) {
    return (
        <section>
            <div className="px-24 bg-gray-100 pt-8 pb-20">
                <h2 className="text-4xl font-semibold mb-12 mx-auto font-roboto">Politica Empresarial</h2>
                <p className="text-black text-justify text-3xl ">{company_description2}</p>
            </div>
            <div className="bg-primary text-white text-center mb-4 pt-20">
                <h3 className="font-semibold mb-12 text-4xl font-roboto"> Informacion de Contacto</h3>
                <div>
                    <ul className="w-2/3 mx-auto text-3xl">
                        {address.map((loc, index) => (
                            <li key={index} className="mb-12">
                                <p className="text-yellow-400 font-semibold font-roboto"> {loc.city}</p>
                                <p>  {loc.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex h-[25rem] gap-1 bg-white pt-1">
                    <img className="w-1/4" src="/image1.jpg" alt=""/>
                    <img className="w-1/4" src="/image2.jpg" alt=""/>
                    <img className="w-1/4" src="/image3.jpg" alt=""/>
                    <img className="w-1/4" src="/image4.jpg" alt=""/>
                </div>
            </div>
        </section>
    );
}
