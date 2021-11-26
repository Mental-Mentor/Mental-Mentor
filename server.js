// Express to run server and routes
//require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
var path = require("path");
const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");

const app = express();
app.set("view engine", "ejs");

app.use(express.static("src"));
app.use(
  "/css",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
)
app.use(
  "/js",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
)
app.use("/js", express.static(path.join(__dirname, "node_modules/jquery/dist")))
app.use(bodyParser.urlencoded({ extended: true }));

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

// Spin up the server
const server = app.listen(port, listening);
function listening() {
  console.log(`running in the localhost: ${port}`);
}

// setting routes for all pages
app.get("/", function (req, res) {
  res.render("home");
});

app.get("/questionnaire", function (req, res) {
  res.render("questionnaire");
});

app.get("/register", function (req, res) {
  res.render("register");
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/profile", function (req, res) {
  res.render("profile");
});

app.get("/submission", function (req, res) {
  res.render("submission");
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.get("/therapistRegister", function (req, res) {
  res.render("therapistRegister");
});

app.get("/therapistLogin", function (req, res) {
  res.render("therapistLogin");
});

app.get("/therapist", function (req, res) {
  res.render("therapist");
});

app.get("/results", function (req, res) {
  res.render("results");
});

app.get("/therapistLogin", function (req, res) {
  res.render("therapistLogin");
});
// Database setup

const uri = process.env.URI;
mongoose
  .connect(
    "mongodb+srv://root:root@cluster0.ejtkg.mongodb.net/mental_mentor_db?retryWrites=true&w=majority", { useNewUrlParser: true }
  )
  .then(() => {
    console.log("MONGO CONNECTION OPEN");
  })
  .catch((err) => {
    console.log("ERROR");
    console.log(err);
  });

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  repassword: String,
  phoneNo: Number,
  dob: String,
  address1: String,
  address2: String,
  city: String,
  state: String,
  zipcode: Number,
});

const secret = "Thisisourlittlesecret";
userSchema.plugin(encrypt, {secret: secret, encryptedFields: ['password', 'repassword']});

const User = new mongoose.model("User", userSchema);

app.post("/register", function (req, res) {
  const newUser = new User({
    firstName: req.body.fName,
    lastName: req.body.lName,
    email: req.body.email,
    password: req.body.password,
    repassword: req.body.repassword,
    phoneNo: req.body.phone,
    dob: req.body.bDay,
    address1: req.body.add1,
    address2: req.body.add2,
    city: req.body.city,
    state: req.body.state,
    zipcode: req.body.zip,
  });
  console.log(req.body.firstname);
  newUser.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      res.render("submission");
    }
  });
});

app.post("/login", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  User.findOne({ email: username }, function (err, foundUser) {
    if (err) {
      console.log(err);
      res.send("Username is wrong");
    } else {
      if (foundUser) {
        if (foundUser.password === password) {
          userId = foundUser.id;
          userFirstname = foundUser.firstName;
          userLastName = foundUser.lastName;
          userEmail = foundUser.email;
          userPhoneNo = foundUser.phoneNo;
          userDob = foundUser.dob;
          userAddress1 = foundUser.address1;
          userAddress2 = foundUser.address2;
          userCity = foundUser.city;
          userState = foundUser.state;
          userZipcode = foundUser.zipcode;
          
          res.render("profile", {
            firstName: userFirstname,
            lastName: userLastName,
            email: userEmail,
            phoneNo: userPhoneNo,
            dob: userDob,
            address1: userAddress1,
            address2: userAddress2,
            city: userCity,
            state: userState,
            zipcode: userZipcode,
          });
        }
      }
    }
  });
});

// Getting questionnaire results and sending therapist to frontend
let result = "All(Mood,Family,Addiction)";
app.post("/questionnaire", function (req, res) {
  const q1 = req.body.q1;
  const q2 = req.body.q2;
  const q3 = req.body.q3;
  const q4 = req.body.q4;
  const q5 = req.body.q5;
  const q6 = req.body.q6;
  const q7 = req.body.q7;
  const q8 = req.body.q8;
  const q9 = req.body.q9;

  let moodScore = q1 + q2 + q3;
  let familyScore = q4 + q5 + q6;
  let addictionScore = q7 + q8 + q9;

  let scoreArray = [moodScore, familyScore, addictionScore];
  scoreArray.sort((a, b) => a - b);
  
  let result = "All(Mood,Family,Addiction)";
  if (scoreArray[1] == scoreArray[2]) {
    console.log("return All Therapist");
    result = "All(Mood,Family,Addiction)";
  } else if (scoreArray[2] == moodScore) {
    console.log("return Mood Therapist");
    result = "Mood";
  } else if (scoreArray[2] == familyScore) {
    console.log("return Family Therapist");
    result = "Family";
  } else if (scoreArray[2] == addictionScore) {
    console.log("return Addiction Therapist");
    result = "Addiction";
  }
  console.log(result);
  Therapist.findOne({ category: result }, function (err, foundTherapist) {
    if (err) {
      console.log(err);
      res.send("Username is wrong");
    } else {
      if (foundTherapist) {
        therapistFirstname = foundTherapist.firstName;
        therapistLastName = foundTherapist.lastName;
        therapistEmail = foundTherapist.email;
        therapistPhoneNo = foundTherapist.phoneNo;
        therapistDob = foundTherapist.dob;
        therapistCategory = foundTherapist.category;
        therapistExperience = foundTherapist.experience;
        therapistAddress1 = foundTherapist.address1;
        therapistAddress2 = foundTherapist.address2;
        therapistCity = foundTherapist.city;
        therapistState = foundTherapist.state;
        therapistZipcode =foundTherapist.zipcode;
        // rendering results page with therapist information
        res.render("results", {
          firstName: therapistFirstname,
          lastName: therapistLastName,
          email: therapistEmail,
          phoneNo: therapistPhoneNo,
          dob: therapistDob,
          category: therapistCategory,
          experience: therapistExperience,
          address1: therapistAddress1,
          address2: therapistAddress2,
          city: therapistCity,
          state: therapistState,
          zipcode: therapistZipcode,
        });
      }
    }
  });
});

// creating db for therapists Therapist

const therapistSchema = {
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  repassword: String,
  phoneNo: Number,
  dob: String,
  category: String,
  experience: Number,
  address1: String,
  address2: String,
  city: String,
  state: String,
  zipcode: Number,
};

const Therapist = new mongoose.model("Therapist", therapistSchema);

app.post("/therapistRegister", function (req, res) {
  const newTherapist = new Therapist({
    firstName: req.body.fName,
    lastName: req.body.lName,
    email: req.body.email,
    password: req.body.password,
    repassword: req.body.repassword,
    phoneNo: req.body.phone,
    dob: req.body.bDay,
    category: req.body.category,
    experience: req.body.experience,
    address1: req.body.add1,
    address2: req.body.add2,
    city: req.body.city,
    state: req.body.state,
    zipcode: req.body.zip,
  });
  //console.log(req.body.firstname);
  newTherapist.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      res.render("submission");
    }
  });
});

app.post("/therapistLogin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  console.log(username);
  Therapist.findOne({ email: username }, function (err, foundTherapist) {
    if (err) {
      console.log(err);
      res.send("Username is wrong");
    } else {
      if (foundTherapist) {
        if (foundTherapist.password === password) {
          therapistFirstname = foundTherapist.firstName;
        therapistLastName = foundTherapist.lastName;
        therapistEmail = foundTherapist.email;
        therapistPhoneNo = foundTherapist.phoneNo;
        therapistDob = foundTherapist.dob;
        therapistCategory = foundTherapist.category;
        therapistExperience = foundTherapist.experience;
        therapistAddress1 = foundTherapist.address1;
        therapistAddress2 = foundTherapist.address2;
        therapistCity = foundTherapist.city;
        therapistState = foundTherapist.state;
        therapistZipcode =foundTherapist.zipcode;
          
          res.render("therapistProfile", {
            firstName: therapistFirstname,
            lastName: therapistLastName,
            email: therapistEmail,
            phoneNo: therapistPhoneNo,
            dob: therapistDob,
            category: therapistCategory,
            experience: therapistExperience,
            address1: therapistAddress1,
            address2: therapistAddress2,
            city: therapistCity,
            state: therapistState,
            zipcode: therapistZipcode,
          });
        }
      }
    }
  });
});

