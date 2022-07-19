var express=require('express');
var sql=require('mysql');
var router=express.Router();
var con=sql.createConnection({
    host:'localhost',
    user:"root",
    password:"",
    database:"employee",
})

router.post("/",function(req,res){
    res.render('login-form');
});
router.post("./dashboard",(req,res)=>{
   res.render("dashboard");
    
});
router.get("/",function(req,res){
 
    res.render('login-form');
});
module.exports=router;