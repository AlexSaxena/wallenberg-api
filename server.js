// Load Env File | Checks if Local or Prod
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Import Dependencies
const express = require("express");
const connectToDb = require("./config/connectToDb");

// Express App
const app = express();

// Connect to Database
connectToDb();

// Routes
app.get("/", (req, res) => {
  res.json({ general: "Kenobi" });
});

app.post("/newStudent", (req, res) => {
  // TODO
  // Get newStudent data from req.body
  // Create NewStudent Data
  // Respond with sucess message
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
