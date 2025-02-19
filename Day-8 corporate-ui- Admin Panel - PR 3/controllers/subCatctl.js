const catschema = require("../model/catschema");
const subschema = require("../model/subcatSchema");

module.exports.addsubCat = async (req, res) => {
    await catschema.find({})
    .then((data)=>{
        res.render("addSubcat", {data})
    })
}

module.exports.addsubCategory = async (req, res) => {
    await subschema.create(req.body)
        .then(() => {
            res.redirect("/subcategory/addSubcat")
        })
}

module.exports.viewsubCat = async (req,res) => {
    await subschema.find({}).populate("categoryId")
    .then((data)=>{
        res.render("viewsubCat",{data})
    })
}
