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

app.post("/newStudent", async (req, res) => {
  // TODO
  // Get newStudent data from req.body
  const name = req.body.name;
  const parents = req.body.nrOfParents;
  const city = req.body.city;

  // Create NewStudent Data
  const newStudent = await NewStudentData.create({
    name: name,
    parents: parents,
    city: city,
  });
  // Respond with sucess message
  res.status(200).json({ newStudent: newStudent });
});

// Server Startup
const PORT = process.env.PORT || 3001;

const blueText = "\x1b[34m";
const italicText = "\x1b[3m";
const resetStyle = "\x1b[0m";

app.listen(PORT, () => {
  console.log(
    `${blueText} ${italicText}Server is running on port ${PORT}${resetStyle}`
  );
});
