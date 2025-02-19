const schema = require("../model/firstSchema");

module.exports.login = (req,res) => {
    res.render("login")
}

module.exports.userLogin = async (req,res) => {
    req.flash("success" , "login successfully !");
    res.redirect("/dashboard")
}

module.exports.dashboard = async (req,res) => {
    res.render("dashboard");
}
module.exports.profile = (req, res) => {
    res.render("profile");
}
module.exports.addadmin = (req,res) => {
    res.render("addadmin");
}

module.exports.addData = async (req,res) => {
    await schema.create(req.body)
    .then((data)=>{
        res.redirect("/addadmin")
    })
}

module.exports.viewAdmin = async (req,res) => {
    await schema.find({})
    .then((data)=> {
        res.render("viewAdmin", {data})
    })
}

module.exports.updateData = async (req,res) => {
    await schema.findByIdAndUpdate(req.body.id, req.body)
    .then((data)=> {
        res.redirect("/viewAdmin")
    })
}

module.exports.deleteData = async (req,res) => {
    await schema.findByIdAndDelete(req.query.id)
    res.redirect("/viewAdmin")
}

module.exports.editData = async (req,res) => {
    await schema.findById(req.query.id)
    .then((data)=>{
        res.render("editAdmin", {data})
    })
}