import { Button } from "@/components/ui/button";
import Header from "./Header";
import Tenis1 from "../../assets/Tenis/TenisTipo1.png"
import Tenis2 from "../../assets/Tenis/TenisTipo2.png";
import Tenis3 from "../../assets/Tenis/TenisTipo3.png";
import Tenis4 from "../../assets/Tenis/TenisTipo4.png";

const ListaTenis = [
  {
    id: 1,
    img: Tenis1,
    title: "Up to 50% off on all Men's Wear",
    description:
      "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Tenis2,
    title: "30% off on all Women's Wear",
    description:
      "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Tenis3,
    title: "70% off on all Products Sale",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },

  {
    id: 4,
    img: Tenis4,
    title: "70% off on all Products Sale",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
]

export default function Home(){
return(
<>
<Header />
<div className="relative overflow-hidden h-[450px] bg-[#F5F5F5] flex justify-center items-center">
{/* secção de fotos */}
  <div className="container pb-8">
  <div className="grid grid-cols-1">
  {/* secção de texto */}
    <div className="  w-[450px] my-8 flex flex-col justify-center gap-4 ">
      <h1 className="text-yellow-300"> Melhores ofertas personalizadas</h1> 
      <p className="font-bold text-5xl sm:text-6xl ">Queima de estoque Nike</p>
      </div>
    <div>
    <Button className="w-[150px] h-10 bg-[#C92071] text-white rounded-full hover:bg-[#C92071] hover:text-white">Ver Ofertas</Button>
    </div>
  {/* secção de texto */}
  </div>
  </div>
  {/* secção de imagens */}
  <div className="order-1">
  <div>
  <img 
    className=" mr-10 "
    src={Tenis1} alt=""
    />
  </div>
  </div>
</div>
  
</>

)
  
}