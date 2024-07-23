import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProdutosEmDestaque from "./ProdutosEmDestaque";
export default function ProdutoDetalhe() {
    const { id } = useParams();
    const [produto, setProduto] = useState({});
    // const [listaProdutos, setListaProduto] = useState([]);

    useEffect(() => {
        fetch(`https://api-store-do1w.onrender.com/shoe/${id}`)
            .then((response) => response.json())
            .then((produto) => setProduto(produto))

            .catch((error) => console.log(error));
    }, [id]);

    return (
        <div className="align-center justify-center bg-[#F5F5F5]">
            <div className="flex gap-4">
                <div>
                    <img
                        className=" h-[400px] ml-[30px] bg-white mt-7"
                        src={produto.imagem_url}
                        alt={produto.nome}
                    />
                    <div className="flex ml-5 mt-2">
                        <div>
                            <img
                                className=" h-[50px] ml-[20px] bg-[#E2E3FF] "
                                src={produto.imagem_url}
                                alt={produto.nome}
                            />
                        </div>
                        <div>
                            <img
                                className=" h-[50px] ml-[30px] bg-[#FFE8BC] "
                                src={produto.imagem_url}
                                alt={produto.nome}
                            />
                        </div>
                        <div>
                            <img
                                className=" h-[50px] ml-[30px] bg-[#FFC0BC] "
                                src={produto.imagem_url}
                                alt={produto.nome}
                            />
                        </div>
                        <div>
                            <img
                                className=" h-[50px] ml-[30px] bg-[#DEC699] "
                                src={produto.imagem_url}
                                alt={produto.nome}
                            />
                        </div>
                        <div>
                            <img
                                className=" h-[50px] ml-[30px] bg-[#E8DFCF] "
                                src={produto.imagem_url}
                                alt={produto.nome}
                            />
                        </div>
                    </div>
                </div>

                <div className=" ml-[65px] mt-3 h-[400px]">
                    <h1 className="font-bold text-5xl">{produto.nome} </h1>
                    <div className="flex gap-4 mt-3">
                        <p className="text-sm">{produto.modelo}</p>
                        <p className="text-sm">{produto.marca}</p>
                        <p className="text-sm">REF:{produto.referencia}</p>
                    </div>
                    <div className=" flex">
                        <h1 className="w-[50px] ml-[100px] text-center bg-yellow-400 text-white mt-2">
                            {produto.nota}
                        </h1>
                        <p className="ml-2 mt-2"> (90 Avaliações)</p>
                    </div>
                    <div className="flex gap-4 mt-2">
                        <div className="text-2xl">
                            R$ {produto.preco_desconto}
                        </div>
                        <div className="mt-2 text-sm text-gray-300 line-through">
                            R$ {produto.preco_original}
                        </div>
                    </div>
                    <div>
                        <h1 className="text-gray-600 mt-4">
                            Descrição do produto
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore.
                        </p>
                    </div>
                    <div>
                        <h1 className="text-gray-600 mt-4">Tamanho</h1>
                        {/* <div className="flex">
                            <p>{produto.tamanhos[1]}</p>
                        </div> */}
                    </div>
                    <div>
                        <h1 className="text-gray-600 mt-4 rounded-full">Cores</h1>
                        <div className="flex">
                            <p className="border w-8  h-8 bg-white ml-3 rounded-full bg-[#6FEEFF]">
                                
                            </p>
                            <p className="border w-8 bg-white ml-3 rounded-full bg-[#FF6969]">
                                
                            </p>
                            <p className="border w-8 bg-white ml-3 rounded-full bg-[#5E5E5E]">
                                
                            </p>
                            <p className="border w-8 bg-white ml-3 rounded-full bg-[#6D70B7]">
                                
                            </p>
                        </div>
                    </div>
                   <Button className="border w-[200px] mt-4 bg-yellow-400 text-white hover:text-white hover:bg-yellow-400">Comprar</Button> 
                </div>
            </div>
            <ProdutosEmDestaque />
        </div>
    );
}
