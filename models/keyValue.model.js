const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let KeyValueSchema = new Schema({
    key: {type: String, required: true, max: 100},
    value: {type: String, required: true, max: 100},
});


// Export the model
module.exports = mongoose.model('KeyValue', KeyValueSchema);