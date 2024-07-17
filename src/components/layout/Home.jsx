import Header from "./Header";
import Tenis1 from "../../assets/Tenis/TenisTipo1.png"
// import Tenis2 from "../../assets/Tenis/TenisTipo2.png";
// import Tenis3 from "../../assets/Tenis/TenisTipo3.png";
// import Tenis4 from "../../assets/Tenis/TenisTipo4.png";

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
    // img: Tenis2,
    title: "30% off on all Women's Wear",
    description:
      "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    // img: Tenis3,
    title: "70% off on all Products Sale",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },

  {
    id: 4,
    // img: Tenis4,
    title: "70% off on all Products Sale",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
]

export default function Home(){
return(
<>
<Header />
<div>
{/* padrao de background */}
<div className=" border w-full h-[400px] bg-[#F5F5F5]"></div>
{/* fotos */}
</div>
  
</>

)
  
}