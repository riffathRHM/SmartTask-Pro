import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to my apps!!!!");
});

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
