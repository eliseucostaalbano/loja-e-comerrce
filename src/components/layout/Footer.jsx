import LogoFooter from "../../assets/LogoFooter.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return <footer className="bg-black text-white w-full"> 
    <div className="flex flex-row justify-between items-center">
      
     <div className="w-[180px] m-6 justify-between" >
    <img src={LogoFooter} alt="Logo Footer" className="w-[200px] h-[50px] mt-[10px]"/>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
      <div className="flex gap-3 ml-4 mt-4">
      <FaFacebookF />
      <FaInstagram />
      <FaXTwitter />
      </div>     
    </div>
      
      <div className=" flex-col mr-[20px] ">
      <h1 className="font-bold mb-4">Informações</h1>
        <p className="cursor-pointer">Sobre Drip Store</p>
        <p className="cursor-pointer">Segurança</p>
        <p className="cursor-pointer">Whishlist</p>
        <p className="cursor-pointer">Blog</p>
        <p className="cursor-pointer">Trabalho conosco</p>
        <p className="cursor-pointer">Meus pediddos</p>
      </div>
      <div className=" flex-col mr-[20px] px-4">
        <h1 className="font-bold mb-4">Categorias</h1>
        <p className="cursor-pointer">Camisas</p>
        <p className="cursor-pointer">Calças</p>
        <p className="cursor-pointer">Bonés</p>
        <p className="cursor-pointer">Headphones</p>
        <p className="cursor-pointer">Tênis</p>
        </div>
      <div className="flex-col mr-[20px] w-[200px]">
        <h1 className="font-bold mb-4">Contato</h1>
        <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
        <br />
        <p>(85) 3051-3411</p>
        </div>
    </div>
    
    <div className="border-b mx-4 border-gray-200"></div>
    <div className="text-center">&copy; 2024 Digital College</div>
  </footer>;
}
export default Footer;
