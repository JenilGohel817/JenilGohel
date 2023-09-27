import React from "react";
import "./Contact.css";
import Layout from "../../layouts/Layout.js";

const Contact = () => {
  return (
    <>
      <Layout>
        <section className="jg-section">
          <div className="jg-container">
            <div className="jg-contact-grid">
              <div className="jg-contact-grid-item">
                <form className="jg-contact-form">
                  <div className="form-grid">
                    <div className="form-grid-item">
                      <label for="first" className="input-label">
                        First Name *
                      </label>
                      <input
                        className="form-input"
                        type="text"
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="form-grid-item">
                      <label for="last" className="input-label">
                        Last Name *
                      </label>
                      <input
                        className="form-input"
                        type="text"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-grid-item jg-pt30">
                    <label for="email" className="input-label">
                      Email *
                    </label>
                    <input
                      className="form-input"
                      type="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="form-grid-item jg-pt30">
                    <label for="project" className="input-label">
                      Project details
                    </label>
                    <textarea
                      className="form-input form-input-textarea"
                      placeholder="Enter any project specific details..."
                    />
                  </div>
                  <div className="jg-pt30 jg-text-right">
                    <button type="submit" className="jg-button">
                      Send
                    </button>
                  </div>
                </form>
              </div>
              <div className="jg-contact-grid-item jg-contact-grid-item-last">
                <div className="jg-text-center jg-contact-wrap">
                  <h3 className="jg-contact-heading">
                    What do you need help with?
                  </h3>
                  <p>Help us get to know you:</p>
                </div>
                <div className="jg-project-info-wrap jg-pt30">
                  <div className="jg-project-info">Javascript</div>
                  <div className="jg-project-info">Reactjs</div>
                  <div className="jg-project-info">Nodejs</div>
                  <div className="jg-project-info">Graphic Design</div>
                  <div className="jg-project-info">SEO</div>
                  <div className="jg-project-info">Web Design</div>
                  <div className="jg-project-info">QA Testing</div>
                  <div className="jg-project-info">UX/UI</div>
                  <div className="jg-project-info">Mysql</div>
                  <div className="jg-project-info">Mongodb</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
