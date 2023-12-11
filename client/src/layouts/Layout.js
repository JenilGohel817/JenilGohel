import Header from "./Header/Header.js";
import Footer from "./Footer/Footer.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PreLoader from "../components/PreLoader/PreLoader.js";
import { useEffect, useState } from "react";
import Cookie from "./Cookie.js";

const Layout = ({ children }) => {
  const [loading, Setloading] = useState(false);

  useEffect(() => {
    Setloading(false);
    setTimeout(() => {
      Setloading(true);
    });
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
      <main>{children}</main>
      <Cookie />
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Layout;
