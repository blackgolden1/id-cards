// app/landing/[id]/page.tsx

import {landingData} from '@/lib/dummyData';
import {notFound} from 'next/navigation';
import {Header, Company, Portfolio, CardContainer} from '@/components/landing';

interface Props {
    params: { id: string };
}

export default function LandingPage({params}: Props) {
    const data = landingData[params.id];

    if (!data) return notFound();

    return (
        <main className="w-screen h-screen py-6 space-y-8">
            <Header name={data.fullName} profilePhotoUrl={data.profilePhotoUrl}
                    company_description1={data.company_description1}/>
            <Portfolio whspUrl={data.whspUrl}
                       facebookUrl={data.facebookUrl}
                       emailUrl={data.emailUrl}
                       instagramUrl={data.instagramUrl}
                       phone={data.phone} youtubeUrl={data.youtubeUrl}
                       companyLogo={data.companyLogo}/>
            <Company company_description2={data.company_description2} address={data.address} image1={data.image1}
                     image2={data.image2} image3={data.image3} image4={data.image4}/>
            <CardContainer
                profilePhotoUrl={data.profilePhotoUrl}
                firstName={data.firstName}
                lastName={data.lastName}
                phone={data.phoneCard}
                email={data.email}
                organization={data.organization}
                website={data.website}
            />

        </main>
    );
}
