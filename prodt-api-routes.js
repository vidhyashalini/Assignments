const express = require("express");
const ProdtModel = require('./models/prodt-model');
const router = express.Router();

// Read All
router.get("/Prodt", async function (req, res) {

    let result = await ProdtModel.find({}, { "_id": 0 });

    try {
        console.log("[Read All] - No. of  items get from database : " + result.length);
        res.send(result);
    }
    catch (error) {
        // sending error details to client
        res.status(500).send(error);    
    }
});

// Read Single
router.get("/Prodt/:id", async function(req, res)
{
    var pno =  req.params.id;   	    
    let result  =  await ProdtModel.findOne({ Prodtno: pno}, {"_id":0});         
    console.log("[Read Single] - " + JSON.stringify(result));
    res.send(result);     
});


// Create 
router.post('/Prodt',  async  function (req,res)
{ 
        var prodtObj  = new  ProdtModel({ 
                Prodtno : parseInt(req.body.Prodtno),	
                pname  :  req.body.pname,
                Origin  : req.body.Origin });

        // Logic to insert new dept in database
        let newObj  =  await  prodtObj.save(); 
		
		var result = {};
		result.status  = "Record inserted in Database";
		console.log("[Create] - Record inserted in Database");
		res.send(result);           
});


// Update
router.put('/Prodt',  async function (req,res)
{ 
        var deptObj  = {};
        deptObj.Prodtno = parseInt(req.body.Prodtno);
        deptObj.Pname =  req.body.Pname;
        ProdtObj.Origin =  req.body.Origin; 

        // Logic to insert new dept in database
        let resResult  = await  ProdtModel.findOneAndUpdate(  {Prodtno:prodtObj.Prodtno},   {  $set : ProdtObj});
 
		var result = {};
		result.status  = "Record updated in Database";
		console.log("[Update] - Record updated in Database");
		res.send(result);	
});

// Delete
router.delete('/Prodt/:id',async function (req,res)
{  
    var pno =  req.params.id;   
    let resResult  =  await  ProdtModel.findOneAndDelete({ Prodtno: pno}); 

	var result = {};
	result.status  = "Record deleted from Database";
	console.log("[Delete] - Record deleted from Database");
	res.send(result);
       
});



module.exports = router;
