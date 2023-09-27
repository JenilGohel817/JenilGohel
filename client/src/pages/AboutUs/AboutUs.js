import React from "react";
import JG from "../../assets/images/JG.jpg";
import Layout from "../../layouts/Layout";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <Layout>
        <section className="jg-section">
          <div className="jg-container">
            <div className="jg-about-wrapper">
              <div className="jg-about-flex">
                <div className="jg-about-flex-item jg-about-flex-item-first">
                  <div className="jg-about-box">
                    <div className="jg-about-box-image-wrap">
                      <img
                        className="jg-about-box-image"
                        src={JG}
                        alt="Jenil Gohel"
                      />
                    </div>
                    <div className="jg-about-box-info">
                      <h1>Jenil Gohel</h1>
                      <p>@jenilGohel817</p>
                    </div>
                    <div className="jg-about-box-social-links">
                      <ul>
                        <li>
                          <a href>J</a>
                        </li>
                        <li>
                          <a href>E</a>
                        </li>
                        <li>
                          <a href>N</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="jg-about-flex-item jg-about-flex-item-last">
                  <div>
                    <h2>ABOUT ME</h2>
                    <p>
                      I'm a passionate and highly skilled software developer
                      with a deep love for all things code. My journey in the
                      world of software development began with a fascination for
                      turning lines of logic into powerful, user-friendly
                      applications. Over the years, I've honed my skills and
                      gained invaluable experience in crafting robust,
                      efficient, and innovative software solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AboutUs;
