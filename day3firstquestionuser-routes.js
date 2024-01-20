
const express = require("express");
const router = express.Router();

router.get("/Login", function (req, res) {       
    res.render("login", { errorMessage : "" });
});
router.get("/Products", function (req, res) {       
    res.render("products", { errorMessage : "" });
});
router.post("/Login", function (req, res) {   
    
    let uid = req.body.t1;
    let pwd = req.body.t2;

    if(uid == "admin" && pwd == "admin123")
    {       
        res.redirect("/");  // Redirect from one route to another route
    }
    else
    {   res.render("login", { errorMessage : "Invalid uid or password."  });
    }   
});
router.post("/products", function (req, res) {   
    
    let productid = req.body.t1;
    let productname = req.body.t2;
    let price = req.body.t3;
    let quantity = req.body.t4;
    let category = req.body.t5;

    if(productid == "pdt1","pdt2","pdt3" && productname == "TV","T-Shirt","book" && price >= "0" && quantity >= "0" && category == "Home","Electronics","Clothing" )
    {       
        res.redirect("/");  // Redirect from one route to another route
    }
    else
    {   res.render("products", { errorMessage : "Invalid productid"  });
    }   
});

module.exports = router;