const express = require("express");
const bodyParser = require("body-parser");
const { ColombiaCovid } = require('./service/index')
const app = express();

let covidData = new ColombiaCovid();
covidData.getData();

// console.log(data);
const port = 3000;
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("xd...");
});

app.listen(port, () => {
  console.log("Mi port " + port);
});
