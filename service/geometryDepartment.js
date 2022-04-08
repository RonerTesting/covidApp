const fetch = require("node-fetch");
const { Geometry } = require('../models/geometryDepartment-model');
class GeometryDepartmentService{
    constructor(){
        this.geometryURL ='https://services.arcgis.com/BQTQBNBsmxjF8vus/ArcGIS/rest/services/Colombia_COVID19V/FeatureServer/1/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=DPTO&returnGeometry=true&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&defaultSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token='
    }
    async saveGeometry(){
        let data =  await fetch(this.geometryURL)
        let filterData = await data.json()
        let geometries = filterData.features;

        // spreadData.forEach(element => {
        // for (const geometry of geometries ) {
        await Promise.all(geometries.forEach(element => {
            const aGeometry =  new Geometry(JSON.stringify(element));
            const response = aGeometry.save();
            // console.log(element,response);
            console.log(response);
        }))

        // }
        // });
        // let DPTO85 = spreadData.filter(element=>element.attributes.DPTO==85)
        // console.log(DPTO85);
 
    }
}
module.exports={
    GeometryDepartmentService
}


