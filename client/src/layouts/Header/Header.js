import "./Header.css";

const Header = () => {
  const MenuClick = () => {
    const jgIcon = document.querySelector(".jg-header-menu-right");
    jgIcon.classList.toggle("jg-header-menu-mobile");
  };

  return (
    <>
      <header className="jg-header">
        <div className="jg-container">
          <div className="jg-header-wrapper">
            <div className="jg-header-menu jg-dflex">
              <div className="jg-header-menu-left">
                <a href={"/"} className="jg-logo">
                  <span className="jg-span jg-logo-contant">JG</span>
                </a>
              </div>
              <div className="jg-header-menu-icon" onClick={MenuClick}>
                <span className="jg-header-menu-icon-line jg-header-menu-icon-line-one"></span>
                <span className="jg-header-menu-icon-line jg-header-menu-icon-line-two"></span>
                <span className="jg-header-menu-icon-line jg-header-menu-icon-line-three"></span>
              </div>
              <div className="jg-header-menu-right">
                <ul>
                  <li>
                    <a className="jg-header-link" href={"/"}>
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="jg-header-link" href={"/Project"}>
                      Projects
                    </a>
                  </li>
                  <li>
                    <a className="jg-header-link" href={"/ContactUs"}>
                      Contect Us
                    </a>
                  </li>
                  <li>
                    <a className="jg-header-link" href={"/AboutUs"}>
                      About Us
                    </a>
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
