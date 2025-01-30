const express = require("express");
const route = express.Router();
const ctl = require("../controller/ctl");
const upload = require("../middleware/multer")
const passport = require("../middleware/passport")


route.get("/", ctl.loginuser)
route.post("/login", passport.authenticate("local", { failureRedirect: "/" }),
    ctl.login
)
route.get("/logOut",passport.checkAuth, ctl.logOut)
route.get("/dashboard", passport.checkAuth,ctl.dashboard)
route.get("/addAdmin", passport.checkAuth,ctl.addAdmin)
route.post("/addData", passport.checkAuth,upload, ctl.addData)
route.get("/deleteAdmin",upload, ctl.deleteAdmin)
route.get("/viewAdmin", passport.checkAuth,upload, ctl.viewAdmin)
route.get("/editAdmin", passport.checkAuth,ctl.editAdmin)
route.post("/updateData",upload, ctl.updateData)

module.exports = route;