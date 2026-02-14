const express = require("express");
const router = express.Router();

let projects = []; // temporary storage

// Create Project (Team Lead)
router.post("/create", (req, res) => {
  const { title, description, deadline } = req.body;

  const newProject = {
    id: projects.length + 1,
    title,
    description,
    deadline,
  };

  projects.push(newProject);

  res.json({ message: "Project created", project: newProject });
});

// Get All Projects
router.get("/", (req, res) => {
  res.json(projects);
});

module.exports = router;
