const fetch = require("node-fetch");
const fs = require('fs');
class ColombiaCovid{
    constructor(){
        this.dataURL ='https://services.arcgis.com/BQTQBNBsmxjF8vus/ArcGIS/rest/services/Colombia_COVID19V/FeatureServer/1/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=DPTO%2CNOMBRE_DPT%2CCoronavirus%2CCasos_Confirmados&returnGeometry=false&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&defaultSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token='
        this.geometryURL ='https://services.arcgis.com/BQTQBNBsmxjF8vus/ArcGIS/rest/services/Colombia_COVID19V/FeatureServer/1/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=DPTO&returnGeometry=true&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&defaultSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token='
    }
    async saveData() {
        let data =  await fetch(this.dataURL)
        let filterData = await data.json()
        let spreadData = filterData.features;
        
        console.log(spreadData);
    }
    async saveGeometry(){
        let data =  await fetch(this.geometryURL)
        let filterData = await data.json()
        let spreadData = filterData.features;
        
        let dataAsJSON =  JSON.stringify(spreadData)
        
        // fs.writeFile('DPTOGeometry.json',dataAsJSON,(err)=>{
        //    if(err) throw err;
        //    console.log('Data written to file'); 
        // })
        //81
        
        let DPTO85 = spreadData.filter(element=>element.attributes.DPTO==85)
        console.log(DPTO85);

    }
}
module.exports={
    ColombiaCovid
}


