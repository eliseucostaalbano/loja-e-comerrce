import React, { useState } from 'react';

const produtos = [
  { id: 1, marca: 'Adidas', categoria: 'Esporte', genero: 'Masculino', estado: 'Novo' },
  { id: 2, marca: 'Calecianga', categoria: 'Casual', genero: 'Feminino', estado: 'Usado' },
  { id: 3, marca: 'K-Swiss', categoria: 'Utilitário', genero: 'Unissex' },
  { id: 4, marca: 'Nike', categoria: 'Corrida'},
  { id: 5, marca: 'Puma'}
];


const Filtro = () => {
  const [filtros, setFiltros] = useState({
    marcas: [],
    categorias: [],
    generos: [],
    estado: ''
  });

  const handleCheckboxChange = (e, category) => {
    const { name, checked } = e.target;
    setFiltros((prevState) => {
      const categoryFilters = prevState[category];
      if (checked) {
        return {
          ...prevState,
          [category]: [...categoryFilters, name],
        };
      } else {
        return {
          ...prevState,
          [category]: categoryFilters.filter((item) => item !== name),
        };
      }
    });
  };

  const handleRadioChange = (e) => {
    const { name } = e.target;
    setFiltros((prevState) => ({
      ...prevState,
      estado: name,
    }));
  };



  return (
    <div className="flex mb-[390px] mr-4">
      <div className="bg-white p-4 w-[250px]">
        <h1 className="mb-3 text-xl font-bold">Filtrar por</h1>
        <div className="border-b mb-4"></div>

        <div>
          <p className="font-bold mb-2">Marcas</p>
          {['Adidas', 'Calecianga', 'K-Swiss', 'Nike', 'Puma'].map((marca) => (
            <div key={marca} className="mb-2">
              <input
                type="checkbox"
                name={marca}
                className="form-checkbox text-[#C92071]"
                onChange={(e) => handleCheckboxChange(e, 'marcas')}
              />
              <label htmlFor={marca} className="ml-2">{marca}</label>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <p className="font-bold mb-2 text-black">Categoria</p>
          {['Esporte', 'Casual', 'Utilitário', 'Corrida'].map((categoria) => (
            <div key={categoria} className="mb-2">
              <input
                type="checkbox"
                name={categoria}
                className="form-checkbox text-[#C92071]"
                onChange={(e) => handleCheckboxChange(e, 'categorias')}
              />
              <label htmlFor={categoria} className="ml-2">{categoria}</label>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <p className="font-bold mb-2">Gênero</p>
          {['Masculino', 'Feminino', 'Unissex'].map((genero) => (
            <div key={genero} className="mb-2">
              <input
                type="checkbox"
                name={genero}
                className="form-checkbox text-[#C92071]"
                onChange={(e) => handleCheckboxChange(e, 'generos')}
              />
              <label htmlFor={genero} className="ml-2">{genero}</label>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <p className="font-bold mb-2">Estado</p>
          {['Novo', 'Usado'].map((estado) => (
            <div key={estado} className="mb-2">
              <input
                type="radio"
                name={estado}
                className="form-radio text-[#C92071]"
                onChange={handleRadioChange}
              />
              <label htmlFor={estado} className="ml-2">{estado}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filtro;