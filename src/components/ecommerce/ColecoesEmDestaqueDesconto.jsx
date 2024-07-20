import { Button } from "@/components/ui/button";
import Camisa from "../../assets/CamisaStarWars.png";
import Tenis from "../../assets/Tenis/TenisTipo3.png";
import Fones from "../../assets/Fones.png";

function ColecoesEmDestaqueDesconto() {
  return (
    <>
      <h1 className="font-bold ml-4">Coleções em Destaque</h1>
      <div className="flex justify-center">
        <div className="flex">
          <div className=" rounded-md w-[235px] h-[185px] bg-[#D8E3F2] flex space-x-4 gap-4 mx-3 py-3 px-3">
            <div className="top-3 left-3 bg-[#E7FF86] w-[100px] h-7 px-2 py-1 rounded-full font-bold">
              30% OFF
              <h1 className=" top-3 left-3 flex font-bold text-xl w-[100px] text-balance tracking-wide">
                Novo supremo Drop
              </h1>
              <Button className=" w-[100px] h-7 px-2 py-1 bg-white text-[#C92071] rounded-full hover:bg-white hover: text-[#C92071] my-3">
                Comprar
              </Button>
            </div>
            <img src={Camisa} className="w-[130px] h-[173px] pt-6 mb-6 pr-10" />
          </div>

          <div className="rounded-md w-[235px] h-[185px] bg-[#D8E3F2] flex space-x-4 gap-4 mx-3 py-3 px-3">
            <div className="bg-[#E7FF86]  rounded-full font-bold h-7 px-2 py-1 top-3 left-3">
              30% OFF
              <h1 className=" flex font-bold text-xl w-[100px] text-balance tracking-wide">
                Coleção Adidas
              </h1>
              <Button className=" w-[100px] h-7 px-2 py-1 bg-white text-[#C92071] rounded-full hover:bg-white hover: text-[#C92071] my-8">
                Comprar
              </Button>
            </div>
            <img src={Tenis} className="w-[75px] h-[173px]" />
          </div>
          <div className="rounded-md w-[235px] h-[185px] bg-[#D8E3F2] flex space-x-4 gap-4 mx-3 py-3 px-3">
            <div className="bg-[#E7FF86] rounded-full font-bold h-7 px-2 py-1 top-3 left-3">
              30% OFF
              <h1 className=" flex font-bold text-xl w-[100px] text-balance tracking-wide">
                Novo Beat Bass
              </h1>
              <Button className=" w-[100px] h-7 px-2 py-1 bg-white text-[#C92071] rounded-full hover:bg-white hover: text-[#C92071] my-8">
                Comprar
              </Button>
            </div>
            <img src={Fones} className="w-[75px] h-[173px]" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ColecoesEmDestaqueDesconto;
