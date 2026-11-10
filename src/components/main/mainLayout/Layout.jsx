import { Outlet } from "react-router-dom";
import Header from "../../Header/Header";
import Loader from "../../Loading/Loader";
import Nav from "../../Nav/Nav";
import NewsLetter from "./NewsLetter";
import FooterNav from "./FooterNav";
import Footer from "./Footer";
import { useInitLayout } from "../../../hooks/useInitLayout";

function Layout() {
  const { isInitLoading } = useInitLayout();

  if (isInitLoading) return <Loader />;
  return (
    <>
      <Header />
      <Nav />

      <Outlet />

      <NewsLetter />
      <FooterNav />
      <Footer />
    </>
  );
}

export default Layout;
