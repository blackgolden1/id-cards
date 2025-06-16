import landingData, { sharedCompanyData } from '@/lib/dummyData';
import { Employee } from '@/types/Employee';
import { Header, Company, Portfolio, CardContainer } from '@/components/landing';
// export async function generateStaticParams() {
//     return Object.keys(landingData).map(id => ({ id }));
// }
// export default async function LandingPage(props: { params: Promise<{ id: string }> }) {
//     const { id } = await props.params;
//     const employeeData = landingData[id];


// type Props = {
//   params: {
//     id: string;
//   };
// };

// export function generateStaticParams() {
//   return Object.keys(landingData).map((id) => ({
//     id,
//   }));
// }

// export default function LandingPage({ params }: Props) {
//   const employeeData: Employee | undefined = landingData[params.id];

type Props = {
  params: Promise<{ id: string }>; // 👈 tipo obligatorio para evitar error de build
};

export function generateStaticParams() {
  return Object.keys(landingData).map((id) => ({ id }));
}

export default async function LandingPage({ params }: Props) {
  const { id } = await params; // 👈 obligatorio para evitar el error del runtime

  const employeeData: Employee | undefined = landingData[id];
 if (!employeeData) {
  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold text-red-600">Página no encontrada</h1>
      <p className="mt-4">Lo sentimos, la tarjeta solicitada no existe.</p>
    </div>
  );
}

    return (
        <main className="min-h-screen w-full overflow-x-hidden py-6 space-y-8 bg-white">
            <div className="w-screen">
                <CardContainer
                    profilePhotoUrl={employeeData.profilePhotoUrl}
                    firstName={employeeData.firstName}
                    lastName={employeeData.lastName}
                    phone={employeeData.phoneCard}
                    email={employeeData.email}
                    rol={employeeData.rol}
                    website={employeeData.website}
                />
            </div>
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
           
        </main>
    );
}
