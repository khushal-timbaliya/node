const passport = require("passport");
const loclast = require("passport-local").Strategy

const schema = require("../model/firstSchema");

passport.use(
    "local",
    new loclast({usernameField: "email"}, async(email,password,done)=>{
        let admin = await schema.findOne({email: email});

        if(admin) {
            if(admin.password == password){
                return done(null,admin);
            }
            else{
                return done(null,false)
            }
        }

        else{
            return done(null,false)
        }
    })
)

passport.serializeUser((user,done)=> {
    done(null,user.id)
});

passport.deserializeUser(async(userId,done)=>{
    let admin = await schema.findById(userId)
    done(null,admin)
});

passport.checkAuth = (req,res,next) => {
    if(req.isAuthenticated())
    {
        next()
    }
    else{
        res.redirect("/")
    }
}

passport.AuthenticatedUser = (req,res,next) => {
    if(req.isAuthenticated())
    {
        res.locals.user = req.user;
    }

    next();
};

module.exports = passport