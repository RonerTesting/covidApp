const express = require("express");
const bodyParser = require("body-parser");
const { DepartmentService } = require('./service/department')
const app = express();

let covidData = new DepartmentService();
covidData.saveDepartment();

// console.log(data);
const port = 3000;
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("xd...");
});

app.listen(port, () => {
  console.log("Mi port " + port);
});
