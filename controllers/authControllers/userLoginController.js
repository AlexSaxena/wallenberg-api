const bcrypt = require("bcryptjs");
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

  // Respond with user
  return "login";
}

module.exports = { login };
