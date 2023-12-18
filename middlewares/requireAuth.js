const jwt = require("jsonwebtoken");
const User = require("../models/UserSchema");

async function requireAuth(req, res, next) {
  try {
    // Find and Read Token off cookies
    const token = req.cookies.Authorization;

    // Decode Token
    const decoded = jwt.verify(token, process.env.SECRET);

    //  Find User using Decoded data
    const user = await User.findById(decoded.sub);

    if (!user) {
      return res.sendStatus(401);
    }

    // Add user to to Req object

    req.user = user;

    // Continue if ok -> using next()
    console.log("Hit Auth Middleware");
    next();
  } catch (err) {
    console.error(err);
    return res.sendStatus(401);
  }
}

module.exports = requireAuth;
