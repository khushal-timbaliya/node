const mongoose = require("mongoose");

const  schema = mongoose.Schema({
    catName: {
        type: String,
        require: true
    },
    catimage: {
        type: String,
        require: true
    }
})

const firstschema = mongoose.model("corporate-panel-cate", schema);

module.exports = firstschema;