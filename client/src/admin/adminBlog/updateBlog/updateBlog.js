import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../../layouts/Layout.js";
import axios from "axios";
import { toast } from "react-toastify";
import "./updateBlog.css";

const UpdateBlog = () => {
  const [load, setLoad] = useState(false);
  const [slug, setSlug] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [newThumbnail, setNewThumbnail] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  const getProject = async () => {
    try {
      const data = await axios.get(
        `${process.env.REACT_APP_JGAPI_V1}/blog/readSingle/${params.slug}`
      );
      if (data.success) {
        toast.success(data.message);
      }
      setSlug(data?.data?.results[0].slug);
      setName(data?.data?.results[0].name);
      setDescription(data?.data?.results[0].description);
      setThumbnail(data?.data?.results[0].thumbnail);
      setAuthor(data?.data?.results[0].author);
      setStatus(data?.data?.results[0].status);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProject();
    // eslint-disable-next-line
  }, []);

  const updateForm = async (e) => {
    e.preventDefault();

    setLoad(true);
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("thumbnail", newThumbnail);
      formData.append("author", author);
      formData.append("status", status);

      console.log(slug);

      const { data } = await axios.put(
        `${process.env.REACT_APP_JGAPI_V1}/blog/edit/${slug}`,
        formData
      );

      if (data.success) {
        setLoad(false);
        toast.success(data.message);
        navigate("/addblog");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const FileUpload = (e) => {
    setNewThumbnail(e.target.files[0]);
  };

  return (
    <>
      <Layout>
        <section className="jg-section">
          <div className="jg-container">
            <div className="jg-contact-grid">
              <div className="jg-contact-grid-item">
                <div className="jg-heading-wrap">
                  <div className="jg-heading-subtitle">Blog</div>
                  <h2>Update Blog</h2>
                </div>
                <img alt={name} className="preview-image" src={thumbnail} />
                <form
                  className="jg-contact-form"
                  method="post"
                  onSubmit={updateForm}
                  encType="multipart/form-data"
                >
                  <div className="form-grid">
                    <div className="form-grid-item">
                      <label htmlFor="thumbnail" className="input-label">
                        Thumbnail *
                      </label>
                      <input
                        className="form-input"
                        type="file"
                        name="thumbnail"
                        onChange={FileUpload}
                        placeholder="Upload Thumbnail"
                        required
                      />
                    </div>
                    <div className="form-grid-item">
                      <label htmlFor="name" className="input-label">
                        Name *
                      </label>
                      <input
                        className="form-input"
                        type="text"
                        name="name"
                        value={name}
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
                      <label htmlFor="author" className="input-label">
                        Author *
                      </label>
                      <input
                        className="form-input"
                        name="author"
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
                      <label htmlFor="status" className="input-label">
                        Status
                      </label>
                      <input
                        className="form-input"
                        type="text"
                        value={status}
                        onChange={(e) => {
                          setStatus(e.target.value);
                        }}
                        name="status"
                        placeholder="Status"
                        required
                      />
                    </div>
                  </div>
                  <div className=" jg-pt30">
                    <div className="form-grid-item">
                      <label htmlFor="description" className="input-label">
                        Description *
                      </label>
                      <textarea
                        className="form-input"
                        name="description"
                        value={description}
                        onChange={(e) => {
                          setDescription(e.target.value);
                        }}
                        type="text"
                        placeholder="Description"
                        required
                      />
                    </div>
                  </div>
                  <div className="jg-pt30 jg-text-right">
                    <button type="submit" className="jg-button">
                      {load ? "Updateing..." : "Update Project"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="jg-section">
          <div className="jg-container"></div>
        </section>
      </Layout>
    </>
  );
};

export default UpdateBlog;
