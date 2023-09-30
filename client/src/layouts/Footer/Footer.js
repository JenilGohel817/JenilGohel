import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="jg-footer">
        <div className="jg-container">
          <div className="jg-footer-wrapper jg-d-none">
            <a className="jg-header-link" href={"/"}>
              Home
            </a>
            <a className="jg-header-link" href={"/Project"}>
              Projects
            </a>
            <a className="jg-header-link" href={"/ContactUs"}>
              Contect Us
            </a>
            <a className="jg-header-link" href={"/AboutUs"}>
              About Us
            </a>
          </div>
          <h2>JG</h2>
        </div>
      </footer>
    </>
  );
};

export default Footer;
