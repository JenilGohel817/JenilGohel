import dbConnect from "../database/dbConnect.js";

const projectCreate = async (req, res) => {
  try {
    const { Title, Category, Link } = req.body;
    const Thumbnail = req.file.filename;

    console.log(Title, Category, Thumbnail, Title);

    const sql =
      "INSERT INTO project(Thumbnail, Title, Category, Link) VALUES ?";
    const values = [[Thumbnail, Title, Category, Link]];

    dbConnect.query(sql, [values], function (error, results, fields) {
      if (error) {
        console.log(error);
      }
      return res.status(200).send({
        message: "project created!",
        success: true,
        results,
      });
    });
  } catch (error) {
    return res.status(404).send({
      message: "project getting error",
      success: false,
      error,
    });
  }
};

const projectGet = async (req, res) => {
  try {
    const sql = "SELECT Id, Thumbnail, Title, Category, Link FROM project";

    dbConnect.query(sql, function (error, results, fields) {
      if (error) {
        console.log(error);
      }
      return res.status(200).send({
        message: "project fetched!",
        success: true,
        results,
      });
    });
  } catch (error) {
    return res.status(404).send({
      message: "Error fetch project",
      success: false,
      error,
    });
  }
};

const projectGetSingle = async (req, res) => {
  try {
    const id = req.params.id;

    const sql = `SELECT Id, Thumbnail, Title, Category, Link FROM project WHERE id=${id}`;

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
      message: "Project",
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

    if (!Title || !Category || !Link || !Thumbnail) {
      return res.status(404).json({
        message: "All fields are required",
        success: false,
      });
    } else {
      const sql = `UPDATE project SET Title = ?, Category = ?, Link = ?, Thumbnail = ? WHERE id = ?`;
      const values = [Title, Category, Link, Thumbnail, Id];

      dbConnect.query(sql, values, async function (error, results, fields) {
        if (error) {
          console.log(error);
        }
        return res.status(200).send({
          message: "Project updated successfully.",
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
        message: "Project deleted",
        success: true,
        results,
      });
    });
  } catch (error) {
    return res.status(404).send({
      message: "Error in project delete",
      success: false,
      error,
    });
  }
};

export {
  projectCreate,
  projectGet,
  projectGetSingle,
  projectUpdate,
  projectDelete,
};
