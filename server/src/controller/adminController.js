require("dotenv").config();

const adminRouter = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Env admin credentials
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    // Check email
    if (email !== adminEmail) {
      return res.status(404).json({
        message: "Admin email is incorrect",
      });
    }

    // Check password
    if (password !== adminPassword) {
      return res.status(401).json({
        message: "Admin password is incorrect",
      });
    }

    // Success
    return res.status(200).json({
      message: "Admin login successful",
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = adminRouter;
