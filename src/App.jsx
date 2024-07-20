import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./paginas/Home";
import Produtos from "./paginas/Produtos";
import ProdutoDetalhe from "./components/ecommerce/ProdutosDetalhes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/produto/:id" element={<ProdutoDetalhe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
