const express = require("express");

const {
  deleteStudent,
} = require("../controllers/studentControllers/deleteStudentController");
const {
  putStudent,
} = require("../controllers/studentControllers/putStudentController");
const {
  getSingleStudent,
} = require("../controllers/studentControllers/getSingleStudentController");
const {
  getAllStudents,
} = require("../controllers/studentControllers/getAllStudentsController");

const studentRoutes = express.Router();

studentRoutes.get("/", getAllStudents);
studentRoutes.get("/:id", getSingleStudent);
studentRoutes.put("/:id", putStudent);
studentRoutes.delete("/:id", deleteStudent);

module.exports = { studentRoutes };
