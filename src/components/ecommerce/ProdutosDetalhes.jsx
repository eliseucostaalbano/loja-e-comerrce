import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
// import axios from "axios";
export default function ProdutoDetalhe(){
    const  {id}  = useParams()
    const [produto, setProduto] = useState({})
    // const [listaProdutos, setListaProduto] = useState([]);


    useEffect(() => {
        
        fetch(`https://api-store-do1w.onrender.com/shoes/${id}`)
                .then(response => response.json())
                .then(produto => setProduto(produto))
                
                .catch(error => console.log(error))
            
                
        }, [id]);

    return (
        
       <div>
       
           <h1>{produto.nome}</h1>        
       </div>
    )
}