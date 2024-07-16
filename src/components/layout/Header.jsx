import DigitalCollege from "../../assets/DigitalCollege.png";
import { CiSearch } from "react-icons/ci";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div>
      {/* Nav Bar de cima */}
      <div className="w-full">
        <div className="container flex w-[100%] flex-start">
          <div className="container flex items-center ">
            <a href="#" className="font-bold text-2Xl sm:text-3Xl flex gap-2">
              <img
                src={DigitalCollege}
                alt="DigitalCollege"
                className="w-10 "
              />
              <h1 className="text-[#C92071] text-2xl">Digital Store</h1>
            </a>
          </div>
          {/* Barra  de busca e ordem dos butões*/}
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Buscar"
              className="w-[400px] rounded-lm border border-gray px-2 py-2"
            />
            <CiSearch className="w-6 cursor-pointer text-gray rounded-full absolute top-1/2 -translate-y-1/2 right-3" />
          </div>
          <div className="gap-4 flex">
            <h1>Cadastre-se</h1>
            <Button variant="outline">Button</Button>
          </div>
        </div>
      </div>
      {/*NavBar baixa  */}
    </div>
  );
}
