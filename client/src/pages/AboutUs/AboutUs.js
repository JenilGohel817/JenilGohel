import React from "react";
import JG from "../../assets/images/JG.jpg";
import linkedin from "../../assets/images/linkedin.png";
import github from "../../assets/images/github.png";
import instagram from "../../assets/images/instagram.png";
import twitter from "../../assets/images/twitter.png";
import Layout from "../../layouts/Layout";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <Layout>
        <section className="jg-section">
          <div className="jg-container">
            <div className="jg-heading-wrap">
              <div className="jg-heading-subtitle">About Us</div>
              <h2>Portfolio Information</h2>
            </div>
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
                      <h2 className="jg-about-box-info-heading">Jenil Gohel</h2>
                      <p>@jenilGohel817</p>
                    </div>
                    <div className="jg-about-box-social-links">
                      <ul>
                        <li>
                          <a
                            href="https://github.com/JenilGohel817"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="jg-soical-media-link"
                          >
                            <img alt="social-media" src={github} />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/in/jenilgohel817/"
                            target="_blank"
                            className="jg-soical-media-link"
                            rel="noopener noreferrer"
                          >
                            <img alt="social-media" src={linkedin} />
                          </a>
                        </li>
                        <li>
                          <a href className="jg-soical-media-link">
                            <img alt="social-media" src={twitter} />
                          </a>
                        </li>
                        <li>
                          <a href className="jg-soical-media-link">
                            <img alt="social-media" src={instagram} />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="jg-about-box-btn">
                      <a className="jg-button jg-w100" href={"/ContactUs"}>
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
                <div className="jg-about-flex-item jg-about-flex-item-last">
                  <h2 className="jg-about-heading jg-about-heading-first">
                    ABOUT ME
                  </h2>
                  <div className="jg-brief-info">
                    <p className="jg-brief-info-para">
                      I'm a passionate and highly skilled software developer
                      with a deep love for all things code. My journey in the
                      world of software development began with a fascination for
                      turning lines of logic into powerful, user-friendly
                      applications. Over the years, I've honed my skills and
                      gained invaluable experience in crafting robust,
                      efficient, and innovative software solutions.
                    </p>
                    <p className="jg-brief-info-para jg-brief-info-para-last">
                      I'm a passionate and highly skilled software developer
                      with a deep love for all things code. My journey in the
                      world of software development began with a fascination for
                      turning lines of logic into powerful, user-friendly
                      applications. Over the years, I've honed my skills and
                      gained invaluable experience in crafting robust,
                      efficient, and innovative software solutions.
                    </p>
                  </div>
                  <h2 className="jg-about-heading">EXPERIENCE</h2>
                  <div className="jg-experience">
                    <div className="jg-experience-wrap">
                      <div className="jg-experience-year">2007 - 2017</div>
                      <div className="jg-experience-designation">
                        Framer Designer & Developer
                      </div>
                      <div className="jg-experience-company">
                        Bluebase Designs
                      </div>
                      <p className="jg-experience-info">
                        Sit amet luctussd fav venenatis, lectus magna fringilla
                        inis urna, porttitor rhoncus dolor purus non enim
                        praesent in elementum sahas facilisis leo, vel fringilla
                        est ullamcorper eget nulla facilisi etisam dignissim
                        diam quis enim lobortis viverra orci sagittis eu
                        volutpat odio facilisis mauris sit.
                      </p>
                    </div>
                    <div className="jg-experience-wrap">
                      <div className="jg-experience-year">2007 - 2017</div>
                      <div className="jg-experience-designation">
                        Framer Designer & Developer
                      </div>
                      <div className="jg-experience-company">
                        Bluebase Designs
                      </div>
                      <p className="jg-experience-info">
                        Sit amet luctussd fav venenatis, lectus magna fringilla
                        inis urna, porttitor rhoncus dolor purus non enim
                        praesent in elementum sahas facilisis leo, vel fringilla
                        est ullamcorper eget nulla facilisi etisam dignissim
                        diam quis enim lobortis viverra orci sagittis eu
                        volutpat odio facilisis mauris sit.
                      </p>
                    </div>
                    <div className="jg-experience-wrap jg-experience-wrap-last">
                      <div className="jg-experience-year">2007 - 2017</div>
                      <div className="jg-experience-designation">
                        Framer Designer & Developer
                      </div>
                      <div className="jg-experience-company">
                        Bluebase Designs
                      </div>
                      <p className="jg-experience-info">
                        Sit amet luctussd fav venenatis, lectus magna fringilla
                        inis urna, porttitor rhoncus dolor purus non enim
                        praesent in elementum sahas facilisis leo, vel fringilla
                        est ullamcorper eget nulla facilisi etisam dignissim
                        diam quis enim lobortis viverra orci sagittis eu
                        volutpat odio facilisis mauris sit.
                      </p>
                    </div>
                  </div>
                  <h2 className="jg-about-heading">EDUCATION</h2>
                  <div className="jg-experience">
                    <div className="jg-experience-wrap">
                      <div className="jg-experience-year">2007 - 2017</div>
                      <div className="jg-experience-designation">
                        Framer Designer & Developer
                      </div>
                      <div className="jg-experience-company">
                        Bluebase Designs
                      </div>
                      <p className="jg-experience-info">
                        Sit amet luctussd fav venenatis, lectus magna fringilla
                        inis urna, porttitor rhoncus dolor purus non enim
                        praesent in elementum sahas facilisis leo, vel fringilla
                        est ullamcorper eget nulla facilisi etisam dignissim
                        diam quis enim lobortis viverra orci sagittis eu
                        volutpat odio facilisis mauris sit.
                      </p>
                    </div>
                    <div className="jg-experience-wrap">
                      <div className="jg-experience-year">2007 - 2017</div>
                      <div className="jg-experience-designation">
                        Framer Designer & Developer
                      </div>
                      <div className="jg-experience-company">
                        Bluebase Designs
                      </div>
                      <p className="jg-experience-info">
                        Sit amet luctussd fav venenatis, lectus magna fringilla
                        inis urna, porttitor rhoncus dolor purus non enim
                        praesent in elementum sahas facilisis leo, vel fringilla
                        est ullamcorper eget nulla facilisi etisam dignissim
                        diam quis enim lobortis viverra orci sagittis eu
                        volutpat odio facilisis mauris sit.
                      </p>
                    </div>
                    <div className="jg-experience-wrap jg-experience-wrap-last">
                      <div className="jg-experience-year">2007 - 2017</div>
                      <div className="jg-experience-designation">
                        Framer Designer & Developer
                      </div>
                      <div className="jg-experience-company">
                        Bluebase Designs
                      </div>
                      <p className="jg-experience-info">
                        Sit amet luctussd fav venenatis, lectus magna fringilla
                        inis urna, porttitor rhoncus dolor purus non enim
                        praesent in elementum sahas facilisis leo, vel fringilla
                        est ullamcorper eget nulla facilisi etisam dignissim
                        diam quis enim lobortis viverra orci sagittis eu
                        volutpat odio facilisis mauris sit.
                      </p>
                    </div>
                  </div>
                  <h2 className="jg-about-heading">SKILLS</h2>
                  <div className="jg-skills-wrap">
                    <div className="jg-skills">
                      <span className="jg-skills-percent">85%</span>
                      <h3 className="jg-skills-name">JavaScript</h3>
                      <p>Non enim praesent</p>
                    </div>
                    <div className="jg-skills">
                      <span className="jg-skills-percent">85%</span>
                      <h3 className="jg-skills-name">Python</h3>
                      <p>Non enim praesent</p>
                    </div>
                    <div className="jg-skills">
                      <span className="jg-skills-percent">85%</span>
                      <h3 className="jg-skills-name">Figma</h3>
                      <p>Non enim praesent</p>
                    </div>
                    <div className="jg-skills">
                      <span className="jg-skills-percent">85%</span>
                      <h3 className="jg-skills-name">React</h3>
                      <p>Non enim praesent</p>
                    </div>
                    <div className="jg-skills">
                      <span className="jg-skills-percent">85%</span>
                      <h3 className="jg-skills-name">Node</h3>
                      <p>Non enim praesent</p>
                    </div>
                    <div className="jg-skills">
                      <span className="jg-skills-percent">85%</span>
                      <h3 className="jg-skills-name">Adobe XD</h3>
                      <p>Non enim praesent</p>
                    </div>
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
