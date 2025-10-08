import { Employee } from "@/types/Employee";
import { QRCodeSVG } from "qrcode.react";
type Props = {
  employeeData: Employee;
  id: string;
};


export default function QRCodeRedirect({  id }: Props) {
  

    return (
    <div>
       <h2 className="heading bg-primary text-white rounded-2xl py-1 px-6 w-fit mb-8 mx-auto">
                Conoce a tu asesor
            </h2>
      <div className="corner-border flex justify-around items-center w-fit h-fit mx-auto rounded-md p-8 mb-4" style={{position: 'relative'}}>
       
        <span className="corner tl"></span>
        <span className="corner tr"></span>
        <span className="corner bl"></span>
        <span className="corner br"></span>
        <QRCodeSVG value={`https://tarjetas.edelco.co/landing/${id}`} size={200} level="H"/>
      </div>
      <a href="https://blackgolden.co/" target="_blank" className="w-fit">
        <p className="text-center mx-auto "> &copy; Black Golden 2025</p>
      </a>
    </div>
  );
}
