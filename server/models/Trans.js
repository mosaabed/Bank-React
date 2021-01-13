const mongoose = require('mongoose')
const Schema = mongoose.Schema


const TransSchema = new Schema({
    amount : Number,
    vendor: String,
    category : String 
})

const Trans = mongoose.model("studentModel" , TransSchema)
module.exports = Trans