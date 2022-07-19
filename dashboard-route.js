var express=require('express');
var sql=require('mysql');
var con=sql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"employee",
});
var router=express.Router();

con.connect(function(err){
    if(err){
        throw err;
    }
    console.log("Successfully connected to database");
})

router.post("/",(req,res)=>{
    var email=req.body.email;
    var name=req.body.name;
    var password=req.body.password;
    var a="SELECT * FROM EMPLOYEE WHERE email=?";
    con.query(a,[email],(err,data)=>{
        if(err){
            throw err;
        }
        else if(data.length>0){
            res.send("same email already exist");
        }
        else{
            var b="insert into employee values(?,?,?)";
            con.query(b,[name,email,password],(err,data)=>{
                if(err){
                    throw err;
                }
                console.log("Inserted into database successfully");
            });
            
            res.render('dashboard');
        }
    })
    
   
});
router.post("/front",(req,res)=>{
    var email=req.body.email;
    var password=req.body.password;
    var a="SELECT * FROM EMPLOYEE WHERE email=? and password=?";
    con.query(a,[email,password],(err,data)=>{
            if(err){
                throw err;
            }
            else if(data.length>0){
                res.render('dashboard');
            }
            else{
                res.send("Not correct credential");
            }
    })
})
module.exports=router;