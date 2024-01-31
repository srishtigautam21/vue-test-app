const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 8081;

console.log("port", process.env.PORT);
app.get("/", (req, res) => {
  res.status(200).json({
    result: "Hello Dunia!",
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
