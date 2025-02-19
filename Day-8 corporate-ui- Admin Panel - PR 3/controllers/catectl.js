const schema =  require("../model/catschema");
const fs = require("fs");
const path = require("path");

module.exports.addCate = (req,res) => {
    res.render("addCate");
}

module.exports.addCategory = async (req,res) => {
    req.body.catimage = req.file.path;
    await schema.create(req.body)
    .then((data)=>{
        res.redirect("/category/addCate")
    })
}

module.exports.viewcat = async (req,res) => {
    await schema.find({})
    .then((data) => {
        res.render("viewcat",{data})
    })
}