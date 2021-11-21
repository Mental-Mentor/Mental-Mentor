function submitForm() {
    // gather inputs for each question into a collection
    let q1Radios = document.getElementsByName("q1");
    let q2Radios = document.getElementsByName("q2");
    let q3Radios = document.getElementsByName("q3");
    let q4Radios = document.getElementsByName("q4");
    let q5Radios = document.getElementsByName("q5");
    let q6Radios = document.getElementsByName("q6");
    let q7Radios = document.getElementsByName("q7");
    let q8Radios = document.getElementsByName("q8");
    let q9Radios = document.getElementsByName("q9");

    // validate collection of inputs for each question to make sure an option was selected
    let q1Valid = validateQ(q1Radios);
    let q2Valid = validateQ(q2Radios);
    let q3Valid = validateQ(q3Radios);
    let q4Valid = validateQ(q4Radios);
    let q5Valid = validateQ(q5Radios);
    let q6Valid = validateQ(q6Radios);
    let q7Valid = validateQ(q7Radios);
    let q8Valid = validateQ(q8Radios);
    let q9Valid = validateQ(q9Radios);

    // if an option was selected for every question, total the scores - if not, alert user to select an option for missed questions
    if (q1Valid && q2Valid && q3Valid && q4Valid && q5Valid && q6Valid && q7Valid && q8Valid && q9Valid) {
        totalScores();
    } else {
        console.log("Invalid");
        alert("Please complete all questions before submitting!");
        if (!q1Valid) {
            document.getElementById("errorQ1").innerHTML = "Please select an answer:";
        }
        if (!q2Valid) {
            document.getElementById("errorQ2").innerHTML = "Please select an answer:";
        }
        if (!q3Valid) {
            document.getElementById("errorQ3").innerHTML = "Please select an answer:";
        }
        if (!q4Valid) {
            document.getElementById("errorQ4").innerHTML = "Please select an answer:";
        }
        if (!q5Valid) {
            document.getElementById("errorQ5").innerHTML = "Please select an answer:";
        }
        if (!q6Valid) {
            document.getElementById("errorQ6").innerHTML = "Please select an answer:";
        }
        if (!q7Valid) {
            document.getElementById("errorQ7").innerHTML = "Please select an answer:";
        }
        if (!q8Valid) {
            document.getElementById("errorQ8").innerHTML = "Please select an answer:";
        }
        if (!q9Valid) {
            document.getElementById("errorQ9").innerHTML = "Please select an answer:";
        }
    }
}

// function to see if user answered a question
function validateQ(radios) {
    let qValid = false;
    let i = 0;

    while (!qValid && i < radios.length) {
        if (radios[i].checked) {
            qValid = true;
        }
        else {
            i++;
        }
    }
    return qValid;
}

// function to total input values and assign scores for each section
function totalScores() {
    q1 = parseInt(document.querySelector('input[name = "q1"]:checked').value);
    q2 = parseInt(document.querySelector('input[name = "q2"]:checked').value);
    q3 = parseInt(document.querySelector('input[name = "q3"]:checked').value);
    q4 = parseInt(document.querySelector('input[name = "q4"]:checked').value);
    q5 = parseInt(document.querySelector('input[name = "q5"]:checked').value);
    q6 = parseInt(document.querySelector('input[name = "q6"]:checked').value);
    q7 = parseInt(document.querySelector('input[name = "q7"]:checked').value);
    q8 = parseInt(document.querySelector('input[name = "q8"]:checked').value);
    q9 = parseInt(document.querySelector('input[name = "q9"]:checked').value);

    let moodScore = q1 + q2 + q3;
    let familyScore = q4 + q5 + q6;
    let addictionScore = q7 + q8 + q9;

    if (moodScore > 10) {
        console.log("match patient to mood disorder therapist");
        // include mood category in request to backend for therapists
    }

    if (familyScore > 10) {
        console.log("match patient to family therapist");
        // include family category in request to backend for therapists
    }

    if (addictionScore > 10 || q7 == 4) {
        console.log("match patient to substance abuse therapist");
        // include addiction category in request to backend for therapists
    }
}