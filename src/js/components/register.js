function ValidationEvent() {
  //clear out the last error message
  document.getElementById("error").innerHTML = "";

  // Storing Field Values In Variables
  var fName = document.getElementById("register").fName.value;
  var lName = document.getElementById("register").lName.value;
  var email = document.getElementById("email").value;
  var psw = document.getElementById("password").value;
  var repsw = document.getElementById("repassword").value;
  var phone = document.getElementById("phone").value;
  var zip = document.getElementById("zip").value;

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
  if (fName.length < 2) {
    document.getElementById("error").innerHTML =
      " * First name should be minimum 2 characters long ";
    fName.focus;
    return false;
  }
};

// LastName validation
const lNameValiadte = (lName) => {
  if (lName.length < 2) {
    document.getElementById("error").innerHTML =
      " * Last name should be minimum 2 characters long ";
    lName.focus;
    return false;
  }
};

// Valiadate email for the format (strin@string.string);
const emailValidate = (email) => {
  var reg = /\S+@\S+\.\S+/;
  if (reg.test(email) === false) {
    document.getElementById("error").innerHTML = "  * Enater a valid email ";
    email.focus;
    return false;
  }
};

// Validate password
const pswValidate = (psw) => {
  if (psw.length < 6) {
    document.getElementById("error").innerHTML =
      "  * Password should be minimum 6 characters long ";
    psw.focus;
    return false;
  }
};

// Match password and repeat-paasword
const repswMatch = (psw, repsw) => {
  if (psw !== repsw) {
    document.getElementById("error").innerHTML =
      "  * Password should match with Repeat Password ";
    repsw.focus;
    return false;
  }
};

// Valiadate Phone No as 10 numbers
const phoneValidate = (phone) => {
  var reg = /^[0-9]*$/;
  if (reg.test(phone) === false || phone.length !== 10) {
    document.getElementById("error").innerHTML =
      "  * Phone No should be 10 numbers";
    phone.focus;
    return false;
  }
};

// Valiadate Zipcode as only 5 numbers
const zipValidate = (zip) => {
  var reg = /^[0-9]*$/;
  if (reg.test(zip) === false || zip.length !== 5) {
    document.getElementById("error").innerHTML =
      "  * ZipCode should be 5 numbers";
    zip.focus;
    return false;
  }
};
