function logout(req, res) {
  res.clearCookie("Authorization");
  res.sendStatus(200);
}

module.exports = { logout };
