const mongoose = require("mongoose");

const studentFormSchema = new mongoose.Schema({
  name: String,
  nrOfParents: Number,
  city: String,
});

const NewStudentData = mongoose.model("StudentData", studentFormSchema);

module.exports = NewStudentData;
