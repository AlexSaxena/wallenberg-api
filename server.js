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

// GET Show all students
app.get("/showStudents", async (req, res) => {
  // Request -> Find All Students
  const showStudents = await NewStudentData.find();
  // Response -> Display All Students
  res.status(200).json({ showStudents: showStudents });
});

// GET Show Single Student By ID
app.get("/showStudents/:id", async (req, res) => {
  // Get ID from URL | take id from url -> params.id
  const studentID = req.params.id;

  // Request -> Find Single Student
  const showStudent = await NewStudentData.findById(studentID);

  // Response -> Display Student
  res.status(200).json({ showStudent });
});

// POST Add New Student to DB
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

app.put("/showStudents/:id", async (req, res) => {
  // Get ID from URL | take id from url -> params.id
  const studentID = req.params.id;

  // Get Data from request body
  const name = req.body.name;
  const nrOfParents = req.body.nrOfParents;
  const city = req.body.city;

  // Request -> Update Selected Student -> Doesn't return updated data.
  await NewStudentData.findByIdAndUpdate(studentID, {
    name: name,
    nrOfParents: nrOfParents,
    city: city,
  });

  // Find Updated student By ID
  const showStudent = await NewStudentData.findById(studentID);

  // Response -> Display Updated Student
  res.status(200).json({ updatedStudent: showStudent });
});

app.delete("/showStudents/:id", async (req, res) => {
  // Get ID from URL | take id from url -> params.id
  const studentID = req.params.id;

  try {
    // Request -> DELETE Selected Student
    const result = await NewStudentData.deleteOne({ _id: studentID });

    if (result.deletedCount === 1) {
      // Respond with Http Status
      res.json({ message: "Student Deleted" }).status(204);
    } else {
      // If the Student with the provided ID doesn't exist
      res.json({ error: "Student not found" }).status(404);
    }
  } catch (error) {
    console.error("Error deleting student:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
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
