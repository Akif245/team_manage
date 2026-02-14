const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend running...");
});

app.get("/api/test", (req, res) => {
  res.json({ message: "API working!" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


const projectRoutes = require("./routes/projectRoutes");
app.use("/api/projects", projectRoutes);


const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);
