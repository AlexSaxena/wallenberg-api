// Load Env File | Checks if Local or Prod
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const mongoose = require("mongoose");

async function connectToDb() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("DB Connection Established");
  } catch (err) {
    console.error("DB Connection Error -> ", err);
  }
}

module.exports = connectToDb;
