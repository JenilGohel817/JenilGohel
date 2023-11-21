import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const MenuClick = () => {
    const jgIcon = document.querySelector(".jg-header-menu-right");
    const jgLineOne = document.querySelector(".jg-header-menu-icon-line-one");
    const jgLineThree = document.querySelector(
      ".jg-header-menu-icon-line-three"
    );

    const jgHeaderRight = document.querySelector(".jg-header-menu-right");
    jgIcon.classList.toggle("jg-header-menu-mobile");

    jgLineOne.classList.toggle("jg-d-none");
    jgLineThree.classList.toggle("jg-d-none");

    const body = document.querySelector("body");
    body.classList.toggle("jg-overflow-hidden");

    if (!jgHeaderRight.classList.contains("jg-header-menu-mobile")) {
      body.classList.remove("jg-overflow-hidden");
      jgLineOne.classList.remove("jg-d-none");
      jgLineThree.classList.remove("jg-d-none");
    }
  };

  const MenuHeaderClick = () => {
    const body = document.querySelector("body");
    body.classList.remove("jg-overflow-hidden");
  };

  return (
    <>
      <header className="jg-header">
        <div className="jg-container">
          <div className="jg-header-wrapper">
            <div className="jg-header-menu jg-dflex">
              <div className="jg-header-menu-left">
                <Link to={"/"} className="jg-logo">
                  <span className="jg-span jg-logo-contant">JG</span>
                </Link>
              </div>
              <div className="jg-header-menu-icon" onClick={MenuClick}>
                <span className="jg-header-menu-icon-line jg-header-menu-icon-line-one"></span>
                <span className="jg-header-menu-icon-line jg-header-menu-icon-line-two"></span>
                <span className="jg-header-menu-icon-line jg-header-menu-icon-line-three"></span>
              </div>
              <div className="jg-header-menu-right">
                <ul>
                  <li>
                    <Link
                      className="jg-header-link"
                      onClick={MenuHeaderClick}
                      to={"/"}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="jg-header-link"
                      onClick={MenuHeaderClick}
                      to={"/Project"}
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="jg-header-link"
                      onClick={MenuHeaderClick}
                      to={"/AboutUs"}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="jg-header-link"
                      onClick={MenuHeaderClick}
                      to={"/ContactUs"}
                    >
                      Contect Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
