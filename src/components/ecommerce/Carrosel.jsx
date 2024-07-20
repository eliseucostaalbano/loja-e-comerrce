import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Carrosel({ produtos }) {
  return (
    <Carousel>
      <CarouselContent className="flex"> 
        {produtos.map((produto) => {
          if (!produto.id) {
            console.error("Produto sem ID:", produto);
            return null;
          }
          return (
            <CarouselItem
              key={produto.id}
              className="flex  w-full flex-row justify-center items-center"
            >
              <div className="w-[500px] my-8 flex flex-col justify-center gap-4">
                <h1 className="text-yellow-300">
                  Melhores ofertas personalizadas
                </h1>
                <p className="font-bold text-5xl sm:text-6xl">
                  {produto.title}
                </p>
                <p className="text-gray-500">{produto.description}</p>
                <div className="flex">
                  <Button className="w-[150px] h-10 bg-[#C92071] text-white rounded-full hover:bg-[#C92071] hover:text-white">
                    Ver Ofertas
                  </Button>
                </div>
              </div>
              <div>
                <img src={produto.img} alt={produto.title} />
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
