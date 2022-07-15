const signinController = require("../controllers/signin_Controller");

const routes=(app)=>{

    app.get("/" , signinController().signin)
    app.post("/signin" , signinController().postsignin)
    
}


module.exports= routes;