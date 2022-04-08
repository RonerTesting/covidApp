#!/usr/bin/env node

var child_process = require("child_process");

async function runCmd(cmd) {
  var resp = await child_process.exec(cmd);

  var result = resp.toString("UTF8");
  resp.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });
  resp.on("exit", (code, signal) => {
    if (code) console.log(`Process exit with code: ${code}`);
    if (signal) console.log(`Process killed with signal: ${signal}`);
    console.log(`Departments Data downloaded!\n Done ✅`);

    let cmd = `mongoimport --uri  mongodb://localhost:27017/ColombiaCovid --collection Departments --type json --file dataDay.json --jsonArray`;
    var res =  child_process.exec(cmd);
    res.stdout.on("data", (data) => {
      console.log(`stdout: ${data}`);
    });
    res.on("exit", (code, signal) => {
      if (code) console.log(`Process exit with code: ${code}`);
      if (signal) console.log(`Process killed with signal: ${signal}`);
      console.log(`Departments Data imported to mongoDB!\n Done ✅`);

      })
    
  });

  return result;
}

let cmd = `curl -s "https://services.arcgis.com/BQTQBNBsmxjF8vus/ArcGIS/rest/services/Colombia_COVID19V/FeatureServer/1/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=DPTO%2CNOMBRE_DPT%2CCoronavirus%2CCasos_Confirmados&returnGeometry=false&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&defaultSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=" | jq -r '.features' > dataDay.json`;
let result = runCmd(cmd);
