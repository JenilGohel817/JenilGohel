import dbConnect from "../database/dbConnect.js";

const contactCreate = async (req, res) => {
  try {
    const { FirstName, LastName, Email, ProjectDetail } = req.body;

    if (FirstName || LastName || Email || ProjectDetail) {
      const sql =
        "INSERT INTO contact(FirstName, LastName, Email, ProjectDetail) VALUES ?";

      const sqlEmail = "SELECT COUNT(*) AS count FROM contact WHERE Email = ?";

      const values = [[FirstName, LastName, Email, ProjectDetail]];

      const resultsEmail = await new Promise((resolve, reject) => {
        dbConnect.query(sqlEmail, [Email], (err, results) => {
          if (err) {
            console.log(err);
            reject(err);
          } else {
            resolve(results);
          }
        });
      });

      const count = resultsEmail[0].count;

      if (count > 0) {
        return res.status(404).send({
          message: "Your submission has been received. We'll be in touch soon.",
          success: false,
        });
      }

      const resultsInsert = await new Promise((resolve, reject) => {
        dbConnect.query(sql, [values], (err, results) => {
          if (err) {
            console.log(err);
            reject(err);
          } else {
            resolve(results);
          }
        });
      });

      return res.status(200).send({
        message: "We will get in touch with you soon",
        success: true,
        results: resultsInsert,
      });
    } else {
      return res.status(404).json({
        message: "All fields are required",
        success: false,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(404).send({
      message: "Form error",
      success: false,
    });
  }
};

const contactFind = async (req, res) => {
  try {
    const sql = "SELECT * FROM contact";
    dbConnect.query(sql, function (err, results) {
      if (err) {
        console.log(err);
      }
      res.status(200).send({
        message: "Successful contact fetching",
        success: true,
        results,
      });
    });
  } catch (error) {
    return res.status(404).send({
      message: "Form error",
      success: false,
    });
  }
};

const contactFindSingle = async (req, res) => {
  console.log("");
};

const contactDelete = async (req, res) => {
  console.log("");
};

const contactUpdate = async (req, res) => {
  console.log("");
};

export {
  contactCreate,
  contactFind,
  contactFindSingle,
  contactDelete,
  contactUpdate,
};
