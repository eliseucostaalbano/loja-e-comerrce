import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Main from "../ecommerce/Main";

function Layout() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}
export default Layout;
