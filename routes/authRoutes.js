const express = require("express");

const { register } = require("../controllers/authControllers/userRegisterController");
const { login } = require("../controllers/authControllers/userLoginController");
const { logout } = require("../controllers/authControllers/userLogoutController");

const authRoutes = express.Router();

authRoutes.post("/login", login);
authRoutes.post("/register", register);
authRoutes.get("/logout", logout);

module.exports = { authRoutes };
