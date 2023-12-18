const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/UserSchema");

async function login(req, res) {
  try {
    // Get Username & Password from body
    const { username, password } = req.body;

    // Find User with requested Username
    const user = await User.findOne({ username: username });

    // User not found
    if (!user) {
      return res.status(404).json({ message: "Användaren hittades inte" });
    }

    // Compare given Password with found User password Hash
    const passwordMatch = bcrypt.compareSync(password, user.password);

    // Incorrect password
    if (!passwordMatch) {
      return res.status(401).json({ message: "Fel lösenord" });
    }

    // Create JWT Token
    const exp = Date.now() + 1000 * 60 * 60 * 24;
    const token = jwt.sign({ sub: user._id, exp: exp }, process.env.SECRET);

    // Set Cookie
    res.cookie("Authorization", token, {
      expires: new Date(exp),
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });

    // Respond with user
    return res.sendStatus(200);
  } catch (error) {
    // Handle other errors
    console.error("Login error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = { login };
