// components/landing/Header.tsx
interface HeaderProps {
    name: string;
    profilePhotoUrl: string;
    company_description1: string;
}

export default function Header({ name, profilePhotoUrl, company_description1 }: HeaderProps) {
    return (
        <header className="text-center">
            <h1 className="text-primary font-black text-8xl px-[10rem] mb-8">{name}</h1>
            <img
                src={profilePhotoUrl}
                alt={`Foto de ${name}`}
                className="mx-auto rounded-full h-[20rem] object-cover shadow-md mb-6"
            />
            <p className="text-3xl bg-primary text-white w-screen py-6 px-8">{company_description1}</p>

        </header>
    );
}
