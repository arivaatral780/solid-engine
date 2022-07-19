var express=require('express');
var app=express();
app.use(express.urlencoded({extended:false}));
app.set("view engine","ejs");
app.use('/',require('./routes/registration-route'));
app.use('/dashboard',require('./routes/dashboard-route'));
app.use("/login",require("./routes/login-route"));
console.log("The server is running at http://localhost:8080");
app.listen(8080);