const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["Regular", "Admin"],
    default: "Regular",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
