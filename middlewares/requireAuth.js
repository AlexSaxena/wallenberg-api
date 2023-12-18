const jwt = require("jsonwebtoken");

function requireAuth(req, res, next) {
  console.log("Hit Auth Middleware");
  next();
}

module.exports = requireAuth;
