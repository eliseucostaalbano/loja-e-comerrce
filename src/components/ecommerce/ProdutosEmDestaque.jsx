import axios from "axios";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FaLongArrowAltRight } from "react-icons/fa";


function ProdutosEmDestaque() {
  useEffect(() => {
    axios
      .get("https://api-store-do1w.onrender.com/shoes?limit=8")
      .then((response) => {
        setProdutos(response.data);
      });
  }, []);

  const [produtos, setProdutos] = useState([]);
  return (
    <>
      <div className="bg-[#F5F5F5] ">
        <div className="flex justify-between">
          <div>
            <h1 className="font-bold">Produtos em Destaque</h1>
          </div>
          <div className="">
            <Button className="pr-8 gap-3 text-[#C92071]">
              Ver todos <FaLongArrowAltRight className="" />
            </Button>
          </div>
        </div>
        <div className=" flex flex-wrap w-full h-full gap-2 mt-4 mb-4">
          {produtos.map((produto) => (
            <div
              className="text-black w-[300px] h-[200px] bg-white p-2 rounded-md overflow-hidden flex items-center justify-center flex-col"
              key={produto.id}
            >
              <h2>{produto.nome}</h2>
              <img
                className="w-[80px]"
                src={produto.imagem_url}
                alt={produto.id}
              />
              <div className="flex mx-9">
                <p className=" mx-2 text-black">{produto.preco_original}</p>
                <p className="text-black">{produto.preco_desconto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProdutosEmDestaque;
