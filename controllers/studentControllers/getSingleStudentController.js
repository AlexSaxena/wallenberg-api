const NewStudentData = require("../../models/studentFormSchema");

const getSingleStudent = async (req, res) => {
  // Get ID from URL | take id from url -> params.id
  const studentID = req.params.id;

  // Request -> Find Single Student
  const showStudent = await NewStudentData.findById(studentID);

  // Response -> Display Student
  res.status(200).json({ showStudent });
};

exports.getSingleStudent = getSingleStudent;
