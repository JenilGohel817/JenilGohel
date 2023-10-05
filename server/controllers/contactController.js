import dbConnect from "../database/dbConnect.js";

const contactCreate = async (req, res) => {
  try {
    const { FirstName, LastName, Email, ProjectDetail } = req.body;

    if (FirstName || LastName || Email || ProjectDetail) {
      const sql =
        "INSERT INTO contact(FirstName, LastName, Email, ProjectDetail) VALUES ?";

      const sqlEmail = "SELECT COUNT(*) AS count FROM contact WHERE Email = ?";

      const values = [[FirstName, LastName, Email, ProjectDetail]];

      dbConnect.query(sqlEmail, [Email], function (err, results) {
        if (err) console.log(err);
        const count = results[0].count;
        if (count > 0) {
          res.status(404).send({
            message: "Email already exists",
            success: false,
          });
        } else {
          dbConnect.query(sql, [values], function (err, results) {
            if (err) console.log(err);
            return res.status(200).send({
              message: "We will get in touch with you soon",
              success: true,
              results,
            });
          });
        }
      });
    } else {
      return res.status(404).json({
        message: "All fields are required",
        success: false,
      });
    }
  } catch (error) {
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
      if (err) console.log(err);
      res.status(200).send({
        message: "Successful contact fetching",
        success: true,
        results,
      });
      console.log(results);
    });
  } catch (error) {
    return res.status(404).send({
      message: "Form error",
      success: false,
    });
  }
};

const contactFindSingle = async (req, res) => {
  console.log("Jenil");
};

const contactDelete = async (req, res) => {
  console.log("Jenil");
};

const contactUpdate = async (req, res) => {
  console.log("Jenil");
};

export {
  contactCreate,
  contactFind,
  contactFindSingle,
  contactDelete,
  contactUpdate,
};
