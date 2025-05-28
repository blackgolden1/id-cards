// lib/dummyData.ts

export const landingData: Record<string, {
    firstName: string;
    lastName: string;
    organization: string;
    phoneCard: string;
    email: string;
    website: string;

    fullName: string;
    profilePhotoUrl: string;
    whspUrl: string;
    facebookUrl: string;
    emailUrl: string;
    instagramUrl: string;
    phone: string;
    youtubeUrl: string;
    companyLogo:string;
    company_description1: string;
    company_description2: string;
    address: { city: string; description: string }[];
    image1: string;
    image2: string;
    image3: string;
    image4: string;
}> = {
    ana: {
        firstName: "Juan Carlos",
        lastName: "Torres Gomez",
        organization: "Edelco SAS",
        phoneCard: "+54 9 11 2345-6789",
        email: "ana.torres@example.com",
        website: "https://edelco.com.ar",

        fullName: "Juan Camilo Sanchez Rodriguez",
        profilePhotoUrl: "/ana.jpg",
        whspUrl: "https://wa.me/5491123456789",
        facebookUrl: "https://facebook.com/ana.torres",
        emailUrl: "mailto:ana.torres@example.com",
        instagramUrl: "https://instagram.com/ana.design",
        phone: "+54 9 11 2345-6789",
        youtubeUrl: "https://youtube.com/@anaDesign",
        companyLogo: "/logo.png",
        company_description1: "Edelco SAS con una trayectoria de 14 años es una compañía dedicada a la comercialización de materiales eléctricos para la industria, construcción, " +
            "institucional, subdistribución y el hogar, logrando una posición reconocida en el mercado a nivel nacional con productos de alta calidad, precios competitivos y un excelente" +
            " servicio al cliente.",
        company_description2: "Edelco SAS es una compañía que garantiza respaldo, seriedad y confianza\n" +
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
                description: "Centro Logistico Stock Caribe Kilómetro 1 Vía la\n" +
                    "Cordialidad\n" +
                    "Bodega F25 Telefono: 317 303 3992 – 310 296 8850. " +
                    "Email: servicioalcliente@edelco.co",
            },
        ],
        image1: "/image1.jpg",
        image2: "/image2.jpg",
        image3: "/image3.jpg",
        image4: "/image4.jpg",
    },

    carlos: {
        firstName: "Juan Carlos",
        lastName: "Torres Gomez",
        organization: "Edelco SAS",
        phoneCard: "+54 9 11 2345-6789",
        email: "ana.torres@example.com",
        website: "https://edelco.com.ar",

        fullName: "Carlos Gómez",
        profilePhotoUrl: "/carlos.jpg",
        whspUrl: "https://wa.me/5491167891234",
        facebookUrl: "https://facebook.com/carlos.gomez.dev",
        emailUrl: "mailto:carlos.gomez@example.com",
        instagramUrl: "https://instagram.com/carlos_code",
        phone: "+54 9 11 6789-1234",
        youtubeUrl: "https://youtube.com/@gomezTech",
        companyLogo: "/carlos.jpg",
        company_description1: "Consultor digital especializado en soluciones tecnológicas para pymes.",
        company_description2: "Ofrezco desarrollo web, automatización y formación técnica.",
        address: [
            {
                city: "Córdoba",
                description: "Oficina en Nueva Córdoba, disponible para reuniones agendadas.",
            },
        ],
        image1: "/images/carlos_1.jpg",
        image2: "/images/carlos_2.jpg",
        image3: "/images/carlos_3.jpg",
        image4: "/images/carlos_4.jpg",
    },
};
