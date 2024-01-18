
var express = require("express");

var app = express();   // Creates an express application

app.set("view engine", "ejs");

app.get("/", function (req, res) {

    let dataObj = {};
    

    dataObj.deptsArray = [
        { id: 1, fname: "George",lname: "Bluth",email:"george.bluth@reqres.in"},
        { id: 2, fname: "Janet",lname: "Weaver",email:"janet.weaver@reqres.in"},
        { id: 3, fname: "Emma",lname: "Wong",email:"emma.wong@reqres.in"},
        { id: 4, fname: "Eve",lname: "Holt",email:"eve.holt@reqres.in"},
        { id: 5, fname: "Charles",lname: "Morris",email:"charles.morris@reqres.in"},
        { id: 6, fname: "Tracey",lname: "Ramos",email:"tracey.ramos@reqres.in"},
       
    ];


    res.render("home", dataObj);
});

var server = app.listen(3005, function () { });
console.log("Express Server Application is started. Browser at the URL: http://localhost:3005/");