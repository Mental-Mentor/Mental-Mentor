
// Express to run server and routes
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
var path = require('path');

const app = express();
app.set("view engine","ejs");

app.use(express.static("src"));
app.use(bodyParser.urlencoded({ extended: true }));

const port = 8000;

// Spin up the server
const server = app.listen(port, listening);
function listening() {
  console.log(`running in the localhost: ${port}`);
}

// setting routes for all pages
app.get('/', function(req, res){
  res.render("home");
})

app.get('/questionnaire', function(req, res){
  res.render("questionnaire");
})

app.get('/register', function(req, res){
  res.render("register");
})

app.get('/login', function(req, res){
  res.render("login");
})

app.get('/profile', function(req, res){
  res.render("profile");
})

// Database setup
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://root:root@cluster0.ejtkg.mongodb.net/mental_mentor_db?retryWrites=true&w=majority", {useNewUrlParser: true})
    .then(() =>{
        console.log("MONGO CONNECTION OPEN");
    })
    .catch(err => {
        console.log("ERROR")
        console.log(err)
    });

   
const userSchema = {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    repassword: String,
    phoneNo: Number,
    dob: Number,
    address1: String,
    address2: String,
    city: String,
    state: String,
    zipcode: Number
}
//console.log(userSchema);

const User = new mongoose.model('User',userSchema);

app.post('/register', function(req,res){
  const newUser = new User ({
    firstName: req.body.fName,
    lastName: req.body.lName,
    email: req.body.email,
    password: req.body.password,
    repassword: req.body.repassword,
    phoneNo: req.body.phone,
    dob: req.body.bDay,
    address1:req.body.add1,
    address2: req.body.add2,
    city: req.body.city,
    state: req.body.state,
    zipcode: req.body.zip
  })
  console.log(req.body.firstname);
  newUser.save(function(err){
    if(err){
      console.log(err);
    }else{
      res.render("login");
    }
  })
})

app.post("/login", function(req,res){
  const username = req.body.username;
  const password = req.body.password;

  User.find(function(err, users){
    if(err){
        console.log(err);
    }else {
        users.forEach(function(user){
            if(user.email == username && user.password == password){
                console.log(user.email);
                res.render("profile");
            }
            
        })
        
    }
})

})

