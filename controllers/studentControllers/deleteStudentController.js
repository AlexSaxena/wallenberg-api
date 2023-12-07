const NewStudentData = require("../../models/studentFormSchema");

const deleteStudent = async (req, res) => {
  // Get ID from URL | take id from url -> params.id
  const studentID = req.params.id;

  try {
    // Request -> DELETE Selected Student
    const result = await NewStudentData.deleteOne({ _id: studentID });

    if (result.deletedCount === 1) {
      // Respond with Http Status
      res.json({ message: "Student Deleted" }).status(204);
    } else {
      // If the Student with the provided ID doesn't exist
      res.json({ error: "Student not found" }).status(404);
    }
  } catch (error) {
    console.error("Error deleting student:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteStudent = deleteStudent;
