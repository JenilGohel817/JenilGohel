import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="jg-header">
        <div className="jg-container">
          <div className="jg-header-wrapper">
            <div className="jg-header-menu jg-dflex">
              <div className="jg-header-menu-left">
                <div className="jg-logo">
                  J<span className="jg-span">E</span>N
                  <span className="jg-span">I</span>L
                </div>
              </div>
              <div className="jg-header-menu-right">
                <ul>
                  <li>
                    <a className="jg-header-link" href>
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="jg-header-link" href>
                      Projects
                    </a>
                  </li>
                  <li>
                    <a className="jg-header-link" href>
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
