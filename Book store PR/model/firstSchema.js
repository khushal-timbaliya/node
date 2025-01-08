const mongoose = require("mongoose")

const schema = mongoose.Schema({

    name :{
        type : String,
        required : true,
    },
    image:{
        type : String
    },
    author :{
        type : String,
        required : true,
    },
    price :{
        type : Number,
        required : true,
    },
    language :{
        type : String,
        required : true,
    },
});

const firstSchema = mongoose.model("book",schema);

module.exports = firstSchema;