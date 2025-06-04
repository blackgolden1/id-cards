import {landingData} from '@/lib/dummyData';
import {notFound} from 'next/navigation';
import {Header, Company, Portfolio, CardContainer} from '@/components/landing';
import {sharedCompanyData} from '@/lib/dummyData';

interface Props {
    params: {
        id: string;
    };
}
export default function LandingPage({ params }: Props) {
    const employeeData = landingData[params.id];

    if (!employeeData) return notFound();

    return (
        <main className="min-h-screen w-full overflow-x-hidden py-6 space-y-8">
            <div className="w-screen">
                <Header
                    name={employeeData.fullName}
                    profilePhotoUrl={employeeData.profilePhotoUrl}
                    company_description1={sharedCompanyData.company_description1}
                />
            </div>
            <div className="w-screen">
                <Portfolio
                    whspUrl={employeeData.whspUrl}
                    facebookUrl={employeeData.facebookUrl}
                    emailUrl={employeeData.emailUrl}
                    instagramUrl={employeeData.instagramUrl}
                    phone={employeeData.phone}
                    youtubeUrl={employeeData.youtubeUrl}
                    companyLogo={sharedCompanyData.companyLogo}
                />
            </div>
            <div className="w-screen">
                <Company
                    company_description2={sharedCompanyData.company_description2}
                    address={sharedCompanyData.address}
                    image1={sharedCompanyData.image1}
                    image2={sharedCompanyData.image2}
                    image3={sharedCompanyData.image3}
                    image4={sharedCompanyData.image4}
                />
            </div>
            <div className="w-screen">
                <CardContainer
                    profilePhotoUrl={employeeData.profilePhotoUrl}
                    firstName={employeeData.firstName}
                    lastName={employeeData.lastName}
                    phone={employeeData.phoneCard}
                    email={employeeData.email}
                    organization={employeeData.organization}
                    website={employeeData.website}
                />
            </div>
        </main>
    );
}
