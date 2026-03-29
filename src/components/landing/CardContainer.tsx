// components/landing/CardContainer.tsx
import Card from './QRCode';

interface CardContainerProps {
    profilePhotoUrl: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    rol?: string;
    website?: string;
}

export default function CardContainer({
                                          profilePhotoUrl,
                                          firstName,
                                          lastName,
                                          phone,
                                          email,
                                          rol,
                                          website,
                                      }: CardContainerProps) {
    return (
        <section className="text-center my-2 pb-4 px-4 ">
            <h2 className="heading bg-primary text-white rounded-2xl py-3 px-6 w-fit mb-20 mx-auto">
                Descargar tarjeta virtual
            </h2>
            <div className="relative w-full max-w-xl mx-auto border-8 border-primary rounded-[4rem] bg-white overflow-visible pb-8">

                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-30">
                    <img
                        className="md:h-72 h-56 2xl:h-80 rounded-full object-cover shadow-lg"
                        src={profilePhotoUrl}
                        alt="Foto de perfil"
                    />
                </div>

                {/* Contenido principal */}
                <div className="md:pt-52 pt-32 md:px-6 px-4 text-center space-y-8 ">

                    <div className="pt-12 text-center bg-primary text-white rounded-3xl shadow-lg z-20 relative md:px-12 px-8 w-fit pb-2 mx-auto">
                        <p className="heading font-semibold mb-2 font-roboto">Tarjeta virtual</p>
                        <p className="heading">{firstName}</p>
                        <p className="heading">{lastName}</p>
                    </div>

                    <div className="w-fit flex items-center mx-auto">
                        <Card
                            firstName={firstName}
                            lastName={lastName}
                            phone={phone}
                            email={email}
                            rol={rol}
                            website={website}
                        />
                    </div>
                    <h2 className="md:text-2xl text-xl bg-primary text-white rounded-2xl py-3 px-6 w-fit mb-16 mx-auto">
                        Escanea codigo QR
                    </h2>
                </div>
            </div>


        </section>
    );
}
