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
                <div className="jg-heading-wrap">
                  <div className="jg-heading-subtitle">
                    You’re in good hands
                  </div>
                  <h2>Help us get to know you:</h2>
                </div>
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
            </div>
          </div>
        </section>
        <section className="jg-section">
          <div className="jg-container">
            <div className="jg-heading-wrap">
              <div className="jg-heading-subtitle">
                What do you need help with?
              </div>
              <h2>Help us get to know you:</h2>
            </div>
            <div className="jg-project-info-wrap">
              <div className="jg-project-info">Javascript</div>
              <div className="jg-project-info">Reactjs</div>
              <div className="jg-project-info">Nodejs</div>
              <div className="jg-project-info">Graphic Design</div>
              <div className="jg-project-info">SEO</div>
              <div className="jg-project-info">Web Design</div>
              <div className="jg-project-info">UX/UI</div>
              <div className="jg-project-info">Mysql</div>
              <div className="jg-project-info">Mongodb</div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
