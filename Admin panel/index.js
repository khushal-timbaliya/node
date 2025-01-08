const express = require("express");
const port = 2005;


const app = express();
app.set("view engine","ejs");

app.listen(port,(err)=>{
    err ? console.log(err): console.log("serverstarted on port : "+port); 
});