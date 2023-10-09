import dbConnect from "../database/dbConnect.js";

const projectCreate = async (req, res) => {
  try {
    const { Title, Category, Link } = req.body;
    const Thumbnaill = req.file.filename;

    console.log(Title, Category, Thumbnaill, Title);

    const sql =
      "INSERT INTO project(Thumbnaill, Title, Category, Link) VALUES ?";
    const values = [[Thumbnaill, Title, Category, Link]];

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
    const sql = "SELECT Id, Thumbnaill, Title, Category, Link FROM project";

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

    const sql = `SELECT Id, Thumbnaill, Title, Category, Link FROM project WHERE id=${id}`;

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

const projectUpdate = async (req, res) => {};

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
