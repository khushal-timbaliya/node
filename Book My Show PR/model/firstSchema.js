const mongoose = require("mongoose");

const schema = mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    directername: {
        type: String,
        required: true,
    },
    catagory: {
        type: String,
        required: true,
    },
});

const firsSchema = mongoose.model("data", schema);
module.exports = firsSchema;