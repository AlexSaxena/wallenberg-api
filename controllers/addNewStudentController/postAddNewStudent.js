const NewStudentData = require("../../models/studentFormSchema");

const postNewStudent = async (req, res) => {
  // Get newStudent data from req.body
  const name = req.body.name;
  const nrOfParents = req.body.nrOfParents;
  const city = req.body.city;

  // Create NewStudent Data
  const newStudent = await NewStudentData.create({
    name: name,
    nrOfParents: nrOfParents,
    city: city,
  });
  // Respond with sucess message
  res.status(200).json({ newStudent: newStudent });
};

exports.postNewStudent = postNewStudent;
