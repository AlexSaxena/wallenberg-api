const express = require("express");

const {
  register,
  login,
  logout,
} = require("../controllers/authControllers/userController");

const authRoutes = express.Router();

authRoutes.post("/login", login);
authRoutes.post("/register", register);
authRoutes.get("/logout", logout);

module.exports = { authRoutes };
