const jwt = require("jsonwebtoken");

function requireAuth(req, res, next) {
  // Find and Read Token off cookies

  // Decode Token

  //  Find User using Decoded data

  // Add user to to Req object

  // Continue if ok -> using next()
  console.log("Hit Auth Middleware");
  next();
}

module.exports = requireAuth;
