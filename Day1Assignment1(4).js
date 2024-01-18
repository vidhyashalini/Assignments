var express = require("express");

var app =  express();   // Creates an express application

app.get("/", function(req, res){

    let str = "<h3 align='center'>Employee Details</h3>";   
    str +=   "<hr/>";
    str +=   "<div style='color:blue;'>";
    str +=   "Employee ID : 10256 <br/>";
    str +=   "Employee Name : Narasimha Rao <br/>";
    str +=   "Employee Job  : Manager <br/>";
    str +=   "Employee Deptno : 10 <br/>";
    str +=   "Employee EmailID : tnrao.trainer@gmail.com <br/>";
    str +=   "</div>";

    res.send(str);
});

var server = app.listen(3005, function(){});
console.log("Express Server Application is started. Browser at the URL: http://localhost:3005/");
