import ParTenis from "../../assets/Tenis/Par deTenis.png";
import {Button} from "@/components/ui/button";

function OfertaEspecial() {
  return (
    <>
      <div className="flex  w-full flex-row justify-center items-center">
  <div className="flex justify-between">
   <img src={ParTenis} alt="Par de Tenis" className="w-[400px] px-10 mx-10 flex justify-between"/>
     
  </div>
        <div className=" w-[180px] ">
<h1 className="text-[#C92071] my-2">Oferta Especial</h1>
        <p className="font-bold text-3xl bottom-3 right-3 ">
         Air jordan Edição de colecionador
        </p>
          <p className="text-gray-400">Aurea mediocritas est via media inter nimium et parum. Sapientia est potestas.</p>
          <Button className=" w-[100px] bg-[#C92071] text-white hover:bg-[#C92071] hover:text-white rounded-full">Ver Ofertas</Button>
        </div>
      </div>
      
    </>
  );
}
export default OfertaEspecial;