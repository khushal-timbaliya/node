const express = require("express");
const route = express.Router()
const ctl = require("../controllers/subCatctl");
const upload = require("../middleware/multer");

route.get("/addsubCat", ctl.addsubCat);
route.post("/addSubcat", ctl.addsubCategory);
route.get("/viewSubcat", upload ,ctl.viewsubCat);

module.exports = route;