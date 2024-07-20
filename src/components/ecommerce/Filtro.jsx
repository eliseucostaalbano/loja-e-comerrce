export default function Filtro() {
  return (
    <div className="bg-white h-[500px] w-[200px]">
      <h1 className="m-3">Filtrar por</h1>
      <div className="border border-solid "></div>
      <div>
        <p className="font-bold">Marcas</p>
        <input type="checkbox" name="Adidas" />
        <label for="Adidas"> Adidas</label><br></br>
        <input type="checkbox" name="Calecianga" />
        <label for="Calecianga"> Calencianga</label><br></br>
        <input type="checkbox" name="K-Swiss" />
        <label for="K-Swiss"> K-Swiss</label><br></br>
        <input type="checkbox" name="Nike" />
        <label for="Nike"> Nike</label><br></br>
        <input type="checkbox" name="Puma" />
        <label for="Puma"> Puma</label>
      </div>
      <div>
        <p className="font-bold">Categoria</p>
        <input type="checkbox" name="Esporte" />
        <label for="Esporte"> Esporte e lazer</label><br></br>
        <input type="checkbox" name="Casual" />
        <label for="Casual"> Casual</label><br></br>
        <input type="checkbox" name="Utilitario" />
        <label for="Utilitario"> Utiltário</label><br></br>
        <input type="checkbox" name="Corrida" />
        <label for="Corrida"> Corrida</label>
      </div>
      <div>
        <p className="font-bold">Genero</p>
        <input type="checkbox" name="Masculino" />
        <label for="Masculino"> Masculino</label><br></br>
        <input type="checkbox" name="Feminino" />
        <label for="Feminino"> Feminino</label><br></br>
        <input type="checkbox" name="Unissex" />
        <label for="Unissex"> Unissex</label>
      </div>
      <div>
        <p className="font-bold">Estado</p>
        <input type="radio" name="Novo" />
        <label for="Masculino"> Novo</label><br></br>
        <input type="radio" name="Usado" />
        <label for="Masculino"> Usado</label>
      </div>
    </div>
  );
}
