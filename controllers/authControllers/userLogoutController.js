const bcrypt = require("bcryptjs");
const User = require("../../models/UserSchema");

function logout(req, res) {
  return "logout";
}

module.exports = { logout };
