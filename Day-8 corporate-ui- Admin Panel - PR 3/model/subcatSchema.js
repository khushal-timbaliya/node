const mongoose = require("mongoose");

const schema = mongoose.Schema({
    subcatName: {
        type: String,
        require: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "corporate-panel-cate",
        required: true
    }
})

const firstschema = mongoose.model("SubCategorie", schema);

module.exports = firstschema;