import Layout from "../../layouts/Layout.js";
import JG from "../../assets/images/JG.jpg";
import "./Home.css";
import { Link } from "react-router-dom";

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
              <Link to={"/Project"} className="jg-button">
                Projects
              </Link>
            </div>
            <div className="jg-hero-info jg-py">
              <div className="jg-grid">
                <div className="jg-grid-item jg-grid-order-2 jg-text-left">
                  <div className="jg-info-item">
                    <h6 className="jg-info-heading jg-heading">
                      Early Beginnings
                    </h6>
                    <p className="jg-info-paragraph">
                      Our software developer's journey begins in a small town,
                      where a young child's fascination with computers and
                      technology first takes root. From early experiments with
                      programming languages to building rudimentary websites,
                      their curiosity and passion for software development
                      become evident.
                    </p>
                  </div>
                  <div className="jg-info-item">
                    <h6 className="jg-info-heading jg-heading">
                      The Educational Odyssey
                    </h6>
                    <p className="jg-info-paragraph">
                      As the years pass, our protagonist embarks on an
                      educational journey, pursuing a degree in computer
                      science. This chapter delves into their academic
                      experiences, exploring the challenges they faced, the
                      mentors who inspired them, and the foundational knowledge
                      they acquired.
                    </p>
                  </div>
                  <div className="jg-info-item jg-info-item-last">
                    <h6 className="jg-info-heading jg-heading">
                      The Entry into the Industry
                    </h6>
                    <p className="jg-info-paragraph">
                      Fresh out of college, our software developer takes their
                      first steps into the professional world of software
                      development. They navigate the job market, land their
                      first job, and learn the ropes of real-world coding,
                      collaborating with colleagues and contributing to
                      projects.
                    </p>
                  </div>
                </div>
                <div className="jg-grid-item jg-grid-order-1">
                  <div className="jg-info-image-wrapper">
                    <div className="jg-info-image jg-pr">
                      <img src={JG} alt="JenilGohel" />
                      <div className="jg-d-none jg-svg-dot jg-svg-dot-one">
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
                      <div className="jg-d-none jg-svg-dot jg-svg-dot-two">
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
                      <div className="jg-d-none jg-svg-dot jg-svg-dot-three">
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
                      <div className="jg-d-none jg-svg-dot jg-svg-dot-four">
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
                    <Link to={"/AboutUs"} className="jg-button">
                      portfolio details
                    </Link>
                  </div>
                </div>
                <div className="jg-grid-item jg-grid-order-3 jg-text-right">
                  <div className="jg-info-item">
                    <h6 className="jg-info-heading jg-heading">
                      Building Blocks of Expertise
                    </h6>
                    <p className="jg-info-paragraph">
                      This chapter highlights our developer's dedication to
                      honing their craft. They dive deep into various
                      programming languages, frameworks, and tools, gradually
                      mastering the skills needed to become an expert in their
                      field.
                    </p>
                  </div>
                  <div className="jg-info-item">
                    <h6 className="jg-info-heading jg-heading">
                      Mentorship and Giving Back
                    </h6>
                    <p className="jg-info-paragraph">
                      As our software developer gains experience, they recognize
                      the importance of giving back to the community. They
                      become a mentor, sharing their knowledge and expertise
                      with the next generation of developers, and may get
                      involved in open-source projects.
                    </p>
                  </div>
                  <div className="jg-info-item jg-info-item-last">
                    <h6 className="jg-info-heading jg-heading">
                      The Future of Software Development
                    </h6>
                    <p className="jg-info-paragraph">
                      As our protagonist's career progresses, they reflect on
                      the ever-evolving landscape of software development. This
                      chapter explores their thoughts on emerging technologies,
                      trends, and the future of the industry.
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

export default Home;
