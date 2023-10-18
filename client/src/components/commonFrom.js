import React from "react";

const commonFrom = ({ handleSubmit, handleOnChange }) => {
  return (
    <>
      <form
        className="jg-contact-form"
        method="post"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <div className="form-grid">
          <div className="form-grid-item">
            <label htmlFor="Thumbnail" className="input-label">
              Thumbnail *
            </label>
            <input
              className="form-input"
              onChange={handleOnChange}
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
              name="Title"
              onChange={handleOnChange}
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
              onChange={handleOnChange}
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
              onChange={handleOnChange}
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
    </>
  );
};

export default commonFrom;
