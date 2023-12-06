import React, { useEffect, useState } from "react";
import Layout from "../../layouts/Layout.js";
import axios from "axios";
import { toast } from "react-toastify";
import "./BlogDetail.css";
import { Link, useParams } from "react-router-dom";

const BlogDetail = () => {
  const [data, setData] = useState([]);

  const slug = useParams();

  const fetchBlog = async () => {
    try {
      const data = await axios.get(
        `${process.env.REACT_APP_JGAPI_V1}/blog/readSingle/${slug.slug}`
      );
      if (data?.success) {
        toast.success(data.message);
      }
      setData(data);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchBlog();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Layout>
        <section className="jg-section">
          <div className="jg-container">
            {data?.data?.results.map((el) => (
              <>
                <div key={el.id}>
                  <div className="jg-heading-wrap">
                    <div className="jg-heading-subtitle">Blog Detail</div>
                    <h2>{el.name}</h2>
                  </div>
                  <div className="jg-heading-wrap">
                    <Link to={"/blog"} className="back-to-blog">
                      🔙 Blog
                    </Link>
                  </div>
                  <div className="jg-about-wrapper">
                    <div className="jg-about-flex">
                      <div className="jg-about-flex-item jg-about-flex-item-first">
                        <div className="jg-about-box">
                          <div className="jg-about-box-image-wrap">
                            <img
                              className="jg-about-box-image"
                              src={el.thumbnail}
                              alt="Jenil Gohel"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="jg-about-flex-item jg-about-flex-item-last">
                        <h2 className="jg-about-heading jg-about-heading-first">
                          Blog Information
                        </h2>
                        <div className="jg-experience">
                          <div className="jg-experience-wrap">
                            <div className="jg-experience-year">
                              {el.publicationDate}
                            </div>
                            <div className="jg-experience-designation">
                              {el.author}
                            </div>
                            <div className="jg-experience-company">
                              {el.name}
                            </div>
                            <p className="jg-experience-info">
                              {el.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default BlogDetail;
