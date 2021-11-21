function submitForm() {

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