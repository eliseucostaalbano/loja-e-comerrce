import { Button } from "@/components/ui/button";


export default function Login(){
  return(
    <div className="border border-black w-[500px] m-[30px] " >
      <div className="ml-8">
      <h1 className="font-semibold ">Acessa sua conta</h1>
      <h2 className="">Novo cliente Acesse sua conta <h2 className="underline">Aqui</h2>
      </h2>
      </div>
      <div className="flex flex-col items-center ">
        <label className="mr-[400px] pt-4" for="Login">Login:</label>
      <input
        type="text"
        name="Login"
        placeholder="Buscar"
        className="w-[400px] rounded-lm border border-gray px-2 py-2 mt-5"
      />
    <label className="mr-[400px] pt-4" for="Senha">Senha:</label>
      <input
        type="text"
        name="Senha"
        placeholder="Buscar"
        className="w-[400px] rounded-lm border border-gray px-2 py-2 mt-5"
      />
      </div>
      <Button  className=" w-[400px] h-10 bg-[#C92071] text-white rounded-full hover:bg-[#C92071] hover:text-white  items-center mt-5 ml-8">
        Entrar</Button>
      <h2 className="text-center">Ou faça login com </h2>
    </div>
     
  )
}