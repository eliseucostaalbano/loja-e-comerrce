import Carrosel from "../components/ecommerce/Carrosel";
import ProdutosEmDestaque from "../components/ecommerce/ProdutosEmDestaque";
import ColecoesEmDestaqueDesconto from "../components/ecommerce/ColecoesEmDestaqueDesconto";
import ColecoesEmDestaqueCategoria from "../components/ecommerce/ColecoesEmDestaqueCategoria";
import OfertaEspecial from "../components/ecommerce/OfertaEspecial";

import { ListaTenis } from "../mocks/tenis";

export default function Home() {
  return (
    <>
      <div className="h-[450px] bg-[#F5F5F5] flex flex-col justify-center items-center  ">
        <div className="container pb-8 ">
          <Carrosel produtos={ListaTenis} />
        </div>
      </div>
      <ColecoesEmDestaqueDesconto />
      <ColecoesEmDestaqueCategoria />
      <ProdutosEmDestaque />
      <OfertaEspecial />
    </>
  );
}
