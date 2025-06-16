// lib/dummyData.ts
import { Employee } from "@/types/Employee";

export const sharedCompanyData = {
  companyLogo: "/logo.png",
  company_description1:
    "Edelco SAS con una trayectoria de 14 años es una compañía dedicada a la comercialización de materiales eléctricos para la industria, construcción, " +
    "institucional, subdistribución y el hogar, logrando una posición reconocida en el mercado a nivel nacional con productos de alta calidad, precios competitivos y un excelente" +
    " servicio al cliente.",
  company_description2:
    "Edelco SAS es una compañía que garantiza respaldo, seriedad y confianza\n" +
    "a sus clientes según el cumplimiento de la normatividad vigente; el mayor\n" +
    "interés es lograr una mejora continua en la gestión comercial y logística\n" +
    "caracterizándose por un servicio oportuno.\n" +
    "Edelco SAS está altamente comprometido con el crecimiento económico del\n" +
    "país y de la región, contribuye al desarrollo cultural y responsabilidad social\n" +
    "enfocada en la generación de empleo y el máximo aprovechamiento de los\n" +
    "recursos naturales y medio ambiente.",
  address: [
    {
      city: "Ibagué",
      description: "Calle 60 # 4-48 Zona Industrial - PBX:(608) 277 22 82",
    },
    {
      city: "Bogotá",
      description: "Calle 68 N 17-45 Barrios Unidos - PBX:(601) 755 26 00.",
    },
    {
      city: "Girardot",
      description: "Calle 22 # 8A – 70 B/Santander - PBX:(601) 888 49 03",
    },
    {
      city: "Barranquilla",
      description:
        "Centro Logistico Stock Caribe Kilómetro 1 Vía la\n" +
        "Cordialidad\n" +
        "Bodega F25 Telefono: 317 303 3992 – 310 296 8850. " +
        "Email: servicioalcliente@edelco.co",
    },
  ],
  image1: "/image1.jpg",
  image2: "/image2.jpg",
  image3: "/image3.jpg",
  image4: "/image4.jpg",
};
const landingData: Record<string, Employee> = {
  "claudia-paola-bonilla-ordonez": {
    firstName: "Claudia Paola",
    lastName: "Bonilla Ordoñezz",
    rol: "Asesora Comercial Externa Junior Sede IBG",
    phoneCard: "3173643058",
    email: "asesor6@edelco.co",
    website: "https://edelco.co",

    fullName: "Claudia Paola Bonilla Ordoñez",
    profilePhotoUrl: "/Claudia Bonilla.jpg",
    whspUrl: "https://wa.me/573173643058",
    facebookUrl: "https://www.facebook.com/EDELCO.SAS/",
    emailUrl: "mailto:asesor6@edelco.co",
    instagramUrl: "https://www.instagram.com/edelcosas",
    phone: "tel:+573173643058",
    youtubeUrl: "https://www.youtube.com/channel/UCh3N_GIgYNX5Qix4EQ6ZjKg",
  },

  "geraldine-galindo-bedoya": {
    firstName: "Geraldine",
    lastName: "Galindo Bedoya",
    rol: "Asesora Comercial Externa Semi Senior Sede IBG",
    phoneCard: "3162676764",
    email: "asesor3@edelco.co",
    website: "https://edelco.co",

    fullName: "Geraldine Galindo Bedoya",
    profilePhotoUrl: "/Geraldine Galindo.jpg",
    whspUrl: "https://wa.me/573162676764",
    facebookUrl: "https://www.facebook.com/EDELCO.SAS/",
    emailUrl: "mailto:asesor3@edelco.co",
    instagramUrl: "https://www.instagram.com/edelcosas",
    phone: "tel:+573162676764",
    youtubeUrl: "https://www.youtube.com/channel/UCh3N_GIgYNX5Qix4EQ6ZjKg",
  },
  "sandra-lorena-sanchez-bonilla": {
    firstName: "Sandra Lorena",
    lastName: "Sanchez Bonilla",
    rol: "Coordinadora Administrativa y Comercial Sede BAQ",
    phoneCard: "3164999610",
    email: "ccomercialbaq@edelco.co",
    website: "https://edelco.co",

    fullName: "Sandra Lorena Sanchez Bonilla",
    profilePhotoUrl: "/Lorena Sanchez.jpg",
    whspUrl: "https://wa.me/573164999610",
    facebookUrl: "https://www.facebook.com/EDELCO.SAS/",
    emailUrl: "mailto:ccomercialbaq@edelco.co",
    instagramUrl: "https://www.instagram.com/edelcosas",
    phone: "tel:+573164999610",
    youtubeUrl: "https://www.youtube.com/channel/UCh3N_GIgYNX5Qix4EQ6ZjKg",
  },
  "daniel-alberto-perez-garzon": {
    firstName: "Daniel Alberto",
    lastName: "Pérez Garzón",
    rol: "Ejecutivo Gestión Comercial Zona Norte - Sede BAQ",
    phoneCard: "3173033992",
    email: "egestioncomercialbaq@edelco.co",
    website: "https://edelco.co",

    fullName: "Daniel Alberto Pérez Garzón",
    profilePhotoUrl: "/Daniel Perez.jpg",
    whspUrl: "https://wa.me/573173033992",
    facebookUrl: "https://www.facebook.com/EDELCO.SAS/",
    emailUrl: "mailto:egestioncomercialbaq@edelco.co",
    instagramUrl: "https://www.instagram.com/edelcosas",
    phone: "tel:+573173033992",
    youtubeUrl: "https://www.youtube.com/channel/UCh3N_GIgYNX5Qix4EQ6ZjKg",
  },
  "julieth-katherine-cubillos-arevalo": {
    firstName: "Julieth Katherine",
    lastName: "Cubillos Arévalo",
    rol: "Asesora Comercial Junior Sede GDT",
    phoneCard: "3175754240",
    email: "asesor9@edelco.co",
    website: "https://edelco.co",

    fullName: "Julieth Katherine Cubillos Arévalo",
    profilePhotoUrl: "/Julieth Cubillos.jpg",
    whspUrl: "https://wa.me/573175754240",
    facebookUrl: "https://www.facebook.com/EDELCO.SAS/",
    emailUrl: "mailto:asesor9@edelco.co",
    instagramUrl: "https://www.instagram.com/edelcosas",
    phone: "tel:+573175754240",
    youtubeUrl: "https://www.youtube.com/channel/UCh3N_GIgYNX5Qix4EQ6ZjKg",
  },
};
export default landingData;
