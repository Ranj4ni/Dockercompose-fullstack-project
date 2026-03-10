const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("DevOps Full Stack Project Running 🚀");
});

app.get("/tasks", (req, res) => {
  res.json([
    { task: "Learn Docker" },
    { task: "Learn Kubernetes" },
    { task: "Build DevOps Project" }
  ]);
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
