const NewStudentData = require("../../models/studentFormSchema");

const getAllStudents = async (req, res) => {
  // Request -> Find All Students
  const showStudents = await NewStudentData.find();
  // Response -> Display All Students
  res.status(200).json({ showStudents: showStudents });
};

exports.getAllStudents = getAllStudents;
