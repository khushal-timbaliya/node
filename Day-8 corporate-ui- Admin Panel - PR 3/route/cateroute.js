const express = require("express");
const router = express.Router();
const ctl = require("../controllers/catectl");
const multer = require("../middleware/multer");

router.get("/addCate",ctl.addCate);
router.post("/addCategory",multer,ctl.addCategory);
router.get("/viewcat",ctl.viewcat)

module.exports = router;