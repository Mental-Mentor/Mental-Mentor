function ValidationEvent() {
  // Storing Field Values In Variables
  var fName = document.getElementById("register").fName.value;
  var lName = document.getElementById("register").lName.value;
  // var email = document.getElementById("email").value;
  // var phone = document.getElementById("phone").value;

  // // Regular Expression For Email
  // // var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;

  // call the vaidate functions for corresponding fields
  fNameValiadte(fName);
  lNameValiadte(lName);
  // //fName and lName should be more than 3 chars
  // if (fName.length < 3) {
  //   alert("First name should be more than 3 Chracters");
  //   fName.focus;
  //   return false;
  // }
  return false;
}

// functions for different fields validation

//FirstName validation
const fNameValiadte = (fName) => {
  if (fName.length < 2) {
    document.getElementById("error").innerHTML =
      " * First name should be minimum 2 characters long ";
    fName.focus;
    console.log(fName);
    return false;
  }
};

//LastName validation
const lNameValiadte = (lName) => {
  if (lName.length < 2) {
    document.getElementById("error").innerHTML =
      " * Last name should be minimum 2 characters long ";
    lName.focus;
    console.log(lName);
    return false;
  }
};
