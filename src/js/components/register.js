function ValidationEvent(formId) {
  //clear out the last error message
  console.log("call the validation for the form ", formId);
  document.getElementById("error").innerHTML = "";

  // Storing commomn Field Values In Variables from both register page
  var fName = document.getElementById(formId).fName;
  var lName = document.getElementById(formId).lName;
  var email = document.getElementById(formId).email;
  var psw = document.getElementById(formId).password;
  var repsw = document.getElementById(formId).repassword;
  var phone = document.getElementById(formId).phone;
  var zip = document.getElementById(formId).zip;

  // Storing Field Values In Variables from Therapist register page
  // var category = document.getElementById(formId).category;
  var exp = document.getElementById(formId).exp;

  // call the vaidate functions for corresponding fields and if all of them true rerun true

  //for the user register form
  if ((formId = "register")) {
    if (
      fNameValiadte(fName) &&
      lNameValiadte(lName) &&
      emailValidate(email) &&
      pswValidate(psw) &&
      repswMatch(psw, repsw) &&
      phoneValidate(phone) &&
      zipValidate(zip)
    ) {
      return true;
    } else return false;
  }

  //   expValidate(exp);
  // return false;
}

// functions for different fields validation

// FirstName validation
const fNameValiadte = (fName) => {
  if (fName.value.length < 2) {
    document.getElementById("error").innerHTML =
      " * First name should be minimum 2 characters long ";
    fName.focus();
    return false;
  } else return true;
};

// LastName validation
const lNameValiadte = (lName) => {
  if (lName.value.length < 2) {
    document.getElementById("error").innerHTML =
      " * Last name should be minimum 2 characters long ";
    lName.focus();
    return false;
  } else return true;
};

// Valiadate email for the format (strin@string.string);
const emailValidate = (email) => {
  var reg = /\S+@\S+\.\S+/;
  if (reg.test(email.value) === false) {
    document.getElementById("error").innerHTML = "  * Enter a valid email ";
    email.focus();
    return false;
  } else return true;
};

// Validate password
const pswValidate = (psw) => {
  if (psw.value.length < 6) {
    document.getElementById("error").innerHTML =
      "  * Password should be minimum 6 characters long ";
    psw.focus();
    return false;
  } else return true;
};

// Match password and repeat-paasword
const repswMatch = (psw, repsw) => {
  if (psw.value !== repsw.value) {
    document.getElementById("error").innerHTML =
      "  * Password should match with Repeat Password ";
    repsw.focus();
    return false;
  } else return true;
};

// Valiadate Phone No as 10 numbers
const phoneValidate = (phone) => {
  var reg = /^[0-9]*$/;
  if (reg.test(phone.value) === false || phone.value.length !== 10) {
    document.getElementById("error").innerHTML =
      "  * Phone No should be 10 numbers";
    phone.focus();
    return false;
  } else return true;
};

// Valiadate Zipcode as only 5 numbers
const zipValidate = (zip) => {
  var reg = /^[0-9]*$/;
  if (reg.test(zip.value) === false || zip.value.length !== 5) {
    document.getElementById("error").innerHTML =
      "  * Zip Code should be 5 numbers";
    zip.focus();
    return false;
  } else return true;
};

// Valiadate Therapist experience as only numbers
const expValidate = (exp) => {
  var reg = /^[0-9]*$/;
  if (reg.test(exp.value) === false) {
    document.getElementById("error").innerHTML =
      "  * Experience shpould be only numbers";
    exp.focus();
    return false;
  } else return true;
};
