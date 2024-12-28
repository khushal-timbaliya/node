const express = require("express");
const port = 2005;

const app =express();

app.set("view engine","ejs");

let student = [
    {id:"1",name:"sumit",subject:"nodejs"},
    {id:"2",name:"puneet",subject:"expressjs"},
    {id:"3",name:"rahul",subject:"js"},
    {id:"4",name:"vivek",subject:"nextjs"}
]

app.get("/",(req,res)=>{
    res.render("index",{student})
});

app.listen(port,(err)=>{
    err?console.log(err):console.log("server started on port :"+port);
});

// const express = require("express");
// const port =2005;

// const app =express();



// app.listen(port,(err)=>{
//     err?console.log(err):console.log("server started on port : "+port);
// })

