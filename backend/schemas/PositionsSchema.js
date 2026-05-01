const {Schema} = require("mongoose");
// there can be multiple schema in one file
const PositionsSchema = new Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss : Boolean,
});

module.exports = {PositionsSchema};