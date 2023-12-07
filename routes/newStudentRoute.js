const express = require("express");

const {
  postNewStudent,
} = require("../controllers/addNewStudentController/postAddNewStudent");

const newStudentRoute = express.Router();

newStudentRoute.post("/", postNewStudent);

module.exports = { newStudentRoute };
