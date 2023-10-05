import React, { useState } from "react";
import "./Contact.css";
import axios from "axios";
import Layout from "../../layouts/Layout.js";
import { toast } from "react-toastify";

const Contact = () => {
  const [Form, setForm] = useState(false);
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [ProjectDetail, setProjectDetail] = useState("");

  const contactSubmit = async (e) => {
    e.preventDefault();

    try {
      const contactForm = {
        FirstName: FirstName,
        LastName: LastName,
        Email: Email,
        ProjectDetail: ProjectDetail,
      };
      setForm(true);

      await axios
        .post(`http://localhost:8080/api/v1/contactCreate`, contactForm)
        .then((data) => {
          toast.success(data.data.message);
        })
        .catch((error) => {
          toast.error(error.message);
        });

      setForm(false);
    } catch (error) {
      if (error) throw error;
      toast.error(error);
    }
  };

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
                <form
                  className="jg-contact-form"
                  method="post"
                  encType="multipart/form-data"
                  onSubmit={contactSubmit}
                >
                  <div className="form-grid">
                    <div className="form-grid-item">
                      <label htmlFor="FirstName" className="input-label">
                        First Name *
                      </label>
                      <input
                        className="form-input"
                        type="text"
                        name="FirstName"
                        onChange={(e) => {
                          setFirstName(e.target.value);
                        }}
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="form-grid-item">
                      <label htmlFor="LastName" className="input-label">
                        Last Name *
                      </label>
                      <input
                        className="form-input"
                        type="text"
                        name="LastName"
                        onChange={(e) => {
                          setLastName(e.target.value);
                        }}
                        placeholder="Last Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-grid-item jg-pt30">
                    <label htmlFor="Email" className="input-label">
                      Email *
                    </label>
                    <input
                      className="form-input"
                      name="Email"
                      type="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="form-grid-item jg-pt30">
                    <label htmlFor="ProjectDetail" className="input-label">
                      Project details
                    </label>
                    <textarea
                      onChange={(e) => {
                        setProjectDetail(e.target.value);
                      }}
                      name="ProjectDetail"
                      className="form-input form-input-textarea"
                      placeholder="Enter any project specific details..."
                    />
                  </div>
                  <div className="jg-pt30 jg-text-right">
                    <button type="submit" className="jg-button">
                      {Form ? "Sending..." : "Send"}
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
