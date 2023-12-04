// Load Env File | Checks if Local or Prod
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

// Import Dependencies
const express = require("express");

// Express App
const app = express();

// Routes
app.get("/", (req, res) => {
  res.json({ general: "Kenobi" });
});

// Server Startup
app.listen(process.env.PORT);
