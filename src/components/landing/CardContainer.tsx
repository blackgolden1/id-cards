// components/landing/CardContainer.tsx
import Card from './QRCode';

interface CardContainerProps {
    profilePhotoUrl: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    organization?: string;
    website?: string;
}

export default function CardContainer({
                                          profilePhotoUrl,
                                          firstName,
                                          lastName,
                                          phone,
                                          email,
                                          organization,
                                          website,
                                      }: CardContainerProps) {
    return (
        <section className="text-center my-8 pb-12 px-4">
            <h2 className="text-3xl bg-primary text-white rounded-2xl py-3 px-6 w-fit mb-20 mx-auto">
                Descargar tarjeta virtual
            </h2>
            <div className="relative w-full max-w-xl mx-auto border-8 border-primary rounded-[4rem] bg-white overflow-visible pb-8">

                {/* Imagen superpuesta */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-30">
                    <img
                        className="h-72 rounded-full object-cover shadow-lg"
                        src={profilePhotoUrl}
                        alt="Foto de perfil"
                    />
                </div>

                {/* Contenido principal */}
                <div className="pt-52 px-6 text-center space-y-8 ">

                    <div className="pt-12 text-center bg-primary text-white rounded-3xl shadow-lg z-20 relative px-6 w-3/5 pb-2 mx-auto">
                        <p className="text-4xl font-semibold mb-2 font-roboto">Tarjeta virtual</p>
                        <p className="text-4xl">{firstName}</p>
                        <p className="text-4xl">{lastName}</p>
                    </div>

                    <div className="mx-auto w-fit">
                        <Card
                            firstName={firstName}
                            lastName={lastName}
                            phone={phone}
                            email={email}
                            organization={organization}
                            website={website}
                        />
                    </div>
                    <h2 className="text-2xl bg-primary text-white rounded-2xl py-3 px-6 w-fit mb-16 mx-auto">
                        Escanea codigo QR
                    </h2>
                </div>
            </div>


        </section>
    );
}
