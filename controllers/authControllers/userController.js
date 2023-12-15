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
        .json({ error: "Username and password are required." });
    }

    // Creates Hash for password (encryption)
    const hashedPassword = bcrypt.hashSync(password, 8);

    // Create User with given Data
    await User.create({ username, password: hashedPassword });
    // Respond with New User
    res.sendStatus(200);
  } catch (err) {
    console.error(err);

    // Respond with an error message
    res.status(400).json({ error: "Registration failed. Please try again." });
  }
}

function login(req, res) {
  return "login";
}

function logout(req, res) {
  return "logout";
}

module.exports = { register, login, logout };
