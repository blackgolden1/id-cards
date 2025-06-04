import { landingData, sharedCompanyData } from '@/lib/dummyData';
import { notFound } from 'next/navigation';
import { Header, Company, Portfolio, CardContainer } from '@/components/landing';
// type Params = {
//     id: string;
// };
//
// type Props = {
//     params: Params;
// };

export default async function LandingPage(props: {params: Promise<{id: string}>;}) {
    const params = await props.params;
    const employeeData = landingData[params.id];


// export default function LandingPage({ params }: Props) {
//     const employeeData = landingData[params.id];

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
