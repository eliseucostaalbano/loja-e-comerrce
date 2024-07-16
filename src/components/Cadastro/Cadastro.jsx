

export default function Cadastro(){
  return(
    <div>
      <h1>Cadastro</h1>
    <div className=" flex  flex-col border border-black w-[450px] h-[250px] px-2  font-">
      <h1>informações Pesoais</h1>
      <div className="border border solid border-silver my-2" ></div>
      <label  className="">Nome Completo:</label>
<input className="border border-black h-8" type="text" placeholder="Nome completo" />
      <label  className="">Email: </label>
<input  className="border border-black h-8" type="text"placeholder="Email" />
      <label  className="">CPF:
      </label>
      <input type="text" placeholder="CPF" />
    <label>Celular</label>
      <input type="text"  placeholder="Celular" />
      </div>

      <div className=" flex  flex-col border border-black w-[200px] mt-6">
        <h1>informações De Entrega</h1>
        <div className="border border solid border-silver"></div>
        <input type="text"  placeholder="Endreço" />
        <input type="text"  placeholder="Bairro" />
        <input type="text"  placeholder="Cidade" />
        <input type="text"  placeholder="Bairro" />
        <input type="text"  placeholder="Complementos" />
        </div>
      
    </div>
    
  )
}