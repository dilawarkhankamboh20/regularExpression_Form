const User = require("../models/user");


const signinController=()=>{

    return{
        signin(req, res){
            return res.render("signin")
        },

async postsignin(req, res){
        
        const {name, email, mobile}=req.body;
        if (!name || !email || !mobile) {
            req.flash("error", "All fields are required")
            return res.redirect("/")
        }

    //    create user
        
        const user=new User({
            name, email, mobile
        })

        await user.save()
        return res.redirect("/")
        }
    }
}

module.exports= signinController;