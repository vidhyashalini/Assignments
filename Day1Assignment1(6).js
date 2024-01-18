var express = require("express");
var app = express();
app.get("/", function(req,res){

    let prodid = 10256;
    let productname = "LG Printer";
    let unitPrice = 2500;
    let quantity = 3;
    let totalAMT = 7500;

    let str = "<h1 align='center'>Product Details</h1>";
    
    str += `<style>
    table {
      border-collapse: collapse;
      width: 50%;
      margin: 20px auto;
    }
    th, td {
      border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;
    }
    th {
      background-color: #f2f2f2;
    }
  </style>
        <table>
            <tr>
            <td>Product ID </td> 
            <td>${prodid} </td>
            </tr>
            <tr>
            <td>Product Name </td> 
            <td>${productname} </td>
            </tr>
            <tr>
            <td>Product Price</td> 
            <td>${unitPrice}</td>
            </tr>
            <tr>
            <td>Quantity </td>
            <td>${quantity}</td>
            </tr>
            <tr>
            <td>TotalAMT</td>
            <td> ${totalAMT}</td>
            </tr>
        </table>`;


    res.send(str);
});

var server = app.listen(3005, function(){});
console.log("Express Server Application is started. Browser at the URL: http://localhost:3005/");