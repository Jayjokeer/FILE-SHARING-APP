const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({
    originalName:{
        type:String,
        required:true
    },
    path:{
        type:String,
        required:true
    },
    password:{
        type:String
    },
    downloadcount:{
        type:Number,
        required:true,
        default:0
    }
})

module.exports = mongoose.model('filedb',fileSchema)