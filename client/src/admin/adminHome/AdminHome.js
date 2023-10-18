import React, { useEffect, useState } from "react";
import "./AdminHome.css";
import axios from "axios";
import Layout from "../../layouts/Layout";
import { toast } from "react-toastify";

const AdminPanel = () => {
  const [data, setData] = useState([]);
  const [thumbnail, setThumbnail] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [link, setLink] = useState("");

  const createProject = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("Title", title);
    formData.append("Thumbnail", thumbnail);
    formData.append("Category", category);
    formData.append("Link", link);

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_JGAPI_V1}/project/projectCreate`,
        formData
      );

      if (data.success) {
        toast.success(data.message);
        fetchProject();
      }
    } catch (error) {
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
                    <label htmlFor="Title" className="input-label">
                      Title *
                    </label>
                    <input
                      className="form-input"
                      type="text"
                      value={title}
                      name="Title"
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
                    Add Project
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="jg-section">
        <div className="jg-container">
          <table className="jg-table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Thumbnail</th>
                <th>Category</th>
                <th>Link</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.results?.map((el) => (
                <tr key={el.Id} className="jg-table-pt">
                  <td className="jg-table-td">{el.Id}</td>
                  <td className="jg-table-td">
                    <img
                      className="jg-table-image"
                      alt={el.Thumbnail}
                      src={el.Thumbnail}
                    />
                  </td>
                  <td className="jg-table-td">{el.Category}</td>
                  <td className="jg-table-td">{el.Link}</td>
                  <td className="jg-table-td">
                    <a href={`/admin/${el.Slug}`} className="jg-button">
                      Edit
                    </a>
                  </td>
                  <td className="jg-table-td">
                    <button
                      className="jg-button"
                      onClick={(e) => {
                        e.preventDefault();
                        projectDelete(el.Id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </Layout>
  );
};

export default AdminPanel;
