import React, { useState } from "react";
import axios from "axios";
import Layout from "../../layouts/Layout.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./LoginFrom.css";

const LoginFrom = () => {
  const [loading, setLoading] = useState(false);
  const [LfEmail, setLfEmail] = useState("");
  const [Lfpassword, setLfPassword] = useState("");
  const navigate = useNavigate();

  const LoginSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const loginValue = {
        Email: LfEmail,
        Password: Lfpassword,
      };

      const data = await axios.post(
        `${process.env.REACT_APP_JGAPI_V1}/auth/login`,
        loginValue
      );

      if (data) {
        setLoading(false);
        localStorage.setItem("JG", "Jenil Gohel");
        toast.success(data.message);
        navigate("/");
      }
    } catch (error) {
      setLoading(false);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <>
      <Layout>
        <section className="jg-section">
          <div className="jg-container">
            <div className="jg-register-grid">
              <div className="jg-register-item">
                <div className="jg-heading-wrap">
                  <div className="jg-heading-subtitle">Login</div>
                  <h2>Help us get to know you:</h2>
                </div>
                <form
                  className="jg-contact-form"
                  method="post"
                  onSubmit={LoginSubmit}
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
                      onChange={(e) => {
                        setLfEmail(e.target.value);
                      }}
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
                      onChange={(e) => {
                        setLfPassword(e.target.value);
                      }}
                      type="password"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="jg-pt30 jg-text-right">
                    <button type="submit" className="jg-button">
                      {loading ? "Login..." : "Login"}
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

export default LoginFrom;
