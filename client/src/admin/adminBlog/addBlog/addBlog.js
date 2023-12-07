import React, { useEffect, useState } from "react";
import "./addBlog.css";
import axios from "axios";
import Layout from "../../../layouts/Layout.js";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const AddBlog = () => {
  const [load, setLoad] = useState(false);
  const [data, setData] = useState([]);
  const [thumbnail, setThumbnail] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("");

  const createBlog = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("thumbnail", thumbnail);
    formData.append("description", description);
    formData.append("author", author);
    formData.append("status", status);

    setLoad(true);

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_JGAPI_V1}/blog/add`,
        formData
      );

      if (data.success) {
        setLoad(false);
        toast.success(data.message);
        fetchBlog();
      }
    } catch (error) {
      setLoad(false);
      toast.error(error.message);
    }
  };

  const fetchBlog = async () => {
    try {
      const data = await axios.get(
        `${process.env.REACT_APP_JGAPI_V1}/blog/read`
      );
      if (data?.success) {
        toast.success(data.message);
      }
      setData(data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const projectBlog = async (id) => {
    try {
      const data = await axios.delete(
        `${process.env.REACT_APP_JGAPI_V1}/blog/remove/${id}`
      );
      if (data?.success) {
        toast.success(data.message);
      }
      fetchBlog();
    } catch (error) {}
  };

  useEffect(() => {
    fetchBlog();
    // eslint-disable-next-line
  }, []);

  return (
    <Layout>
      <section className="jg-section">
        <div className="jg-container">
          <div className="jg-contact-grid">
            <div className="jg-contact-grid-item">
              <div className="jg-heading-wrap">
                <div className="jg-heading-subtitle">Blog</div>
                <h2>Create Blog</h2>
              </div>
              <form
                className="jg-contact-form"
                method="post"
                onSubmit={createBlog}
                encType="multipart/form-data"
              >
                <div className="form-grid">
                  <div className="form-grid-item">
                    <label htmlFor="Thumbnail" className="input-label">
                      Thumbnail *
                    </label>
                    <input
                      className="form-input"
                      onChange={(e) => setThumbnail(e.target.files[0])}
                      type="file"
                      name="Thumbnail"
                      placeholder="Upload Thumbnail"
                      required
                    />
                  </div>
                  <div className="form-grid-item">
                    <label htmlFor="Name" className="input-label">
                      Name *
                    </label>
                    <input
                      className="form-input"
                      type="text"
                      value={name}
                      name="Name"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      placeholder="Name"
                      required
                    />
                  </div>
                </div>
                <div className="form-grid jg-pt30">
                  <div className="form-grid-item">
                    <label htmlFor="Author" className="input-label">
                      Author *
                    </label>
                    <input
                      className="form-input"
                      name="Author"
                      value={author}
                      onChange={(e) => {
                        setAuthor(e.target.value);
                      }}
                      type="text"
                      placeholder="Author"
                      required
                    />
                  </div>
                  <div className="form-grid-item">
                    <label htmlFor="Status" className="input-label">
                      Status
                    </label>
                    <input
                      className="form-input"
                      type="text"
                      value={status}
                      onChange={(e) => {
                        setStatus(e.target.value);
                      }}
                      name="Status"
                      placeholder="Status"
                      required
                    />
                  </div>
                </div>
                <div className="jg-pt30">
                  <div className="form-grid-item">
                    <label htmlFor="Description" className="input-label">
                      Description
                    </label>
                    <textarea
                      className="form-input"
                      type="text"
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                      name="Description"
                      placeholder="Description"
                      required
                    />
                  </div>
                </div>
                <div className="jg-pt30 jg-text-right">
                  <button type="submit" className="jg-button">
                    {load ? "Adding Blog..." : "Add Blog"}
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
                      alt={el.name}
                    />
                  </div>
                  <div className="jg-project-hover"></div>
                  <div className="jg-project-name">{el.name}</div>
                  <div className="jg-project-position">{el.author}</div>
                </div>
                <div className="jg-project-button-wrap">
                  <Link
                    to={`/updateblog/${el.slug}`}
                    className="jg-button jg-project-button"
                  >
                    Edit
                  </Link>
                  <button
                    className="jg-button jg-project-button"
                    onClick={(e) => {
                      e.preventDefault();
                      projectBlog(el.id);
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

export default AddBlog;
