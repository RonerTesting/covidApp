const fetch = require("node-fetch");
const { Department } = require('../models/departments-model');
class DepartmentService{
    constructor(){
        this.dataURL ='https://services.arcgis.com/BQTQBNBsmxjF8vus/ArcGIS/rest/services/Colombia_COVID19V/FeatureServer/1/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=DPTO%2CNOMBRE_DPT%2CCoronavirus%2CCasos_Confirmados&returnGeometry=false&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&defaultSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token='
    }
    async saveDepartment() {
        let data =  await fetch(this.dataURL)
        let filterData = await data.json()
        let spreadData = filterData.features;
        // console.log(spreadData);
        let DPTO85 = spreadData.filter(element=>element.attributes.DPTO==85)
        DPTO85.forEach(element => {
            console.log(element.attributes);
        });
    }
}
module.exports={
    DepartmentService
}


