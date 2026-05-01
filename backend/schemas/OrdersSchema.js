const {Schema} = require("mongoose");
// there can be multiple schema in one file
const OrdersSchema = new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode: String,
});

module.exports = {OrdersSchema};