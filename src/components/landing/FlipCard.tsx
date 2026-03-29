"use client";

import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Employee } from "@/types/Employee";
import { Header, CardContainer } from "@/components/landing";
import { sharedCompanyData } from "@/lib/dummyData";

type Props = {
  employeeData: Employee;
};

export default function FlipCard({ employeeData }: Props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div key="front">
        <div className="flex justify-end w-full pr-[1rem]">
          <button onClick={handleClick} className="w-fit ">
            <img src="/cambiar.png" alt="" className="w-[2rem]"/>
          </button>
        </div>

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

      <div key="back">
        
        <div className="flex justify-end w-full pr-[1rem]">
          <button onClick={handleClick} className="w-fit ">
            <img src="/cambiar.png" alt="" className="w-[2rem]"/>
          </button>
        </div>
        <Header
          name={employeeData.fullName}
          profilePhotoUrl={employeeData.profilePhotoUrl}
          company_description1={sharedCompanyData.company_description1}
        />
        
      </div>
    </ReactCardFlip>
  );
}
