import DigitalCollege from "../../assets/DigitalCollege.png";
import { CiSearch } from "react-icons/ci";
import { Button } from "@/components/ui/button";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Produtos",
    link: "/#",
  },
  {
    id: 3,
    name: "Categorias",
    link: "/#",
  },
  {
    id: 4,
    name: "Meus Pedidos",
    link: "/#",
  },
];

export default function Header() {
  return (
    <div className=" pt-4">
      {/* Nav Bar de cima */}
      <div className="w-full">
        <div className="container flex w-[100%] flex-start">
          <div className="container flex items-center ">
            <a href="#" className="font-bold text-2Xl sm:text-3Xl flex gap-2 ">
              <img
                src={DigitalCollege}
                alt="DigitalCollege"
                className="w-10 "
              />
              <h1 className="text-[#C92071] text-2xl">Digital Store</h1>
            </a>
          </div>
          {/* Barra  de busca e ordem dos butões*/}
          <div className="relative  hidden sm:block">
            <input
              type="text"
              placeholder="Buscar"
              className="w-[400px] rounded-lm border border-gray px-2 py-2 mr-5"
            />
            <CiSearch className="w-6 cursor-pointer text-gray rounded-full                    absolute top-1/2 -translate-y-1/2 right-3 mr-5" />
          </div>
          <div className="gap-4 flex">
            <a href="#">
              <h1 className="underline">Cadastre-se</h1>
            </a>
            <Button
              onClick={() => alert("função indiponivel")}
              className=" w-[150px] h-10 bg-[#C92071] text-white rounded-full                 hover:bg-[#C92071] hover:text-white"
            >
              Entrar
            </Button>
          </div>
        </div>
      </div>
      {/*NavBar baixa  */}
      <div className="flex justify-start">
        <ul className=" sm:flex items-center gap-4 mr-6">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:underline hover:text-[#C92071]"
              >
                {data.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
