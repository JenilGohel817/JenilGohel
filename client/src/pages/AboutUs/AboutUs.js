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
                      With over a year worth of expertise provide amazing
                      customer experiences, professional and creative Software
                      developers
                    </p>
                    <p className="jg-brief-info-para jg-brief-info-para-last">
                      with a passion Ability to work on technologies like HTML5,
                      CSS3, JavaScript, jQuery, AJAX, Jinja2 and knowledgeable
                      in the Python language, the Django framework, and the
                      React library. Knowledge of Relational Database Systems
                      such MySQL, PostgreSQL
                    </p>
                  </div>
                  <h2 className="jg-about-heading">EXPERIENCE</h2>
                  <div className="jg-experience">
                    <div className="jg-experience-wrap">
                      <div className="jg-experience-year">
                        FEB 2023 - PRESENT
                      </div>
                      <div className="jg-experience-designation">
                        Full Stack Developer
                      </div>
                      <div className="jg-experience-company">ZealousWeb</div>
                      <p className="jg-experience-info">
                        Front-End: React, Redux, HTML5, CSS3, JavaScript (ES6+)
                        Back-End: Node.js, Express.js Database: MongoDB,
                        Mongoose RESTful API Development Responsive Web Design
                        Version Control: Git, GitHub/GitLab Skills: Redux ·
                        Node.js · React.js · JavaScript
                      </p>
                    </div>
                    <div className="jg-experience-wrap">
                      <div className="jg-experience-year">
                        JUL 2022 - OCT 2022
                      </div>
                      <div className="jg-experience-designation">
                        Full Stack Developer Grade 3
                      </div>
                      <div className="jg-experience-company">
                        Evol Technobits Digital Pvt. Ltd.
                      </div>
                      <p className="jg-experience-info">
                        Skills: C++ · Data Structures · Algorithms · C
                        (Programming Language)
                      </p>
                    </div>
                    <div className="jg-experience-wrap">
                      <div className="jg-experience-year">
                        JUL 2022 - OCT 2022
                      </div>
                      <div className="jg-experience-designation">
                        Full Stack Developer Grade 2
                      </div>
                      <div className="jg-experience-company">
                        Evol Technobits Digital Pvt. Ltd.
                      </div>
                      <p className="jg-experience-info">
                        Skills: Team Leadership · Team Building · Team
                        Management
                      </p>
                    </div>
                    <div className="jg-experience-wrap">
                      <div className="jg-experience-year">
                        FEB 2022 - JUL 2022
                      </div>
                      <div className="jg-experience-designation">
                        Full Stack Developer Grade 1
                      </div>
                      <div className="jg-experience-company">
                        Evol Technobits Digital Pvt. Ltd.
                      </div>
                      <p className="jg-experience-info">
                        Skills: Front-End Development · React.js · Web
                        Development · Web Design · Responsive Web Design ·
                        JavaScript · Django · jQuery
                      </p>
                    </div>
                    <div className="jg-experience-wrap  jg-experience-wrap-last">
                      <div className="jg-experience-year">
                        DEC 2021 - FEB 2022
                      </div>
                      <div className="jg-experience-designation">
                        Full Stack Developer Internship
                      </div>
                      <div className="jg-experience-company">
                        Evol Technobits Digital Pvt. Ltd.
                      </div>
                      <p className="jg-experience-info">
                        Skills: Search Engine Optimization (SEO) · System
                        Testing · Figma · Adobe Photoshop · Web Design ·
                        Responsive Web Design · Problem Solving
                      </p>
                    </div>
                  </div>
                  <h2 className="jg-about-heading">AWARDS</h2>
                  <div className="jg-experience">
                    <div className="jg-experience-wrap">
                      <div className="jg-experience-year">
                        DEC 2021 - OCT 2022
                      </div>
                      <div className="jg-experience-designation">
                        Appreciation Letter
                      </div>
                      <div className="jg-experience-company">
                        Evol Technobits Digital Pvt. Ltd.
                      </div>
                      <p className="jg-experience-info">
                        Jenil Gohel has shown their quality of work in a recent
                        project for Evol Technobits Digital Pvt. Ltd
                      </p>
                    </div>
                    <div className="jg-experience-wrap jg-experience-wrap-last">
                      <div className="jg-experience-year">
                        DEC 2021 - OCT 2022
                      </div>
                      <div className="jg-experience-designation">
                        Increment Letter
                      </div>
                      <div className="jg-experience-company">
                        Evol Technobits Digital Pvt. Ltd.
                      </div>
                      <p className="jg-experience-info">
                        In Six Month I have 2 increment letter for my quality of
                        work
                      </p>
                    </div>
                  </div>
                  <h2 className="jg-about-heading">EDUCATION</h2>
                  <div className="jg-experience">
                    <div className="jg-experience-wrap">
                      <div className="jg-experience-year">
                        JAN 2015 - DEC 2016
                      </div>
                      <div className="jg-experience-designation">
                        Shree P.V Doshi Vidyalay
                      </div>
                      <div className="jg-experience-company">SSC</div>
                      <p className="jg-experience-info">Percentage - 62.27%</p>
                    </div>
                    <div className="jg-experience-wrap">
                      <div className="jg-experience-year">
                        JAN 2017 - DEC 2018
                      </div>
                      <div className="jg-experience-designation">
                        Shree P.V Doshi Vidyalay
                      </div>
                      <div className="jg-experience-company">HSC</div>
                      <p className="jg-experience-info">Percentage - 50.54%</p>
                    </div>
                    <div className="jg-experience-wrap jg-experience-wrap-last">
                      <div className="jg-experience-year">
                        DEC 2018 - JAN 2021
                      </div>
                      <div className="jg-experience-designation">
                        Adarsh Educational Campus
                      </div>
                      <div className="jg-experience-company">BCA</div>
                      <p className="jg-experience-info">Percentage - 61%</p>
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
                      <span className="jg-skills-percent">50%</span>
                      <h3 className="jg-skills-name">Python</h3>
                      <p>Non enim praesent</p>
                    </div>
                    <div className="jg-skills">
                      <span className="jg-skills-percent">85%</span>
                      <h3 className="jg-skills-name">ReactJs</h3>
                      <p>Non enim praesent</p>
                    </div>
                    <div className="jg-skills">
                      <span className="jg-skills-percent">85%</span>
                      <h3 className="jg-skills-name">NodeJs</h3>
                      <p>Non enim praesent</p>
                    </div>
                    <div className="jg-skills">
                      <span className="jg-skills-percent">85%</span>
                      <h3 className="jg-skills-name">MySql</h3>
                      <p>Non enim praesent</p>
                    </div>
                    <div className="jg-skills">
                      <span className="jg-skills-percent">85%</span>
                      <h3 className="jg-skills-name">MongoDB</h3>
                      <p>Non enim praesent</p>
                    </div>
                  </div>
                  <h2 className="jg-about-heading">PROJECTS</h2>
                  <div className="jg-experience">
                    <div className="jg-experience-wrap jg-experience-wrap-last">
                      <div className="jg-experience-year">
                        DEC 2021 - OCT 2022
                      </div>
                      <div className="jg-experience-designation">
                        complete 25+ projects
                      </div>
                      <div className="jg-experience-company">
                        ReactJs, NodeJs, Django, Python, MySql, MongoDB
                      </div>
                      <p className="jg-experience-info">
                        portfolio site, E-commerce site, Python projects, Django
                        Web Projects
                      </p>
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
