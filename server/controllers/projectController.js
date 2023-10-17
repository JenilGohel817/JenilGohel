import dbConnect from "../database/dbConnect.js";
import slugify from "slugify";
import { cloudinary } from "../middleware/fileUpload.js";

const projectCreate = async (req, res) => {
  try {
    const { Title, Category, Link } = req.body;

    const Thumbnail = req.file.path;

    const Thumbnail_cloudinary_Url = await cloudinary.uploader.upload(
      Thumbnail,
      {
        folder: "projects",
      }
    );

    const url = Thumbnail_cloudinary_Url;
    const secure_url = url.secure_url;

    const Slug = slugify(Title);

    const sql =
      "INSERT INTO project(Slug, Thumbnail, Title, Category, Link) VALUES ?";
    const values = [[Slug, secure_url, Title, Category, Link]];

    console.log(values);

    dbConnect.query(sql, [values], function (error, results, fields) {
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
    console.log(error);
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
      "SELECT Id, Slug, Thumbnail, Title, Category, Link FROM project";

    dbConnect.query(sql, function (error, results, fields) {
      if (error) {
        console.log(error);
      }
      return res.status(200).send({
        message: "Project fetched successfully",
        success: true,
        results,
      });
    });
  } catch (error) {
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

    const sql = `SELECT Id, Slug, Thumbnail, Title, Category, Link FROM project WHERE id=${id}`;

    dbConnect.query(sql, function (error, results, fields) {
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

    const sql = `SELECT Id, Slug, Thumbnail, Title, Category, Link FROM project WHERE Slug = ?`;

    dbConnect.query(sql, slug, function (error, results, fields) {
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
    const Id = req.params.id;

    const { Title, Category, Link } = req.body;
    const Thumbnail = req.file.filename;
    const Slug = slugify(Title);

    if (!Title || !Category || !Link || !Thumbnail) {
      return res.status(404).json({
        message: "All fields are required",
        success: false,
      });
    } else {
      const sql = `UPDATE project SET Slug = ?, Thumbnail = ?, Title = ?, Category = ?, Link = ? WHERE id = ?`;
      const values = [Id, Slug, Thumbnail, Title, Category, Link];

      dbConnect.query(sql, values, async function (error, results, fields) {
        if (error) {
          console.log(error);
        }
        return res.status(200).send({
          message: "Project successfully updated",
          success: true,
          results,
        });
      });
    }
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

    dbConnect.query(sql, function (error, results, fields) {
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
