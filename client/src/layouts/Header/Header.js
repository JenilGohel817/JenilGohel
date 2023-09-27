import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="jg-header">
        <div className="jg-container">
          <div className="jg-header-wrapper">
            <div className="jg-header-menu jg-dflex">
              <div className="jg-header-menu-left">
                <a href={"/"} className="jg-logo">
                  <span className="jg-span">JG</span>
                </a>
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
                    <a className="jg-header-link" href={"/Contact"}>
                      Contect Us
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
