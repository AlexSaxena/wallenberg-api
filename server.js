// Load Env File | Checks if Local or Prod
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Import Dependencies
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectToDb = require("./config/connectToDb");

const { studentRoutes } = require("./routes/studentRoutes");
const { newStudentRoute } = require("./routes/newStudentRoute");
const { authRoutes } = require("./routes/authRoutes");

// For checking Auth Middleware
const requireAuth = require("./middlewares/requireAuth");

// Express App
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Connect to Database
connectToDb();

// Routes
app.get("/", (req, res) => {
  res.json({ general: "Kenobi" });
});

app.use("/newStudent", newStudentRoute);
app.use("/showStudents", studentRoutes);
app.use("/auth/", authRoutes);
app.get("/check-auth", requireAuth, (req, res) => {
  res.json({ message: "Passed Auth Middleware" }).send(200);
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
