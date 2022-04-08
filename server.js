const express = require("express");
const bodyParser = require("body-parser");
const { GeometryDepartmentService } = require('./service/geometryDepartment')
const app = express();

let covidData = new GeometryDepartmentService();
covidData.saveGeometry();

// console.log(data);
const port = 3000;
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("xd...");
});

app.listen(port, () => {
  console.log("Mi port " + port);
});
