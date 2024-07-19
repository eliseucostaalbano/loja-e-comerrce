import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./paginas/Home";
import Produtos from "./paginas/Produtos";
import ProdutoEmDestaque from "./components/ecommerce/ProdutosEmDestaque";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/produtoDestaque" element={<ProdutoEmDestaque />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
