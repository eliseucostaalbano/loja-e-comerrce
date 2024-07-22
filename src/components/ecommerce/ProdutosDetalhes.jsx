import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProdutosEmDestaque from "./ProdutosEmDestaque"
export default function ProdutoDetalhe(){
    const  {id}  = useParams()
    const [produto, setProduto] = useState({})
    // const [listaProdutos, setListaProduto] = useState([]);


    useEffect(() => {
        
        fetch(`https://api-store-do1w.onrender.com/shoe/${id}`)
                .then(response => response.json())
                .then(produto => setProduto(produto))
                
                .catch(error => console.log(error))
            
                
        }, [id]);

       

    return (
        
        <div className="">
        <div className="bg-white flex gap-4">
           <img
               className=" h-[300px] ml-[30px] bg-[#F5F5F5]"
               src={produto.imagem_url}
               alt={produto.nome}
             />
            <h1 className=" border font-bold text-5xl">{produto.nome}</h1>  
       </div>
        <ProdutosEmDestaque />
        </div>
       
    )
}