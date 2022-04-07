#!/usr/bin/env node

var child_process = require('child_process');

async function runCmd(cmd)
{
  var resp = await child_process.exec(cmd);
  var result = resp.toString('UTF8');
  
  return result;
}

var cmd = `curl -s "https://services.arcgis.com/BQTQBNBsmxjF8vus/ArcGIS/rest/services/Colombia_COVID19V/FeatureServer/1/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=DPTO&returnGeometry=true&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&defaultSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=" | jq -r '.features'  > coordinates.json`;  
var result = runCmd(cmd);

console.log(result);