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
    // {
    //   city: "Barranquilla",
    //   description:
    //     "Centro Logistico Stock Caribe Kilómetro 1 Vía la\n" +
    //     "Cordialidad\n" +
    //     "Bodega F25 Telefono: 317 303 3992 – 310 296 8850. " +
    //     "Email: servicioalcliente@edelco.co",
    // },
  ],
  image1: "/image1.jpg",
  image2: "/image2.jpg",
  image3: "/image3.jpg",
  image4: "/image4.jpg",
};
const landingData: Record<string, Employee> = {


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

    "freddy-castaneda-segura": {
    firstName: "Freddy",
    lastName: "Castañeda Segura",
    rol: "Gerente general",
    phoneCard: "3172929315",
    email: "gerencia@edelco.co",
    website: "https://edelco.co",

    fullName: "Freddy Castañeda Segura",
    profilePhotoUrl: "/Freddy Castaneda.jpg",
    whspUrl: "https://wa.me/573172929315",
    facebookUrl: "https://www.facebook.com/EDELCO.SAS/",
    emailUrl: "mailto:gerencia@edelco.co",
    instagramUrl: "https://www.instagram.com/edelcosas",
    phone: "tel:+573172929315",
    youtubeUrl: "https://www.youtube.com/channel/UCh3N_GIgYNX5Qix4EQ6ZjKg",
  },
    "orlando-vesga-ortiz": {
    firstName: "Orlando",
    lastName: "Vesga Ortiz",
    rol: "Asesor Comercial Sede BAQ",
    phoneCard: "3102968850",
    email: "asesor11@edelco.co",
    website: "https://edelco.co",

    fullName: "Orlando Vesga Ortiz",
    profilePhotoUrl: "/Orlando Vesga.jpg",
    whspUrl: "https://wa.me/573102968850",
    facebookUrl: "https://www.facebook.com/EDELCO.SAS/",
    emailUrl: "mailto:asesor11@edelco.co",
    instagramUrl: "https://www.instagram.com/edelcosas",
    phone: "tel:+573102968850",
    youtubeUrl: "https://www.youtube.com/channel/UCh3N_GIgYNX5Qix4EQ6ZjKg",
  },

    "leidy-florez-rodriguez": {
    firstName: "Leidy",
    lastName: "Flórez Rodríguez",
    rol: "Asistente Comercial Sede IBG",
    phoneCard: "3175705681",
    email: "asistentecomercialibague@edelco.co",
    website: "https://edelco.co",

    fullName: "Leidy Flórez Rodríguez",
    profilePhotoUrl: "/Leidy Florez Rodriguez.jpg",
    whspUrl: "https://wa.me/573175705681",
    facebookUrl: "https://www.facebook.com/EDELCO.SAS/",
    emailUrl: "mailto:asistentecomercialibague@edelco.co",
    instagramUrl: "https://www.instagram.com/edelcosas",
    phone: "tel:+573175705681",
    youtubeUrl: "https://www.youtube.com/channel/UCh3N_GIgYNX5Qix4EQ6ZjKg",
  },
    "elizabeth-nunez-guio": {
    firstName: "Elizabeth",
    lastName: "Núñez Guio",
    rol: "Coordinadora Comercial y Administrativa Sede BTA",
    phoneCard: "3163909501",
    email: "ccomercialbogota@edelco.co",
    website: "https://edelco.co",

    fullName: "Elizabeth Núñez Guio",
    profilePhotoUrl: "/Elizabeth Nunez Guio.jpg",
    whspUrl: "https://wa.me/573163909501",
    facebookUrl: "https://www.facebook.com/EDELCO.SAS/",
    emailUrl: "mailto:ccomercialbogota@edelco.co",
    instagramUrl: "https://www.instagram.com/edelcosas",
    phone: "tel:+573163909501",
    youtubeUrl: "https://www.youtube.com/channel/UCh3N_GIgYNX5Qix4EQ6ZjKg",
  },
    "josaneth-rojas-lopez": {
    firstName: "Janeth",
    lastName: "Rojas López",
    rol: "Asistente Administrativa Sede GDT",
    phoneCard: "6018884903",
    email: "asistentecomercialgirardot@edelco.co",
    website: "https://edelco.co",

    fullName: "Janeth Rojas López",
    profilePhotoUrl: "/Janeth Rojas Lopez.jpg",
    whspUrl: "https://edelco.co",
    facebookUrl: "https://www.facebook.com/EDELCO.SAS/",
    emailUrl: "mailto:asistentecomercialgirardot@edelco.co",
    instagramUrl: "https://www.instagram.com/edelcosas",
    phone: "tel:6018884903",
    youtubeUrl: "https://www.youtube.com/channel/UCh3N_GIgYNX5Qix4EQ6ZjKg",
  },

      "arnulfo-gonzalez-londono": {  
    firstName: "Arnulfo",
    lastName: "González Londoño",
    rol: "Asesor Construcción Semi Senior",
    phoneCard: "3183546690",
    email: "asesorconstruccion@edelco.co",
    website: "https://edelco.co",

  fullName: "Arnulfo González Londoño",
    profilePhotoUrl: "/Arnulfo Gonzales Londono.jpg",
    whspUrl: "https://wa.me/573183546690",
    facebookUrl: "https://www.facebook.com/EDELCO.SAS/",
    emailUrl: "mailto:asesorconstruccion@edelco.co",
    instagramUrl: "https://www.instagram.com/edelcosas",
    phone: "tel:+573183546690",
    youtubeUrl: "https://www.youtube.com/channel/UCh3N_GIgYNX5Qix4EQ6ZjKg",
  },
     "gustavo-adolfo-ortiz-villa": {
    firstName: "Gustavo Adolfo",
    lastName: "Ortiz Villa",
    rol: "Asesor Comercial Externo Junior Sede IBG",
    phoneCard: "3173643058",
    email: "asesor6@edelco.co",
    website: "https://edelco.co",

  fullName: "Gustavo Adolfo Ortiz Villa",
    profilePhotoUrl: "/Gustavo Adolfo Ortiz.jpg",
    whspUrl: "https://wa.me/573173643058",
    facebookUrl: "https://www.facebook.com/EDELCO.SAS/",
    emailUrl: "mailto:asesor6@edelco.co",
    instagramUrl: "https://www.instagram.com/edelcosas",
    phone: "tel:+573173643058",
    youtubeUrl: "https://www.youtube.com/channel/UCh3N_GIgYNX5Qix4EQ6ZjKg",
  },
      "eduardo-bocanegra-caviedes": {
    firstName: "Eduardo",
    lastName: "Bocanegra Caviedes",
    rol: "Asesor Comercial Junior Sede GDT",
    phoneCard: "3175754240",
    email: "asesor9@edelco.co",
    website: "https://edelco.co",

  fullName: "Eduardo Bocanegra Caviedes",
    profilePhotoUrl: "/Eduardo Bocanegra.jpg",
    whspUrl: "https://wa.me/573175754240",
    facebookUrl: "https://www.facebook.com/EDELCO.SAS/",
    emailUrl: "mailto:asesor9@edelco.co",
    instagramUrl: "https://www.instagram.com/edelcosas",
    phone: "tel:+573175754240",
    youtubeUrl: "https://www.youtube.com/channel/UCh3N_GIgYNX5Qix4EQ6ZjKg",
  },
      "john-edison-gomez-ochoa": {
    firstName: "John Edison",
    lastName: "Gomez Ochoa",
    rol: "Asesor Comercial Externo Sede IBG",
    phoneCard: "3162676764",
    email: "asesor3@edelco.co",
    website: "https://edelco.co",

  fullName: "John Edison Gomez Ochoa",
    profilePhotoUrl: "/John Edison Gomez.jpg",
    whspUrl: "https://wa.me/573162676764",
    facebookUrl: "https://www.facebook.com/EDELCO.SAS/",
    emailUrl: "mailto:asesor3@edelco.co",
    instagramUrl: "https://www.instagram.com/edelcosas",
    phone: "tel:+573162676764",
    youtubeUrl: "https://www.youtube.com/channel/UCh3N_GIgYNX5Qix4EQ6ZjKg",
  },
};
export default landingData;
