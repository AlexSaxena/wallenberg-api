const bcrypt = require("bcryptjs");
const User = require("../../models/UserSchema");

async function register(req, res) {
  try {
    // Get Username & Password from Req Body
    const { username, password } = req.body;

    // Validation for checking username & password Exist
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Användarnamn och Lösenord är Obligatoriska." });
    }

    // Check if the username is already taken
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res
        .status(409)
        .json({ message: "Användarnamnet är redan taget." });
    }

    // Creates Hash for password (encryption)
    const hashedPassword = bcrypt.hashSync(password, 8);

    // Create User with given Data
    await User.create({ username, password: hashedPassword });

    // Respond with success 200
    res.sendStatus(200);
  } catch (err) {
    console.error("Registration error ->", err);

    // Respond to user with a generic error message
    res
      .status(500)
      .json({ message: "Registreringen misslyckades. Försök igen." });
  }
}

module.exports = { register };
