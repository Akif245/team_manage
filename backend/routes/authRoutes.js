const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Dummy login logic
  if (email === "hr@gmail.com" && password === "123") {
    return res.json({ role: "HR" });
  }

  if (email === "lead@gmail.com" && password === "123") {
    return res.json({ role: "TEAM_LEAD" });
  }

  if (email === "intern@gmail.com" && password === "123") {
    return res.json({ role: "INTERN" });
  }

  return res.status(401).json({ message: "Invalid credentials" });
});

module.exports = router;
