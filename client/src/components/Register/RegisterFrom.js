import React, { useState } from "react";
import "./RegisterFrom.css";
import axios from "axios";
import Layout from "../../layouts/Layout.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const RegisterFrom = () => {
  const [loading, setLoading] = useState(false);
  const [Rfpassword, setRfPassword] = useState("");
  const [RfEmail, setRfEmail] = useState("");
  const [RfRole, setRfRole] = useState("User");
  const navigate = useNavigate();

  const RegisterSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const registerValue = {
        Email: RfEmail,
        Password: Rfpassword,
        Role: RfRole,
      };

      const data = await axios.post(
        `${process.env.REACT_APP_JGAPI_V1}/auth/register`,
        registerValue
      );

      if (data?.data?.success) {
        toast.success(data.data.message);
        setLoading(false);
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
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
                  <div className="jg-heading-subtitle">Register</div>
                  <h2>Help us get to know you:</h2>
                </div>
                <form
                  className="jg-contact-form"
                  method="post"
                  onSubmit={RegisterSubmit}
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
                        setRfEmail(e.target.value);
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
                        setRfPassword(e.target.value);
                      }}
                      type="password"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="form-grid-item jg-pt30">
                    <label htmlFor="Role" className="input-label">
                      Role
                    </label>
                    <select
                      className="form-input"
                      name="Role"
                      value={RfRole}
                      onChange={(e) => {
                        setRfRole(e.target.value);
                      }}
                      type="text"
                      placeholder="Role"
                      required
                    >
                      <option value={"User"}>User</option>
                    </select>
                  </div>
                  <div className="form-grid-item jg-pt30">
                    <label htmlFor="forgetPassword" className="input-label">
                      Forget Password
                    </label>
                  </div>
                  <div className="jg-pt30 jg-text-right">
                    <button type="submit" className="jg-button">
                      {loading ? "Register..." : "Register"}
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

export default RegisterFrom;
