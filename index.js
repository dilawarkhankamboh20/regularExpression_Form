const express=require("express")
const path=require("path")
const ejs=require("ejs")
const session=require("express-session")
const MongStore=require("connect-mongo")
const flash=require("express-flash")
const app= express()
const PORT= process.env.PORT || 3000;

// connection
require("./connection/connection")

// session
app.use(session({
    secret:"thisisregularexpression",
    saveUninitialized:false,
    resave:true,
    store: MongStore.create({
        mongoUrl: "mongodb://localhost:27017/regular"
    })
}))


// set template engine
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "templates/views"))
app.use(express.static("public"))
app.use(express.urlencoded({extended:false}))
app.use(flash())

// routes
require("./routers/web")(app)



// server
app.listen(PORT, ()=>{
    console.log(`Listing on the port ${PORT}`);
})