import slugify from "slugify";
import dbConnect from "../database/dbConnect.js";
import { cloudinary } from "../middleware/fileUpload.js";

const blogAdd = async (req, res) => {
  try {
    const { name, description, author, status } = req.body;

    const thumbnail = req.file.originalname;
    const slug = slugify(name);
    const publicationDate = new Date();

    const Thumbnail_cloudinary_Url = await cloudinary.uploader.upload(
      `uploads/${thumbnail}`,
      {
        folder: "blogs",
        use_filename: true,
      }
    );

    const url = Thumbnail_cloudinary_Url;
    const secure_url = url.secure_url;

    console.log(secure_url);

    if (!name || !description || !author || !status) {
      return res.status(400).send({
        message: "All fields are required",
        success: false,
      });
    }

    if (!thumbnail) {
      return res.status(400).send({
        message: "Please upload an image",
        success: false,
      });
    }

    const sql =
      "INSERT INTO blog(name, description, author, status, thumbnail, slug, publicationDate) VALUES ?";
    const values = [
      [name, description, author, status, secure_url, slug, publicationDate],
    ];

    dbConnect.query(sql, [values], function (error, results) {
      if (error) {
        console.log(error);
      }
      console.log(results);
      return res.status(200).send({
        message: "blog added successfully",
        success: true,
        results,
      });
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: "error in addeding blog",
    });
  }
};

const blogRemove = async (req, res) => {
  try {
    const id = req.params.id;

    const sql = "DELETE FROM blog WHERE id=?";
    const values = [[id]];

    dbConnect.query(sql, values, function (error, results) {
      if (error) {
        console.log(error);
      }
      return res.status(200).send({
        message: "blog deleted!",
        success: true,
        results,
      });
    });
  } catch (error) {
    return res.status(400).send({
      message: "error in removeing blog",
      success: false,
    });
  }
};

const blogEdit = async (req, res) => {
  try {
    const slug = req.params.slug;

    const { name, description, author, status } = req.body;

    const Slug = slugify(name);

    const publicationDate = new Date();

    let thumbnail;

    if (req.file !== undefined && req.file.filename !== undefined) {
      thumbnail = req.file.originalname;
    }

    const Thumbnail_cloudinary_Url = await cloudinary.uploader.upload(
      `uploads/${thumbnail}`,
      {
        folder: "blogs",
      }
    );

    const url = Thumbnail_cloudinary_Url;
    const secure_url = url.secure_url;

    const updateQuery = `
      UPDATE blog
      SET
        slug = ?,
        publicationDate = ?,
        thumbnail = ?,
        name = ?,
        description = ?,
        author = ?,
        status = ?
      WHERE slug = ?;
    `;

    let values = [
      Slug,
      publicationDate,
      secure_url,
      name,
      description,
      author,
      status,
      slug,
    ];

    dbConnect.query(updateQuery, values, async function (error, results) {
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
    return res.status(400).send({
      message: "error in editing blog",
      success: false,
    });
  }
};

const blogRead = async (req, res) => {
  try {
    const sql =
      "SELECT id, name, slug, author, thumbnail, description, publicationDate, status FROM blog";

    const results = await new Promise((resolve, reject) => {
      dbConnect.query(sql, function (error, results) {
        if (error) {
          reject(error);
        }
        resolve(results);
      });
    });

    return res.status(200).send({
      message: "blogs fetched successfully",
      success: true,
      results,
    });
  } catch (error) {
    return res.status(400).send({
      message: "error in reading blog",
      success: false,
    });
  }
};

const blogReadSingle = async (req, res) => {
  try {
    const slug = req.params.slug;

    const sql = `SELECT * FROM blog WHERE slug=?`;
    const values = [[slug]];

    dbConnect.query(sql, values, function (error, results) {
      if (error) {
        console.log(error);
      }
      return res.status(200).send({
        message: "blog single fetched!",
        success: true,
        results,
      });
    });
  } catch (error) {
    return res.status(400).send({
      message: "error in reading blog",
      success: false,
    });
  }
};

export { blogAdd, blogRemove, blogEdit, blogRead, blogReadSingle };
