const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/UserSchema");

async function login(req, res) {
  // Get Username & Password from body
  const { username, password } = req.body;

  // Find User with requested Username
  const user = await User.findOne({ username: username });
  if (!user) {
    return res.sendStatus(404);
  }

  // Compare given Password with found User password Hash

  const passwordMatch = bcrypt.compareSync(password, user.password);
  if (!passwordMatch) {
    return res.sendStatus(401);
  }
  // Create JWT Token
  let exp = Date.now() + 1000 * 60 * 60 * 24;
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
}

module.exports = { login };
