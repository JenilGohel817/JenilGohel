import dbConnect from "../database/dbConnect.js";
import { comparePassword, hashPassword } from "../middleware/hashPassword.js";

const authLogin = async (req, res) => {
  try {
    const { Email, Password } = req.body;

    console.log(Email, Password);

    if (!Email || !Password) {
      return res.status(404).send({
        message: "All fields are required",
        success: false,
      });
    }

    const sqlFindEmail = "SELECT HashPassword FROM user WHERE Email = ?";

    if (!sqlFindEmail) {
      return res.status(404).send({
        message: "Login email not found",
        success: false,
      });
    }

    dbConnect.query(sqlFindEmail, [Email], async function (err, results) {
      if (err) console.log(err);
      if (results.length === 0) {
        return res.status(404).send({
          message: "User not found!",
          success: false,
        });
      } else {
        const hashPassword = results[0].HashPassword;

        if (!hashPassword) {
          return res.status(404).send({
            message: "Hashpassword not found !",
            success: false,
          });
        }

        const matchPassword = await comparePassword(Password, hashPassword);

        if (!matchPassword) {
          return res.status(404).send({
            message: "password not match !",
            success: false,
          });
        } else {
          return res.status(200).send({
            message: "Login successfully !",
            success: true,
            results,
          });
        }
      }
    });
  } catch (error) {
    return res.status(404).send({
      message: "Login Error",
      success: false,
      error,
    });
  }
};

const authRegister = async (req, res) => {
  try {
    const { Email, Password, Role } = req.body;

    if (!Email || !Password || !Role) {
      return res.status(404).send({
        message: "All fields are required",
        success: false,
      });
    }

    const hashPass = await hashPassword(Password);
    const userRole = Role || "User";

    const sql =
      "INSERT INTO user(Email, Role, Password, HashPassword) VALUES ?";
    const sqlEmail = "SELECT COUNT(*) AS count FROM user WHERE Email = ?";
    const values = [[Email, userRole, Password, hashPass]];

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
            message: "Register successfully",
            success: true,
            results,
          });
        });
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(404).send({
      message: "Register error",
      success: false,
    });
  }
};

export { authLogin, authRegister };
