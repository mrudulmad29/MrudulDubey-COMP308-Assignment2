let mongoose = require('mongoose');

// create a model class
let contactSchema = mongoose.Schema({
    name: String,
    email: String,
    message: String
},
{
    collection: "portfolio"
});

module.exports = mongoose.model('contact', contactSchema);