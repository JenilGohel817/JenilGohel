import { Link } from "react-router-dom";
import "./Header.css";
import User from "../../assets/images/user.png";
import UserLogout from "../../assets/images/power-off.png";

const Header = () => {
  const localGetItem = localStorage.getItem("JG");

  const logoutFun = () => {
    localStorage.clear();
    window.location.reload();
  };

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
                      to={"/blog"}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="jg-header-link"
                      onClick={MenuHeaderClick}
                      to={"/project"}
                    >
                      Project
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="jg-header-link"
                      onClick={MenuHeaderClick}
                      to={"/aboutus"}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="jg-header-link"
                      onClick={MenuHeaderClick}
                      to={"/contactus"}
                    >
                      Contect Us
                    </Link>
                  </li>
                  {localGetItem && (
                    <>
                      <li>
                        <Link
                          className="jg-header-link"
                          onClick={MenuHeaderClick}
                          to={"/addblog"}
                        >
                          Add Blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="jg-header-link"
                          onClick={MenuHeaderClick}
                          to={"/addproject"}
                        >
                          Add Project
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
              <div className="Header-image-wrapper">
                {localGetItem ? (
                  <>
                    <img
                      onClick={logoutFun}
                      className="Header-image"
                      src={UserLogout}
                      alt="User"
                    />
                  </>
                ) : (
                  <>
                    <Link to={"/login"}>
                      <img className="Header-image" src={User} alt="User" />
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
