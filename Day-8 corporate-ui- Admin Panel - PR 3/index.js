const express = require("express");
const port = 9099;

const app = express();
const path = require('path')
const db = require("./config/db")
const schema = require("./model/firstSchema");
const cookie = require("cookie-parser");
const session = require("express-session");
const passport = require("./middleware/passport");
const flash = require("connect-flash");
const flashconnect = require("./middleware/flashconnect");

app.use(express.urlencoded());
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(cookie());
app.use(session({
    name: "local",
    secret: 'Corporate',
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge: 100 * 100 * 60 }
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.AuthenticatedUser);
app.use(flash());
app.use(flashconnect.setflash);

app.use("/", require("./route/route"));
app.use("/category",require("./route/cateroute"));
app.use("/subcategory", require("./route/subcatroute"));
app.use("/product",require("./route/ProductRoute"));

app.listen(port,(err)=> {
    err ? console.log(err) : console.log("server started on port :" + port);
});
