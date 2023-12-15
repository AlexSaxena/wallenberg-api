const User = require("../../models/UserSchema");

async function register(req, res) {
  // Get Username & Password from Req Body
  const { username, password } = req.body;
  // Create User with given Data
  await User.create({ username, password });
  // Respond with New User
  res.sendStatus(200);

  return "register";
}
function login(req, res) {
  return "login";
}

function logout(req, res) {
  return "logout";
}

module.exports = { register, login, logout };
