import Layout from "../../layouts/Layout.js";
import JG from "../../assets/images/JG.jpg";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Layout>
        <section className="jg-section">
          <div className="jg-container">
            <div className="jg-hero-title">
              <h1>
                <span className="jg-span">Jenil Gohel</span> Software Developer
                Engineer Based in India
              </h1>
              <a href className="jg-button">
                Resume
              </a>
            </div>
            <div className="jg-hero-info jg-py">
              <div className="jg-grid">
                <div className="jg-grid-item jg-grid-order-2 jg-text-left">
                  <div className="jg-info-item">
                    <h6 className="jg-info-heading jg-heading">Biography</h6>
                    <p className="jg-info-paragraph">
                      Work for money and design for love! I’m Bruno, an UI/UX
                      Interaction Designer based in Poland.
                    </p>
                  </div>
                  <div className="jg-info-item">
                    <h6 className="jg-info-heading jg-heading">Biography</h6>
                    <p className="jg-info-paragraph">
                      Work for money and design for love! I’m Bruno, an UI/UX
                      Interaction Designer based in Poland.
                    </p>
                  </div>
                  <div className="jg-info-item jg-info-item-last">
                    <h6 className="jg-info-heading jg-heading">Biography</h6>
                    <p className="jg-info-paragraph">
                      Work for money and design for love! I’m Bruno, an UI/UX
                      Interaction Designer based in Poland.
                    </p>
                  </div>
                </div>
                <div className="jg-grid-item jg-grid-order-1">
                  <div className="jg-info-image-wrapper">
                    <div className="jg-info-image jg-pr">
                      <img src={JG} alt="JenilGohel" />
                      <div className="jg-svg-dot jg-svg-dot-one">
                        <svg
                          width="7"
                          height="7"
                          viewBox="0 0 7 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width="6"
                            height="6"
                            fill="white"
                            stroke="#1961FE"
                          />
                        </svg>
                      </div>
                      <div className="jg-svg-dot jg-svg-dot-two">
                        <svg
                          width="7"
                          height="7"
                          viewBox="0 0 7 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width="6"
                            height="6"
                            fill="white"
                            stroke="#1961FE"
                          />
                        </svg>
                      </div>
                      <div className="jg-svg-dot jg-svg-dot-three">
                        <svg
                          width="7"
                          height="7"
                          viewBox="0 0 7 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width="6"
                            height="6"
                            fill="white"
                            stroke="#1961FE"
                          />
                        </svg>
                      </div>
                      <div className="jg-svg-dot jg-svg-dot-four">
                        <svg
                          width="7"
                          height="7"
                          viewBox="0 0 7 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width="6"
                            height="6"
                            fill="white"
                            stroke="#1961FE"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="jg-button-wrapper">
                    <a href className="jg-button">
                      portfolio details
                    </a>
                  </div>
                </div>
                <div className="jg-grid-item jg-grid-order-3 jg-text-right">
                  <div className="jg-info-item">
                    <h6 className="jg-info-heading jg-heading">Biography</h6>
                    <p className="jg-info-paragraph">
                      Work for money and design for love! I’m Bruno, an UI/UX
                      Interaction Designer based in Poland.
                    </p>
                  </div>
                  <div className="jg-info-item">
                    <h6 className="jg-info-heading jg-heading">Biography</h6>
                    <p className="jg-info-paragraph">
                      Work for money and design for love! I’m Bruno, an UI/UX
                      Interaction Designer based in Poland.
                    </p>
                  </div>
                  <div className="jg-info-item jg-info-item-last">
                    <h6 className="jg-info-heading jg-heading">Biography</h6>
                    <p className="jg-info-paragraph">
                      Work for money and design for love! I’m Bruno, an UI/UX
                      Interaction Designer based in Poland.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="jg-section">
          <div className="jg-container">
            <div className="jg-grid jg-grid-four">
              <div className="jg-project-card-wrap">
                <a href className="jg-project-card">
                  <div className="jg-project-image-wrap">
                    <img
                      className="jg-project-image"
                      src={JG}
                      alt="JenilGohel"
                    />
                  </div>
                  <div className="jg-project-hover"></div>
                  <div className="jg-project-name">Jenil Gohel</div>
                  <div className="jg-project-position">Portfolio</div>
                </a>
              </div>
              <div className="jg-project-card-wrap">
                <a href className="jg-project-card">
                  <div className="jg-project-image-wrap">
                    <img
                      className="jg-project-image"
                      src={JG}
                      alt="JenilGohel"
                    />
                  </div>
                  <div className="jg-project-hover"></div>
                  <div className="jg-project-name">Jenil Gohel</div>
                  <div className="jg-project-position">Portfolio</div>
                </a>
              </div>
              <div className="jg-project-card-wrap">
                <a href className="jg-project-card">
                  <div className="jg-project-image-wrap">
                    <img
                      className="jg-project-image"
                      src={JG}
                      alt="JenilGohel"
                    />
                  </div>
                  <div className="jg-project-hover"></div>
                  <div className="jg-project-name">Jenil Gohel</div>
                  <div className="jg-project-position">Portfolio</div>
                </a>
              </div>
              <div className="jg-project-card-wrap">
                <a href className="jg-project-card">
                  <div className="jg-project-image-wrap">
                    <img
                      className="jg-project-image"
                      src={JG}
                      alt="JenilGohel"
                    />
                  </div>
                  <div className="jg-project-hover"></div>
                  <div className="jg-project-name">Jenil Gohel</div>
                  <div className="jg-project-position">Portfolio</div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
