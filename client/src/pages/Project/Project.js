import React from "react";
import Layout from "../../layouts/Layout";
import "./Project.css";
import Github from "../../assets/images/projects/Github.png";
import NodeJs from "../../assets/images/projects/Nodejs.png";
import Abstract from "../../assets/images/projects/Abstract.png";
import JG from "../../assets/images/projects/JG.png";
import Construction from "../../assets/images/projects/Construction.png";
import Evol from "../../assets/images/projects/Evol.png";
import Food from "../../assets/images/projects/Food.png";
import Furthest from "../../assets/images/projects/Furthest.png";
import Hiking from "../../assets/images/projects/Hiking.png";
import KJK from "../../assets/images/projects/KJK.png";
import Market from "../../assets/images/projects/Market.png";
import Metallic from "../../assets/images/projects/Metallic.png";
import Netflix from "../../assets/images/projects/Netflix.png";
import Space from "../../assets/images/projects/Space.png";

const Project = () => {
  return (
    <>
      <Layout>
        <section className="jg-section">
          <div className="jg-container">
            <div className="jg-heading-wrap">
              <div className="jg-heading-subtitle">Projects</div>
              <h2>All Projects</h2>
            </div>
            <div className="jg-grid jg-grid-four">
              <div className="jg-project-card-wrap">
                <a
                  href="https://github.com/JenilGohel817"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="jg-project-card"
                >
                  <div className="jg-project-image-wrap">
                    <img
                      className="jg-project-image"
                      src={Github}
                      alt="Github"
                    />
                  </div>
                  <div className="jg-project-hover"></div>
                  <div className="jg-project-name">Github</div>
                  <div className="jg-project-position">Projects</div>
                </a>
              </div>
              <div className="jg-project-card-wrap">
                <a
                  href="https://jenil-gohel.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="jg-project-card"
                >
                  <div className="jg-project-image-wrap">
                    <img className="jg-project-image" src={JG} alt="JG" />
                  </div>
                  <div className="jg-project-hover"></div>
                  <div className="jg-project-name">Jenil Gohel</div>
                  <div className="jg-project-position">Portfolio</div>
                </a>
              </div>
              <div className="jg-project-card-wrap">
                <a
                  href="https://metallic.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="jg-project-card"
                >
                  <div className="jg-project-image-wrap">
                    <img
                      className="jg-project-image"
                      src={Metallic}
                      alt="Metallic"
                    />
                  </div>
                  <div className="jg-project-hover"></div>
                  <div className="jg-project-name">Metallic</div>
                  <div className="jg-project-position">Cloud</div>
                </a>
              </div>

              <div className="jg-project-card-wrap">
                <a
                  href="https://evolnetwork.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="jg-project-card"
                >
                  <div className="jg-project-image-wrap">
                    <img className="jg-project-image" src={Evol} alt="Evol" />
                  </div>
                  <div className="jg-project-hover"></div>
                  <div className="jg-project-name">Evol Network</div>
                  <div className="jg-project-position">Crypto</div>
                </a>
              </div>
              <div className="jg-project-card-wrap">
                <a
                  href="https://marketrill.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="jg-project-card"
                >
                  <div className="jg-project-image-wrap">
                    <img
                      className="jg-project-image"
                      src={Market}
                      alt="Market"
                    />
                  </div>
                  <div className="jg-project-hover"></div>
                  <div className="jg-project-name">Marketrill</div>
                  <div className="jg-project-position">Crypto</div>
                </a>
              </div>
              <div className="jg-project-card-wrap">
                <a
                  href="https://github.com/JenilGohel817/Node"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="jg-project-card"
                >
                  <div className="jg-project-image-wrap">
                    <img
                      className="jg-project-image"
                      src={NodeJs}
                      alt="Space"
                    />
                  </div>
                  <div className="jg-project-hover"></div>
                  <div className="jg-project-name">NodeJs</div>
                  <div className="jg-project-position">Backend</div>
                </a>
              </div>
              <div className="jg-project-card-wrap">
                <a href={"/"} className="jg-project-card">
                  <div className="jg-project-image-wrap">
                    <img
                      className="jg-project-image"
                      src={Abstract}
                      alt="Abstract"
                    />
                  </div>
                  <div className="jg-project-hover"></div>
                  <div className="jg-project-name">Abstract</div>
                  <div className="jg-project-position">Agency</div>
                </a>
              </div>
              <div className="jg-project-card-wrap">
                <a href={"/"} className="jg-project-card">
                  <div className="jg-project-image-wrap">
                    <img
                      className="jg-project-image"
                      src={Construction}
                      alt="JenilGohel"
                    />
                  </div>
                  <div className="jg-project-hover"></div>
                  <div className="jg-project-name">Construction</div>
                  <div className="jg-project-position">Construction</div>
                </a>
              </div>
              <div className="jg-project-card-wrap">
                <a href={"/"} className="jg-project-card">
                  <div className="jg-project-image-wrap">
                    <img className="jg-project-image" src={Food} alt="Food" />
                  </div>
                  <div className="jg-project-hover"></div>
                  <div className="jg-project-name">Food</div>
                  <div className="jg-project-position">Food</div>
                </a>
              </div>
              <div className="jg-project-card-wrap">
                <a href={"/"} className="jg-project-card">
                  <div className="jg-project-image-wrap">
                    <img
                      className="jg-project-image"
                      src={Furthest}
                      alt="Furthest"
                    />
                  </div>
                  <div className="jg-project-hover"></div>
                  <div className="jg-project-name">Furthest</div>
                  <div className="jg-project-position">Construction</div>
                </a>
              </div>
              <div className="jg-project-card-wrap">
                <a href={"/"} className="jg-project-card">
                  <div className="jg-project-image-wrap">
                    <img
                      className="jg-project-image"
                      src={Hiking}
                      alt="Hiking"
                    />
                  </div>
                  <div className="jg-project-hover"></div>
                  <div className="jg-project-name">Hiking</div>
                  <div className="jg-project-position">Travelling</div>
                </a>
              </div>
              <div className="jg-project-card-wrap">
                <a href={"/"} className="jg-project-card">
                  <div className="jg-project-image-wrap">
                    <img
                      className="jg-project-image"
                      src={KJK}
                      alt="JenilGohel"
                    />
                  </div>
                  <div className="jg-project-hover"></div>
                  <div className="jg-project-name">KJK</div>
                  <div className="jg-project-position">Travelling</div>
                </a>
              </div>

              <div className="jg-project-card-wrap">
                <a href={"/"} className="jg-project-card">
                  <div className="jg-project-image-wrap">
                    <img
                      className="jg-project-image"
                      src={Netflix}
                      alt="Netflix"
                    />
                  </div>
                  <div className="jg-project-hover"></div>
                  <div className="jg-project-name">Netflix</div>
                  <div className="jg-project-position">Streaming</div>
                </a>
              </div>
              <div className="jg-project-card-wrap">
                <a href={"/"} className="jg-project-card">
                  <div className="jg-project-image-wrap">
                    <img className="jg-project-image" src={Space} alt="Space" />
                  </div>
                  <div className="jg-project-hover"></div>
                  <div className="jg-project-name">Space</div>
                  <div className="jg-project-position">Management</div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Project;
