const express = require("express");
const port = 3520;
const path = require("path");


const app = express();
app.set("view engine" , "ejs");
const db = require("./confige/db");
app.use(express.urlencoded());

app.use(express.static(path.join(__dirname, "public")));

app.use("/uploads",express.static(path.join(__dirname ,'uploads')));

app.use("/" , require("./routes/route"));

app.listen(port,(err) =>{
    err ? console.log(err) : console.log("server started on port " + port);
})

