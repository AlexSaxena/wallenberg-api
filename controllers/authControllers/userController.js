const User = require("../../models/UserSchema");

function register(req, res) {
  return "register";
}
function login(req, res) {
  return "login";
}

function logout(req, res) {
  return "logout";
}

module.exports = { register, login, logout };
