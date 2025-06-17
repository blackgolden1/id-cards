// components/landing/Header.tsx
interface HeaderProps {
    name: string;
    profilePhotoUrl: string;
    company_description1: string;
}

export default function Header({ name, profilePhotoUrl, company_description1 }: HeaderProps) {
    return (
        <header className="text-center w-fit">
            <h1 className="text-primary font-black md:text-8xl 2xl:text-9xl text-5xl md:px-[10rem] px-2 mb-8">{name}</h1>
            <img
                src={profilePhotoUrl}
                alt={`Foto de ${name}`}
                className="mx-auto rounded-full h-[20rem] 2xl:h-[30rem] object-cover shadow-md md:mb-12 mb-6"
            />

        </header>
    );
}
