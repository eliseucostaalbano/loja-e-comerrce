import Filtro from "../components/ecommerce/Filtro";
import axios from "axios";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get("https://api-store-do1w.onrender.com/shoes").then((response) => {
      setProdutos(response.data);
    });
  }, []);

  return (
    <div className="flex flex-row items-center justify-center bg-gray-100 w-screen">
      <Filtro />
      <div className="flex flex-wrap w-full h-screen gap-4  mb-[350px]">
        {produtos.map((produto) => (
          <Link to={`/${produto.id}`}>
            <div
              className="
                text-black w-[250px] h-[200px] bg-white p-2
                  rounded-md overflow-hidden flex items-center
                  justify-center flex-col"
              key={produto.id}
            >
              <h2>{produto.nome}</h2>
              <img
                className=" h-[80px] "
                src={produto.imagem_url}
                alt={produto.nome}
              />
              <div className="flex mx-9 pl-2 gap-2 ">
                <p>{produto.preco_original}</p>
                <p>{produto.preco_desconto}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
