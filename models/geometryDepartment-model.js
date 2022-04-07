const { DBService } = require("../db");
const Schema = DBService.getSchema();
const schema = {
    DPTO:String,
    geometry:Array,
};
