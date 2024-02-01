const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 8081;

// app.use(express.static(__dirname + "/dist/"));
// app.get("*", (req, res) => {
//   res.sendFile(__dirname + "/dist/index.html");
// });
app.get("/",function(req,res){
  res.sendFile(path.join(__dirname, "../stock-visualizer/dist/index.html")),
  function(err){
    if(err){
      res.status(500).send(err)
    }
  }
})
console.log("port", process.env.PORT);
app.get("/", (req, res) => {
  res.status(200).json({
    result: "Hello Dunia!",
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
