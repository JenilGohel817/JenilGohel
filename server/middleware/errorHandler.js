const authenticateRole = (req, res, next) => {
  try {
    const userRole = req.Role || req.body.Role;
    if (userRole === "Admin") {
      next();
    } else if (userRole === "User") {
      next();
    } else {
      return res.status(404).send({
        message: "Access denied role required",
        success: false,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export default authenticateRole;
