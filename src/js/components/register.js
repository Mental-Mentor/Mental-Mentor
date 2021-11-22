function ValidationEvent() {
  //clear out the last error message
  console.log("call the validation");
  document.getElementById("error").innerHTML = "";

  // Storing Field Values In Variables
  var fName = document.getElementById("register").fName;
  var lName = document.getElementById("register").lName;
  var email = document.getElementById("email");
  var psw = document.getElementById("password");
  var repsw = document.getElementById("repassword");
  var phone = document.getElementById("phone");
  var zip = document.getElementById("zip");

  // call the vaidate functions for corresponding fields
  fNameValiadte(fName);
  lNameValiadte(lName);
  emailValidate(email);
  pswValidate(psw);
  repswMatch(psw, repsw);
  phoneValidate(phone);
  zipValidate(zip);
  return false;
}

// functions for different fields validation

// FirstName validation
const fNameValiadte = (fName) => {
  if (fName.value.length < 2) {
    document.getElementById("error").innerHTML =
      " * First name should be minimum 2 characters long ";
    fName.focus();
    return false;
  }
};

// LastName validation
const lNameValiadte = (lName) => {
  if (lName.value.length < 2) {
    document.getElementById("error").innerHTML =
      " * Last name should be minimum 2 characters long ";
    lName.focus();
    return false;
  }
};

// Valiadate email for the format (strin@string.string);
const emailValidate = (email) => {
  var reg = /\S+@\S+\.\S+/;
  if (reg.test(email.value) === false) {
    document.getElementById("error").innerHTML = "  * Enter a valid email ";
    email.focus();
    return false;
  }
};

// Validate password
const pswValidate = (psw) => {
  if (psw.value.length < 6) {
    document.getElementById("error").innerHTML =
      "  * Password should be minimum 6 characters long ";
    psw.focus();
    return false;
  }
};

// Match password and repeat-paasword
const repswMatch = (psw, repsw) => {
  if (psw.value !== repsw.value) {
    document.getElementById("error").innerHTML =
      "  * Password should match with Repeat Password ";
    repsw.focus();
    return false;
  }
};

// Valiadate Phone No as 10 numbers
const phoneValidate = (phone) => {
  var reg = /^[0-9]*$/;
  if (reg.test(phone.value) === false || phone.value.length !== 10) {
    document.getElementById("error").innerHTML =
      "  * Phone No should be 10 numbers";
    phone.focus();
    return false;
  }
};

// Valiadate Zipcode as only 5 numbers
const zipValidate = (zip) => {
  var reg = /^[0-9]*$/;
  if (reg.test(zip.value) === false || zip.value.length !== 5) {
    document.getElementById("error").innerHTML =
      "  * Zip Code should be 5 numbers";
    zip.focus();
    return false;
  }
};
