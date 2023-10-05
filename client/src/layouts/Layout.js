import Header from "./Header/Header.js";
import Footer from "./Footer/Footer.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <ToastContainer />
      <Footer />
    </>
  );
};

export default Layout;
