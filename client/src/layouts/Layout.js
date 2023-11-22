import Header from "./Header/Header.js";
import Footer from "./Footer/Footer.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PreLoader from "../components/PreLoader/PreLoader.js";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

<Helmet>
  <meta property="og:title" content="Jenil Gohel" />
  <meta property="og:description" content="Jenil Gohel" />
  <meta
    property="og:image"
    content="https://res.cloudinary.com/dccsz6yct/image/upload/v1700675491/negcohs5v5j5lhifrngp.png"
  />
  <meta property="og:url" content="https://jenil-gohel.vercel.app" />
</Helmet>;

const Layout = ({ children }) => {
  const [loading, Setloading] = useState(false);

  useEffect(() => {
    Setloading(false);
    setTimeout(() => {
      Setloading(true);
    }, 300);
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
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Layout;
