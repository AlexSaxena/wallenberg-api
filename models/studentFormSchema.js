const mongoose = require("mongoose");

const studentFormSchema = new mongoose.Schema({
  name: String,
  nrOfParents: Number,
  city: String,
});

const NewStudent = mongoose.model("NewStudent", studentFormSchema);

module.exports = NewStudent;
