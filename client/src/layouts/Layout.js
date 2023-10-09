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
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <>
          <PreLoader />
        </>
      )}
      <Header />
      {children}
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Layout;
