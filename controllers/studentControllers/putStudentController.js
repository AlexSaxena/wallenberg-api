const NewStudentData = require("../../models/studentFormSchema");

const putStudent = async (req, res) => {
  // Get ID from URL | take id from url -> params.id
  const studentID = req.params.id;

  // Get Data from request body
  const name = req.body.name;
  const nrOfParents = req.body.nrOfParents;
  const city = req.body.city;

  // Request -> Update Selected Student -> Doesn't return updated data.
  await NewStudentData.findByIdAndUpdate(studentID, {
    name: name,
    nrOfParents: nrOfParents,
    city: city,
  });

  // Find Updated student By ID
  const showStudent = await NewStudentData.findById(studentID);

  // Response -> Display Updated Student
  res.status(200).json({ updatedStudent: showStudent });
};

exports.putStudent = putStudent;
