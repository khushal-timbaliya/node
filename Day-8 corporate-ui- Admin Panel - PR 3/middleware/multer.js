const multer = require("multer");

const Storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, "public/uploads")
    },
    filename: (req,file,cb) => {
        cb(null,file.fieldname + "" + Date.now())
    }
});

const upload = multer({storage: Storage}).single("catimage");

module.exports = upload;