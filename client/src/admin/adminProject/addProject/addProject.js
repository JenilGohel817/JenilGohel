import React, { useEffect, useState } from "react";
import "./addProject.css";
import axios from "axios";
import Layout from "../../../layouts/Layout.js";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const AddProject = () => {
  const [load, setLoad] = useState(false);
  const [data, setData] = useState([]);
  const [thumbnail, setThumbnail] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [link, setLink] = useState("");

  const createProject = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("thumbnail", thumbnail);
    formData.append("category", category);
    formData.append("link", link);

    setLoad(true);

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_JGAPI_V1}/project/projectCreate`,
        formData
      );

      if (data.success) {
        setLoad(false);
        toast.success(data.message);
        fetchProject();
      }
    } catch (error) {
      setLoad(false);
      toast.error(error.message);
    }
  };

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

  const projectDelete = async (id) => {
    try {
      const data = await axios.delete(
        `${process.env.REACT_APP_JGAPI_V1}/project/projectDelete/${id}`
      );
      if (data?.success) {
        toast.success(data.message);
      }
      fetchProject();
    } catch (error) {}
  };

  useEffect(() => {
    fetchProject();
    // eslint-disable-next-line
  }, []);

  return (
    <Layout>
      <section className="jg-section">
        <div className="jg-container">
          <div className="jg-contact-grid">
            <div className="jg-contact-grid-item">
              <div className="jg-heading-wrap">
                <div className="jg-heading-subtitle">Project</div>
                <h2>Create Project</h2>
              </div>
              <form
                className="jg-contact-form"
                method="post"
                onSubmit={createProject}
                encType="multipart/form-data"
              >
                <div className="form-grid">
                  <div className="form-grid-item">
                    <label htmlFor="thumbnail" className="input-label">
                      Thumbnail *
                    </label>
                    <input
                      className="form-input"
                      onChange={(e) => setThumbnail(e.target.files[0])}
                      type="file"
                      name="thumbnail"
                      placeholder="Upload Thumbnail"
                      required
                    />
                  </div>
                  <div className="form-grid-item">
                    <label htmlFor="title" className="input-label">
                      Title *
                    </label>
                    <input
                      className="form-input"
                      type="text"
                      value={title}
                      name="title"
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                      placeholder="Title"
                      required
                    />
                  </div>
                </div>
                <div className="form-grid jg-pt30">
                  <div className="form-grid-item">
                    <label htmlFor="category" className="input-label">
                      Category *
                    </label>
                    <input
                      className="form-input"
                      name="category"
                      value={category}
                      onChange={(e) => {
                        setCategory(e.target.value);
                      }}
                      type="text"
                      placeholder="Category"
                      required
                    />
                  </div>
                  <div className="form-grid-item">
                    <label htmlFor="link" className="input-label">
                      Link
                    </label>
                    <input
                      className="form-input"
                      type="text"
                      value={link}
                      onChange={(e) => {
                        setLink(e.target.value);
                      }}
                      name="link"
                      placeholder="Link"
                      required
                    />
                  </div>
                </div>
                <div className="jg-pt30 jg-text-right">
                  <button type="submit" className="jg-button">
                    {load ? "Adding Project..." : "Add Project"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="jg-section">
        <div className="jg-container">
          <div className="jg-grid jg-grid-four">
            {data?.data?.results?.map((el) => (
              <div key={el.id} className="jg-project-card-wrap">
                <div className="jg-project-card">
                  <div className="jg-project-image-wrap">
                    <img
                      className="jg-project-image"
                      src={el.thumbnail}
                      alt={el.title}
                    />
                  </div>
                  <div className="jg-project-hover"></div>
                  <div className="jg-project-name">{el.title}</div>
                  <div className="jg-project-position">{el.category}</div>
                </div>
                <div className="jg-project-button-wrap">
                  <Link
                    to={`/updateproject/${el.slug}`}
                    className="jg-button jg-project-button"
                  >
                    Edit
                  </Link>
                  <button
                    className="jg-button jg-project-button"
                    onClick={(e) => {
                      e.preventDefault();
                      projectDelete(el.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AddProject;
