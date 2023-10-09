import Header from "./Header/Header.js";
import Footer from "./Footer/Footer.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PreLoader from "../components/PreLoader/PreLoader.js";
import { useEffect, useState } from "react";

const Layout = ({ children }) => {
  const [loading, Setloading] = useState(false);

  useEffect(() => {
    Setloading(false);
    setTimeout(() => {
      Setloading(true);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <>
          <Header />
          {children}
          <Footer />
          <ToastContainer />
        </>
      ) : (
        <>
          <PreLoader />
        </>
      )}
    </>
  );
};

export default Layout;
