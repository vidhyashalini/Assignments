
var express = require("express");

var app = express();   // Creates an express application

app.set("view engine", "hbs");

app.get("/", function (req, res) {

    let dataObj = {};
   

    dataObj.applicationArray = [
        { name: "Alfreds Futterkiste", city:"Berlin" , country:"Germany" },
        { name: "Ana Trujillo Emparedados y helados", city:"México D.F." , country:"Mexico" },
        { name: "Antonio Moreno Taquería", city:"México D.F." , country:"Mexico" },
        { name: "Around the Horn", city:"London" , country:"UK" },
        { name: "B's Beverages", city:"London" , country:"UK" },
        { name: "Berglunds snabbköp", city:"Luleå" , country:"Sweden" },
        { name: "Blauer See Delikatessen", city:"Mannheim" , country:"Germany" },
       
    ];

   
    res.render("home", dataObj);
});

var server = app.listen(3005, function () { });
console.log("Express Server Application is started. Browser at the URL: http://localhost:3005/");