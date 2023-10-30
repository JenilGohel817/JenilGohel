import React from "react";
import "./registerFrom.css";
import Layout from "../../layouts/Layout.js";

const registerFrom = () => {
  return (
    <>
      <Layout>
        <section className="jg-section">
          <div className="jg-container">
            <div className="jg-register-grid">
              <div className="jg-register-item">
                <div className="jg-heading-wrap">
                  <div className="jg-heading-subtitle">Register</div>
                  <h2>Help us get to know you:</h2>
                </div>
                <form
                  className="jg-contact-form"
                  method="post"
                  encType="multipart/form-data"
                >
                  <div className="form-grid-item">
                    <label htmlFor="Email" className="input-label">
                      Email
                    </label>
                    <input
                      className="form-input"
                      name="Email"
                      type="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="form-grid-item jg-pt30">
                    <label htmlFor="Password" className="input-label">
                      Password
                    </label>
                    <input
                      className="form-input"
                      name="Password"
                      type="number"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="form-grid-item jg-pt30">
                    <label htmlFor="forgetPassword" className="input-label">
                      Forget Password
                    </label>
                  </div>
                  <div className="jg-pt30 jg-text-right">
                    <button type="submit" className="jg-button">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default registerFrom;
