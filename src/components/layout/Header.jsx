import DigitalCollege from "../../assets/DigitalCollege.png";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Menu = [
  {
    id: 1,
    name: "Home",
    rota: "/"
  },
  {
    id: 2,
    name: "Produtos",
    rota: "/produtos"
  },
  {
    id: 3,
    name: "Categorias",
  },
  {
    id: 4,
    name: "Meus Pedidos",
  },
];

export default function Header() {
  return (
    <div className=" pt-4 bg-white shadow-md ">
      {/* Nav Bar de cima */}
      <div className="w-full">
        <div className="container flex justify-between items-center mx-auto px-4">
          <div className="flex items-center ">
            <a
              href="#"
              className="font-bold text-2Xl sm:text-3Xl flex items-center gap-2 "
            >
              <img
                src={DigitalCollege}
                alt="DigitalCollege"
                className="w-10 "
              />
              <h1 className="text-[#C92071] text-2xl">Digital Store</h1>
            </a>
          </div>
          {/* Barra  de busca e ordem dos butões*/}
          <div className="relative hidden sm:block flex-1 mx-4">
            <input
              type="text"
              placeholder="Pesquisar Produto..."
              className="w-full rounded-lm border border-gray-300 px-2 py-2"
            />
            <CiSearch className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-500 cursor-pointer" />
          </div>
          <div className="gap-4 flex items-center">
            <a href="#">
              <h1 className="underline flex text-gray-700">Cadastre-se</h1>
            </a>
            <Button
              onClick={() => alert("função indiponivel")}
              className=" w-[150px] h-10 bg-[#C92071] text-white rounded-full hover:bg-[#C92071] hover:text-white"
            >
              Entrar
            </Button>
            {/*Carrinho*/}
            <button onClick={() => alert("função não Implementada")}
              className=" bg-white py-1 px-4 rounded-full flex items-center gap-3 transition-all duration-200"
              >
            <span
              className="hover:block hidden transition-all duration-200 bg-[#C92071] "
              >Compar</span>
              <CiShoppingCart className="text-[#C92071] w-6"/>
            </button>
          </div>
        </div>
      </div>
      {/*NavBar baixa  */}
      <div className="flex mt-6 ml-8">
        <ul className=" flex items-center gap-6  ">
          {Menu.map((data) => (
            <li key={data.id}>
              <Link to={data.rota}>
                <p
                  className=" text-gray-700 hover:underline hover:text-[#C92071]"
                >
                  {data.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
