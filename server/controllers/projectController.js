import dbConnect from "../database/dbConnect.js";
import slugify from "slugify";
import { cloudinary } from "../middleware/fileUpload.js";

const projectCreate = async (req, res) => {
  try {
    const { Title, Category, Link } = req.body;

    const Thumbnail = req.file.originalname;

    const Thumbnail_cloudinary_Url = await cloudinary.uploader.upload(
      `uploads/${Thumbnail}`,
      {
        folder: "projects",
        use_filename: true,
      }
    );

    const url = Thumbnail_cloudinary_Url;
    const secure_url = url.secure_url;

    const Slug = slugify(Title);

    const sql =
      "INSERT INTO project(Slug, Thumbnail, Title, Category, Link) VALUES ?";
    const values = [[Slug, secure_url, Title, Category, Link]];

    console.log(values);

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

    const results = await new Promise((resolve, reject) => {
      dbConnect.query(sql, function (error, results) {
        if (error) {
          console.log(error);
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

    const sql = `SELECT Id, Slug, Thumbnail, Title, Category, Link FROM project WHERE Id=${id}`;

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

    const sql = `SELECT Id, Slug, Thumbnail, Title, Category, Link FROM project WHERE Slug = ?`;

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
    const Id = req.params.id;

    const { Title, Category, Link } = req.body;

    let Thumbnail;

    if (req.file !== undefined && req.file.filename !== undefined) {
      Thumbnail = req.file.originalname;
    }

    const Thumbnail_cloudinary_Url = await cloudinary.uploader.upload(
      `uploads/${Thumbnail}`,
      {
        folder: "projects",
      }
    );

    const url = Thumbnail_cloudinary_Url;
    const secure_url = url.secure_url;

    const Slug = slugify(Title);

    const sql = `UPDATE project SET  Slug = ?, Thumbnail = ?, Title = ?, Category = ?, Link = ? WHERE Id = ${Id}`;
    const values = [Slug, secure_url, Title, Category, Link];

    dbConnect.query(sql, values, async function (error, results) {
      if (error) {
        console.log(error);
      }
      console.log("test 5 ===>", results);
      return res.status(200).send({
        message: "Project successfully updated",
        success: true,
        results,
      });
    });
  } catch (error) {
    console.log(error);
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
