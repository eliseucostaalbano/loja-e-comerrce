import { FaFacebookF } from "react-icons/fa";

export default function Login(){
    return(
        <div className="border border-black w-[500px] h-[400px]">
        <h1 className=" pl-2 font-bold text-2xl">Crie sua Conta</h1>
        <div className="flex pl-2">
        <h2>Já possui uma conta? Entre</h2><a href="#">
            <h2 className="pl-2 underline"> aqui</h2>
            </a>
        </div>
        <div className="flex flex-col flex-wrap ml-4 py-4">
             <label  className=""for="E-mail">Email:</label>
        <  input type="text" id="E-mail" value="Email" className="w-[400px] self-center  ransition-all duration-300 rounded-full border border-black px-2 py-2 focus:outline-none focus: border-1 focus:border-blue-600
            "/>
          <button className="w-[400px] h-[50px] bg-[#C92071] text-white  my-4  self-center  rounded-md " type="submit">Criar Conta</button>
        </div>
      <h2 className="flex items-center justify-center ">Ou faça login com 
        <img src="src\assets\gmail.jpeg" alt="" 
        className="w-5  ml-4 mr-4"
        />
         <FaFacebookF className=" w-4 cursor-pointer bg-[#1877F2]  text-white rounded-full" /> </h2>
        </div> 
        
    )
}