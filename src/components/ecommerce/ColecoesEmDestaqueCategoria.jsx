import Camisa from "../../assets/icones/Camisa.png";
import Calça from "../../assets/icones/Calça.png";
import Calçado from "../../assets/icones/Calçado.png";
import Fone from "../../assets/icones/Fone.png";
function ColecoesEmDestaqueCategoria() {
  return (
    <>
      <div className="">
        <h1 className="text-center font-bold">Coleções em Categoria</h1>
        <div className=" flex align-center justify-center">
          <div className="flex-row">
            <img src={Camisa} />
            <p className="text-center">Camisas</p>
          </div>
          <div className="flex-row mx-4 py-8">
            <img src={Calça} />
            <p className="text-center py-4">Calças</p>
          </div>
          <div className="flex-row mx-4 py-8">
            <img src={Calça} />
            <p className="text-center py-4">Bones</p>
          </div>
          <div className="flex-row mx-4 py-8">
            <img src={Fone} />
            <p className="text-center py-4">Headphones</p>
          </div>
          <div className="flex-row mx-4 py-8">
            <img src={Calçado} />
            <p className="text-center py-4">Tenis</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ColecoesEmDestaqueCategoria;
