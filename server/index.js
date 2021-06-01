const express = require("express");

const {getRepo} = require("./utils/getRepo");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Welcome to Commit-Show" });
});

app.get("/repo", async (req, res) => {
  const result = await getRepo();
  res.json(result)
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
