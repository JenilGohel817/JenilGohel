import React from "react";
import JG from "../../assets/images/JG.jpg";
import Layout from "../../layouts/Layout";

const Project = () => {
  return (
    <>
      <Layout>
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

export default Project;
