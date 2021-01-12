const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
    year : {
        type : Number,
        required: true
    }
})

const Session = mongoose.model ('Session' , sessionSchema);
module.exports = Session;