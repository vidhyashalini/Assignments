
const express = require("express");
const bodyParser = require("body-parser");  
const userRouter = require('./user-routes');
const prodRouter = require('./prod-routes');

// Creates an express application
var app = express();   

app.use(bodyParser.urlencoded({extended : false})); 
// app.use(userRouter);
app.use("/user", userRouter);
app.use("/prod", prodRouter);
 
// Confgiure the middleware
app.set("view engine", "ejs");

app.get("/", function (req, res) {   
    res.render("home", {});
});


var server = app.listen(3005, function () { });
console.log("Express Server Application is started. Browser at the URL: http://localhost:3005/");