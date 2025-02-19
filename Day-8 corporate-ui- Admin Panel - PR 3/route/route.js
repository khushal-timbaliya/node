const express = require("express");
const route = express.Router();
const ctl = require("../controllers/ctl");
const passport = require("../middleware/passport");


route.get("/", ctl.login);
route.post("/userLogin" ,passport.authenticate("local",{failureRedirect: "/"}),
    ctl.userLogin
)

route.get("/dashboard",passport.checkAuth,ctl.dashboard);
route.get("/addadmin", passport.checkAuth,ctl.addadmin);
route.post("/addData", passport.checkAuth,ctl.addData);
route.get("/viewAdmin", passport.checkAuth,ctl.viewAdmin);
route.get("/editData", passport.checkAuth,ctl.editData);
route.post("/updateData",ctl.updateData)
route.get("/deleteData",ctl.deleteData);
route.get("/profile",passport.checkAuth,ctl.profile);

module.exports = route;