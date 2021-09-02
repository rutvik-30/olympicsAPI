const mongoose=require("mongoose");

//const validator=require("validator");

const olympicsSchema=new mongoose.Schema({
    Event:{
        type:String,
        required:true,
        default:"Mens Javelin Throw"
    },
    Rank:{
        type:Number,
        required:true,
        unique:true
    },
    Name:{
        required:true,
        type:String
    },
    DOB:{
        type:Date,
        required:true,
        trim:true
    },
    Country:{
        type:String,
        required:true,
        trim:true
    },
    Score:{
        type:Number,
        required:true
    }
})

const OLYMPICSMODEL=new mongoose.model("OLYMPICSMODEL",olympicsSchema);

module.exports = OLYMPICSMODEL;