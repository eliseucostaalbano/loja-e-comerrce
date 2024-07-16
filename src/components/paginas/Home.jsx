import axios from "axios";
import { useState, useEffect } from "react";
export default function Home() {
  const[produtos, setProdutos]=useState([])

  useEffect(()=> {
    axios.get("https://api-store-do1w.onrender.com/shoes?limit=20")
    .then((response)=> {
      setProdutos(response.data)
    })
  },[])
  return (
    <div className="flex flex-wrap w-full h-screen gap-4">
      {produtos.map((produto)=> (
      <div className="text-white w[300px] h-[200px] bg-black p-2 rounded-md overflow-hidden flex items-center justify-center flex-col" key={produto.id}>
      <h2>{produto.nome}</h2>
        <img className="w-[80px]" src={produto.imagem_url} alt={produto.id}/>
        <p>{produto.preco_desconto}</p>
      </div>
      ))}
    </div>
  );
}
