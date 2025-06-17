// components/landing/About.tsx
interface AboutProps {
  company_description2: string;
  address: Address[];
}

interface Address {
  city: string;
  description: string;
}

export default function Company({ address, company_description2 }: AboutProps) {
  return (
    <section>
      <div className="md:px-24 px-4 bg-gray-100 pt-8 pb-20">
        <h2 className="heading font-semibold mb-12 text-center font-roboto w-full text-black">
          Politica Empresarial
        </h2>
        <p className="text-black text-justify paragraph px-2 md:px-0">
          {company_description2}
        </p>
      </div>
      <div className="bg-primary text-white text-center mb-4 pt-20">
        <h3 className="font-semibold mb-12 heading font-roboto">
          {" "}
          Informacion de Contacto
        </h3>
        <div>
          <ul className="w-2/3 mx-auto paragraph">
            {address.map((loc, index) => (
              <li key={index} className="mb-12">
                <p className="text-yellow-400 font-semibold font-roboto">
                  {" "}
                  {loc.city}
                </p>
                <p> {loc.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex md:h-[25rem] gap-1 bg-white pt-1 h-[10rem] 2xl:h-[43rem]">
          <img className="w-1/4" src="/image1.jpg" alt="" />
          <img className="w-1/4" src="/image2.jpg" alt="" />
          <img className="w-1/4" src="/image3.jpg" alt="" />
          <img className="w-1/4" src="/image4.jpg" alt="" />
        </div>
      </div>
      <a href="https://blackgolden.co/" target="_blank" className="w-fit">
    
        <p className="text-center mx-auto "> &copy; Black Golden 2025</p>
      </a>
    </section>
  );
}
