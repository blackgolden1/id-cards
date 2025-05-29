// components/landing/Header.tsx
interface HeaderProps {
    name: string;
    profilePhotoUrl: string;
    company_description1: string;
}

export default function Header({ name, profilePhotoUrl, company_description1 }: HeaderProps) {
    return (
        <header className="text-center w-fit">
            <h1 className="text-primary font-black md:text-8xl text-5xl md:px-[10rem] px-2 mb-8">{name}</h1>
            <img
                src={profilePhotoUrl}
                alt={`Foto de ${name}`}
                className="mx-auto rounded-full h-[20rem] object-cover shadow-md mb-6"
            />
            <p className="paragraph bg-primary text-white w-screen py-6 md:px-8 px-4 ">{company_description1}</p>

        </header>
    );
}
