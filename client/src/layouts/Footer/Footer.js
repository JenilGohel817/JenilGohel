import "./Footer.css";
import linkedin from "../../assets/images/linkedin.png";
import github from "../../assets/images/github.png";
import instagram from "../../assets/images/instagram.png";
import twitter from "../../assets/images/twitter.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="jg-footer">
        <div className="jg-container">
          <div className="jg-footer-wrap">
            <Link className="jg-footer-fs" to={"/"}>
              JG
            </Link>
            <div className="jg-footer-wrapper">
              <div className="jg-footer-link">
                <Link
                  to="https://github.com/JenilGohel817"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="jg-soical-media-link"
                >
                  <img alt="social-media" src={github} />
                </Link>
              </div>
              <div className="jg-footer-link">
                <Link
                  to="https://www.linkedin.com/in/jenilgohel817/"
                  target="_blank"
                  className="jg-soical-media-link"
                  rel="noopener noreferrer"
                >
                  <img alt="social-media" src={linkedin} />
                </Link>
              </div>
              <div className="jg-footer-link">
                <Link
                  target="_blank"
                  to="https://twitter.com/JenilGohel817?t=X2acBvdcELd6m7RU41UQOA&s=09"
                  rel="noopener noreferrer"
                  className="jg-soical-media-link"
                >
                  <img alt="social-media" src={twitter} />
                </Link>
              </div>
              <div className="jg-footer-link">
                <Link
                  to="https://instagram.com/jenilgohel817?igshid=MzNlNGNkZWQ4Mg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="jg-soical-media-link"
                >
                  <img alt="social-media" src={instagram} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
