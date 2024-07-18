import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./Header";

export default function Produtos() {
  const[produtos, setProdutos]=useState([])

  useEffect(()=> {
    axios.get("https://api-store-do1w.onrender.com/shoes")
    .then((response)=> {
      setProdutos(response.data)
    })
  },[])
  return (
    <>
    <Header/>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className=" flex flex-wrap w-[600px] h-full gap-2 mt-8 mb-10">
      {produtos.map((produto)=> (
      <div className="text-white w[300px] h-[200px] bg-black p-2 rounded-md overflow-hidden flex items-center justify-center flex-col" key={produto.id}>
      <h2>{produto.nome}</h2>
        <img className="w-[80px]" src={produto.imagem_url} alt={produto.id}/>
        <div className="flex mx-9">
           <p className=" mx-2 text-white">{produto.preco_original}</p>
        <p className="text-white">{produto.preco_desconto}</p>
        </div>
       
      </div>
      ))}
    </div>
      </div>
    
    </>
    
  );
}
