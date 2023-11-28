import React from "react";
import Layout from "../layouts/Layout.js";

const ErrorPage = () => {
  return (
    <>
      <Layout>
        <section className="jg-section">
          <div className="jg-container">
            <div className="jg-heading-wrap">
              <div className="jg-heading-subtitle">Page Not Found</div>
              <h2>404</h2>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ErrorPage;
