import React, { useEffect, useState } from "react";
import Layout from "../../layouts/Layout";
import axios from "axios";
import { toast } from "react-toastify";
import "./Project.css";
import { Link } from "react-router-dom";

const Project = () => {
  const [data, setData] = useState([]);

  const fetchProject = async () => {
    try {
      const data = await axios.get(
        `${process.env.REACT_APP_JGAPI_V1}/project/projectGet`
      );
      if (data?.success) {
        toast.success(data.message);
      }
      setData(data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchProject();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Layout>
        <section className="jg-section">
          <div className="jg-container">
            <div className="jg-heading-wrap">
              <div className="jg-heading-subtitle">Projects</div>
              <h2>All Projects</h2>
            </div>
            <div
              className={
                data?.data && data.data.results.length > 0
                  ? "jg-grid jg-grid-four"
                  : ""
              }
            >
              {data?.data &&
              data.data.results &&
              data.data.results.length > 0 ? (
                <>
                  {data.data.results.map((el) => (
                    <div key={el.Id} className="jg-project-card-wrap">
                      <Link
                        to={el.Link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="jg-project-card"
                      >
                        <div className="jg-project-image-wrap">
                          <img
                            className="jg-project-image"
                            src={el.Thumbnail}
                            alt={el.Title}
                          />
                        </div>
                        <div className="jg-project-hover"></div>
                        <div className="jg-project-name">{el.Title}</div>
                        <div className="jg-project-position">{el.Category}</div>
                      </Link>
                    </div>
                  ))}
                </>
              ) : (
                <>
                  <p className="jg-experience-designation">
                    We're sorry, but the data you are looking for is not
                    available at the moment.
                  </p>
                  <p>Loading...</p>
                </>
              )}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Project;
