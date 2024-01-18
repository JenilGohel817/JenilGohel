import React from "react";
import JG from "../../assets/images/JG.jpg";
import linkedin from "../../assets/images/linkedin.png";
import github from "../../assets/images/github.png";
import instagram from "../../assets/images/instagram.png";
import twitter from "../../assets/images/twitter.png";
import Layout from "../../layouts/Layout";
import "./AboutUs.css";
import { Link } from "react-router-dom";

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
                          <Link
                            to="https://github.com/JenilGohel817"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="jg-soical-media-link"
                          >
                            <img alt="social-media" src={github} />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="https://www.linkedin.com/in/jenilgohel817/"
                            target="_blank"
                            className="jg-soical-media-link"
                            rel="noopener noreferrer"
                          >
                            <img alt="social-media" src={linkedin} />
                          </Link>
                        </li>
                        <li>
                          <Link
                            target="_blank"
                            to="https://twitter.com/JenilGohel817?t=X2acBvdcELd6m7RU41UQOA&s=09"
                            rel="noopener noreferrer"
                            className="jg-soical-media-link"
                          >
                            <img alt="social-media" src={twitter} />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="https://instagram.com/jenilgohel817?igshid=MzNlNGNkZWQ4Mg=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="jg-soical-media-link"
                          >
                            <img alt="social-media" src={instagram} />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="jg-about-box-btn">
                      <Link
                        className="jg-button jg-w100"
                        to="mailto:jenilgohel817@gmail.com"
                      >
                        Gmail
                      </Link>
                      <a className="jg-button jg-w100" href="tel:9054048791">
                        Contact Me
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
                      Professional and creative Software developers with more
                      than one and a half years of experience in providing
                      exceptional client experiences
                    </p>
                    <p className="jg-brief-info-para jg-brief-info-para-last">
                      The ability to work with technologies including HTML5,
                      CSS3, JavaScript, jQuery, AJAX, Redux, and Jinja2 as well
                      as knowledge of the Python and JavaScript programming
                      languages. being familiar with relational database systems
                      like MySQL, PostgreSQL, and mongodb
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
                      <div className="jg-experience-info-list">
                        <ul>
                          <li>
                            Front-End: React, Redux, HTML5, CSS3, JavaScript
                            (ES6+)
                          </li>
                          <li>
                            Back-End: Node.js, Express.js Database: MongoDB,
                            Mongoose
                          </li>
                          <li>RESTful API Development Responsive Web</li>
                          <li>Design Version Control: Git, GitHub/GitLab</li>
                          <li>
                            Skills: Redux · Node.js · React.js · JavaScript
                          </li>
                        </ul>
                      </div>
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
                      <div className="jg-experience-info-list">
                        <ul>
                          <li>ReactJs</li>
                          <li>NodeJs</li>
                          <li>C++</li>
                          <li>Data Structures</li>
                          <li>Algorithms</li>
                        </ul>
                      </div>
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
                      <div className="jg-experience-info-list">
                        <ul>
                          <li>Team Leadership</li>
                          <li>Team Building</li>
                          <li>Team Management</li>
                        </ul>
                      </div>
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
                      <div className="jg-experience-info-list">
                        <ul>
                          <li>Front-End Development</li>
                          <li>React.js</li>
                          <li>Web Development</li>
                          <li>Web Design</li>
                          <li>JavaScript</li>
                          <li>Django</li>
                          <li>jQuery</li>
                        </ul>
                      </div>
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
                      <div className="jg-experience-info-list">
                        <ul>
                          <li>Search Engine Optimization (SEO)</li>
                          <li>System Testing</li>
                          <li>Figma · Adobe Photoshop</li>
                          <li>Responsive Web Design</li>
                          <li>Problem Solving</li>
                        </ul>
                      </div>
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
                      <span className="jg-skills-percent">80%</span>
                      <h3 className="jg-skills-name">JavaScript</h3>
                    </div>
                    <div className="jg-skills">
                      <span className="jg-skills-percent">35%</span>
                      <h3 className="jg-skills-name">Python</h3>
                    </div>
                    <div className="jg-skills">
                      <span className="jg-skills-percent">75%</span>
                      <h3 className="jg-skills-name">ReactJs</h3>
                    </div>
                    <div className="jg-skills">
                      <span className="jg-skills-percent">75%</span>
                      <h3 className="jg-skills-name">NodeJs</h3>
                    </div>
                    <div className="jg-skills">
                      <span className="jg-skills-percent">70%</span>
                      <h3 className="jg-skills-name">MySql</h3>
                    </div>
                    <div className="jg-skills">
                      <span className="jg-skills-percent">70%</span>
                      <h3 className="jg-skills-name">MongoDB</h3>
                    </div>
                  </div>
                  <h2 className="jg-about-heading">PROJECTS</h2>
                  <div className="jg-experience">
                    <div className="jg-experience-wrap jg-experience-wrap-last">
                      <div className="jg-experience-year">
                        DEC 2021 - OCT 2022
                      </div>
                      <div className="jg-experience-designation">
                        complete 35+ projects
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
