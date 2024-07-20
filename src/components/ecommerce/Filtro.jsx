export default function Filtro() {
  return (
    <div className="flex mb-[400px] mr-4">
      <div className="bg-white p-4 w-[250px]">
        <h1 className="mb-3 text-xl font-bold">Filtrar por</h1>
        <div className="border-b mb-4 "></div>
        <div className="mt-4">
          <p className="font-bold mb-2 text-xl">Marcas</p>
          <div className="mb-2">
          <input type="checkbox" name="Adidas" value="Adidas" className="form-checkbox text-[#C92071] checked:bg-[#C92071] checked:border-transparent" />
            <label htmlFor="Adidas" className="ml-2 text-xl">Adiadas</label><br></br>
            <input type="checkbox" name="Calecianga" value="Calecianga" className="form-checkbox text-[#C92071] checked:bg-[#C92071] checked:border-transparent" />
            <label htmlFor="Calecianga" className="ml-2 text-xl">Calencianga</label><br></br>
            <input type="checkbox" name="K-Swiss" value="K-Swiss" className="form-checkbox text-[#C92071] checked:bg-[#C92071] checked:border-transparent" />
            <label htmlFor="K-Swiss" className="ml-2 text-xl">K-Swiss</label><br></br>
            <input type="checkbox" name="Nike" value="Nike" className="form-checkbox text-[#C92071] checked:bg-[#C92071] checked:border-transparent" />
            <label htmlFor="Nike" className="ml-2 text-xl">Nike</label><br></br>
            <input type="checkbox" name="Puma" value="Puma" className="form-checkbox text-[#C92071] checked:bg-[#C92071] checked:border-transparent" />
            <label htmlFor="Puma" className="ml-2 text-xl">Puma</label>
          </div>
        </div>
        <div className="mt-4">
          <p className="font-bold mb-2 text-xl">Categoria</p>
          <div className="mb-2">
          <input type="checkbox" name="Esporte" value="Esporte" className="form-checkbox text-[#C92071] checked:bg-[#C92071] checked:border-transparent" />
            <label htmlFor="Adidas" className="ml-2 text-xl">Esporte</label><br></br>
            <input type="checkbox" name="Casual" value="Casual" className="form-checkbox text-[#C92071] checked:bg-[#C92071] checked:border-transparent" />
            <label htmlFor="Casual" className="ml-2 text-xl">Casual</label><br></br>
            <input type="checkbox" name="Utilitario" value="Utilitario" className="form-checkbox text-[#C92071] checked:bg-[#C92071] checked:border-transparent" />
            <label htmlFor="Utilitario" className="ml-2 text-xl">Utilitario</label><br></br>
            <input type="checkbox" name="Corrida" value="Corrida" className="form-checkbox text-[#C92071] checked:bg-[#C92071] checked:border-transparent" />
            <label htmlFor="Corrida" className="ml-2 text-xl">Corrida</label>
          </div>
        </div>
        <div className="mt-4">
          <p className="font-bold mb-2 text-xl">Gênero</p>
          <div className="mb-2">
          <input type="checkbox" name="Masculino" value="Masculino" className="form-checkbox text-[#C92071] checked:bg-[#C92071] checked:border-transparent" />
            <label htmlFor="Masculino" className="ml-2 text-xl">Masculino</label><br></br>
            <input type="checkbox" name="Feminino" value="Feminino" className="form-checkbox text-[#C92071] checked:bg-[#C92071] checked:border-transparent" />
            <label htmlFor="Feminino" className="ml-2 text-xl">Feminino</label><br></br>
            <input type="checkbox" name="Unissex" value="Unissex" className="form-checkbox text-[#C92071] checked:bg-[#C92071] checked:border-transparent" />
            <label htmlFor="Unissex" className="ml-2 text-xl">Unissex</label>
          </div>
        </div>
        <div className="mt-4">
          <p className="font-bold mb-2 text-xl">Marcas</p>
          <div className="mb-2">
          <input type="radio" name="Novo" value="Novo" className="form-radio text-[#C92071] checked:bg-[#C92071] checked:border-transparent" />
            <label htmlFor="Novo" className="ml-2 text-xl">Novo</label><br></br>
            <input type="radio" name="Usado" value="Usado" className="form-radio text-[#C92071] checked:bg-[#C92071] checked:border-transparent" />
            <label htmlFor="Usado" className="ml-2 text-xl">Usado</label>
          </div>
        </div>
      </div>
    </div>
  );
}
