import DigitalCollege from "../../assets/DigitalCollege.png";

export default function MinHeader(){

  return(
    <div className=" pt-4 bg-white shadow-md ">
    <div className="w-full">
    <div className="container flex justify-between items-center mx-auto px-4">
      <div className="flex items-center ">
        <a
          href="#"
          className="font-bold text-2Xl sm:text-3Xl flex items-center gap-2 "
        >
          <img
            src={DigitalCollege}
            alt="DigitalCollege"
            className="w-10 "
          />
          <h1 className="text-[#C92071] text-2xl">Digital Store</h1>
        </a>
      </div>
    </div>
    </div>
    </div>
  )
}