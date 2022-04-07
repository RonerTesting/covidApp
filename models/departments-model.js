const { DBService } = require("../db");
const Schema = DBService.getSchema();
const schema = {
    DPTO:String,
    NOMBRE_DPT:String,
    Coronavirus:String,
    Casos_Confirmados:String,
};
const Department = DBService.createModel("Department", schema);

module.exports = {
  Department,
};
