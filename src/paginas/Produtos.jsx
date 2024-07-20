import Filtro from "../components/ecommerce/Filtro";
import axios from "axios";
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";


export default function Produtos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get("https://api-store-do1w.onrender.com/shoes").then((response) => {
      setProdutos(response.data);
    });
  }, []);
  return (
    <>
      <div className="flex flex-row items-center justify-center min-h-screen bg-gray-100">
        
        <Filtro  />
       
        <div className=" flex flex-wrap w-[600px] h-full gap-2 mt-8 mb-10">
          {produtos.map((produto) => (
          <Link to={`/produto/${produto.id}`}>
            <div className="text-black bg-white p-2 rounded-md overflow-hidden flex items-center justify-center flex-col"
              key={produto.id}
            >
              <h2>{produto.nome}</h2>
              <img
                className="w-[80px]"
                src={produto.imagem_url}
                alt={produto.id}
              />
              <div className="flex mx-9">
                <p className=" mx-2 text-gray-300 line-through"> ${produto.preco_original}</p>
                <p className="text-black">${produto.preco_desconto}</p>
              </div>
            </div>
          </Link>
            
          ))}
        </div>
      </div>
    </>
  );
}
