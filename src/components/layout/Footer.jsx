import LogoFooter from "../../assets/LogoFooter.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return <footer className="bg-black text-white"> 
    <div className="flex flex-row justify-between items-center">

     <div className="border w-[150px] m-6 justify-between " >
    <img src={LogoFooter} alt="Logo Footer" className="w-[150px] h-[50px] mt-[10px]"/>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
      <div className="flex gap-3 ml-4">
      <FaFacebookF />
      <FaInstagram />
      <FaXTwitter />
      </div>     
    </div>
    </div>
   
    
    <div className="border-b mx-4"></div>
    <div className="text-center">&copy; 2024 Digital College</div>
  </footer>;
}
export default Footer;
