const User = require("../../models/UserSchema");

function register(req, res) {
  // Get Username & Password from Req Body

  // Create User with given Data

  // Respond with New User

  return "register";
}
function login(req, res) {
  return "login";
}

function logout(req, res) {
  return "logout";
}

module.exports = { register, login, logout };
