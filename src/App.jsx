import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/layout/Home";
import Produtos from "./components/layout/Produtos";
import ProdutoEmDestaque from "./components/layout/ProdutosEmDestaque";

function App() {
  return (
     
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/produtos" element= {<Produtos/>}/>
      <Route path="/produtoDestaque" element= {<ProdutoEmDestaque/>}/>
    </Routes>
    </BrowserRouter>
  );
}
export default App;
