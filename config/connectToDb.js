// Load Env File | Checks if Local or Prod
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const mongoose = require("mongoose");

async function connectToDb() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("\x1b[34m \x1b[3mDB Connection Established \x1b[0m");
  } catch (err) {
    console.error("DB Connection Error -> ", err);
  }
}

module.exports = connectToDb;
