// Load Env File | Checks if Local or Prod
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Import Dependencies
const express = require("express");
const connectToDb = require("./config/connectToDb");

const NewStudentData = require("./models/studentFormSchema");

// Express App
const app = express();
app.use(express.json());

// Connect to Database
connectToDb();

// Routes
app.get("/", (req, res) => {
  res.json({ general: "Kenobi" });
});

// Show all students
app.get("/showStudents", async (req, res) => {
  // Request -> Find Student
  const showStudents = await NewStudentData.find();
  // Response -> Display Student
  res.status(200).json({ showStudents: showStudents });
});

app.post("/newStudent", async (req, res) => {
  // Get newStudent data from req.body
  const name = req.body.name;
  const nrOfParents = req.body.nrOfParents;
  const city = req.body.city;

  // Create NewStudent Data
  const newStudent = await NewStudentData.create({
    name: name,
    nrOfParents: nrOfParents,
    city: city,
  });
  // Respond with sucess message
  res.status(200).json({ newStudent: newStudent });
});

// Server Startup - ENV port or Default
const PORT = process.env.PORT || 3001;

// Server Startup - Terminal Color & italic
const blueText = "\x1b[34m";
const italicText = "\x1b[3m";
const resetStyle = "\x1b[0m";

// Server Startup - Active port
app.listen(PORT, () => {
  console.log(
    `${blueText} ${italicText}Server is running on port ${PORT}${resetStyle}`
  );
});
