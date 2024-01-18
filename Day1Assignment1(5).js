var express = require("express");
var app = express();
app.get("/", function(req,res){

    let id = 10256;
    let name = "Narasimha Rao";
    let job = "Manager";
    let deptno = 10;
    let email = "tnrao.trainer@gmail.com";

    let str = "<h1 align='center'>Welcome to Express JS Applications</h1>";
    str += "<hr/>";
    str += `<div  style="border:1px solid gray; border-top-width: 20px; padding:5px; width:300px; border-radius:10px;">
                Employee ID : ${id} <br/>
                Employee Name : ${name} <br/>
                Employee Job : ${job} <br/>
                Employee Deptno : ${deptno} </br>
                Employee E-mail : ${email} </br>
            </div>`;

    res.send(str);
});

var server = app.listen(3005, function(){});
console.log("Express Server Application is started. Browser at the URL: http://localhost:3005/");