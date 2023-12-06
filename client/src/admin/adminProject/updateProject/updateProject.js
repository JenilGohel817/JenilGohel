import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../../../layouts/Layout.js";
import axios from "axios";
import { toast } from "react-toastify";
import "./updateProject.css";

const UpdateProject = () => {
  const [load, setLoad] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [newThumbnail, setNewThumbnail] = useState(null);
  const [id, setId] = useState("");
  const [link, setLink] = useState("");
  const navigate = useNavigate();

  const params = useParams();

  const getProject = async () => {
    try {
      const data = await axios.get(
        `${process.env.REACT_APP_JGAPI_V1}/project/projectGetSingleSlug/${params.slug}`
      );
      if (data.success) {
        toast.success(data.message);
      }
      setId(data?.data?.results[0].Id);
      setTitle(data?.data?.results[0].Title);
      setCategory(data?.data?.results[0].Category);
      setThumbnail(data?.data?.results[0].Thumbnail);
      setLink(data?.data?.results[0].Link);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProject();
    // eslint-disable-next-line
  }, []);

  const AdminUpdateForm = async (e) => {
    e.preventDefault();

    setLoad(true);
    try {
      const formData = new FormData();
      formData.append("Title", title);
      formData.append("Category", category);
      formData.append("Thumbnail", newThumbnail);
      formData.append("Link", link);

      console.log(formData);

      const { data } = await axios.put(
        `${process.env.REACT_APP_JGAPI_V1}/project/projectUpdate/${id}`,
        formData
      );

      console.log(data);

      if (data.success) {
        setLoad(false);
        toast.success(data.message);
        navigate("/admin");
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
                  <div className="jg-heading-subtitle">Project</div>
                  <h2>Update Project</h2>
                </div>
                <img alt={title} className="preview-image" src={thumbnail} />
                <form
                  className="jg-contact-form"
                  method="post"
                  onSubmit={AdminUpdateForm}
                  encType="multipart/form-data"
                >
                  <div className="form-grid">
                    <div className="form-grid-item">
                      <label htmlFor="Thumbnail" className="input-label">
                        Thumbnail *
                      </label>
                      <input
                        className="form-input"
                        type="file"
                        name="Thumbnail"
                        onChange={FileUpload}
                        placeholder="Upload Thumbnail"
                        required
                      />
                    </div>
                    <div className="form-grid-item">
                      <label htmlFor="Title" className="input-label">
                        Title *
                      </label>
                      <input
                        className="form-input"
                        type="text"
                        name="Title"
                        value={title}
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
                      <label htmlFor="Category" className="input-label">
                        Category *
                      </label>
                      <input
                        className="form-input"
                        name="Category"
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
                      <label htmlFor="Link" className="input-label">
                        Link
                      </label>
                      <input
                        className="form-input"
                        type="text"
                        value={link}
                        onChange={(e) => {
                          setLink(e.target.value);
                        }}
                        name="Link"
                        placeholder="Link"
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

export default UpdateProject;
