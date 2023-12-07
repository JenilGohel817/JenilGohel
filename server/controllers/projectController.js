import dbConnect from "../database/dbConnect.js";
import slugify from "slugify";
import { cloudinary } from "../middleware/fileUpload.js";

const projectCreate = async (req, res) => {
  try {
    const { title, category, link } = req.body;

    const thumbnail = req.file.originalname;

    console.log(thumbnail);

    const thumbnail_cloudinary_Url = await cloudinary.uploader.upload(
      `uploads/${thumbnail}`,
      {
        folder: "projects",
        use_filename: true,
      }
    );
    const url = thumbnail_cloudinary_Url;
    const secure_url = url.secure_url;

    const slug = slugify(title);

    const sql =
      "INSERT INTO project(slug, thumbnail, title, category, link) VALUES ?";
    const values = [[slug, secure_url, title, category, link]];

    dbConnect.query(sql, [values], function (error, results) {
      if (error) {
        console.log(error);
      }
      return res.status(200).send({
        message: "Project created successfully",
        success: true,
        results,
      });
    });
  } catch (error) {
    return res.status(404).send({
      message: "Error project",
      success: false,
      error,
    });
  }
};

const projectGet = async (req, res) => {
  try {
    const sql =
      "SELECT id, slug, thumbnail, title, category, link FROM project";

    const results = await new Promise((resolve, reject) => {
      dbConnect.query(sql, function (error, results) {
        if (error) {
          reject(error);
        }
        resolve(results);
      });
    });

    return res.status(200).send({
      message: "Project fetched successfully",
      success: true,
      results,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).send({
      message: "Error fetching",
      success: false,
      error,
    });
  }
};

const projectGetSingleId = async (req, res) => {
  try {
    const id = req.params.id;

    const sql = `SELECT id, slug, thumbnail, title, category, link FROM project WHERE id=${id}`;

    dbConnect.query(sql, function (error, results) {
      if (error) {
        console.log(error);
      }
      return res.status(200).send({
        message: "project single fetched!",
        success: true,
        results,
      });
    });
  } catch (error) {
    return res.status(404).send({
      message: "Error project",
      success: false,
      error,
    });
  }
};

const projectGetSingleSlug = async (req, res) => {
  try {
    const slug = req.params.slug;

    const sql = `SELECT id, slug, thumbnail, title, category, link FROM project WHERE slug = ?`;

    dbConnect.query(sql, slug, function (error, results) {
      if (error) {
        console.log(error);
      }
      return res.status(200).send({
        message: "project single fetched!",
        success: true,
        results,
      });
    });
  } catch (error) {
    return res.status(404).send({
      message: "Error project",
      success: false,
      error,
    });
  }
};

const projectUpdate = async (req, res) => {
  try {
    const id = req.params.id;

    const { title, category, link } = req.body;

    let thumbnail;

    if (req.file !== undefined && req.file.filename !== undefined) {
      thumbnail = req.file.originalname;
    }

    const thumbnail_cloudinary_Url = await cloudinary.uploader.upload(
      `uploads/${thumbnail}`,
      {
        folder: "projects",
      }
    );

    const url = thumbnail_cloudinary_Url;
    const secure_url = url.secure_url;

    const slug = slugify(title);

    const sql = `UPDATE project SET slug = ?, thumbnail = ?, title = ?, category = ?, link = ? WHERE id = ${id}`;
    const values = [slug, secure_url, title, category, link];

    dbConnect.query(sql, values, async function (error, results) {
      if (error) {
        console.log(error);
      }
      return res.status(200).send({
        message: "Project successfully updated",
        success: true,
        results,
      });
    });
  } catch (error) {
    return res.status(404).send({
      message: "Error updating",
      success: false,
      error,
    });
  }
};

const projectDelete = async (req, res) => {
  try {
    const id = req.params.id;

    const sql = `DELETE FROM project WHERE id=${id}`;

    dbConnect.query(sql, function (error, results) {
      if (error) {
        console.log(error);
      }

      return res.status(200).send({
        message: "Project deleted successfully",
        success: true,
        results,
      });
    });
  } catch (error) {
    return res.status(404).send({
      message: "Error project",
      success: false,
      error,
    });
  }
};

export {
  projectCreate,
  projectGet,
  projectGetSingleId,
  projectGetSingleSlug,
  projectUpdate,
  projectDelete,
};
