const bcrypt = require("bcryptjs");
const User = require("../../models/UserSchema");

function login(req, res) {
  // Get Username & Password from body

  // Find User with requested Username

  // Compare given Password with found User password Hash

  // Create JWT Token

  // Respond with user
  return "login";
}

module.exports = { login };
