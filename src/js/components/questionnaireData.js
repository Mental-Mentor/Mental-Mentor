const questions = [
    { 
        question: "1. Are you having intrusive thoughts?",
        optionA: "Yes",
        optionB: "No",
    },
    { 
        question: "2. Have you recently suffered a loss?",
        optionA: "Yes",
        optionB: "No",
    },
    { 
        question: "3. Have you recently experienced a traumatic event?",
        optionA: "Yes",
        optionB: "No",
    },
    { 
        question: "4. Do you have any substance abuse problems?",
        optionA: "Yes",
        optionB: "No",
    },
    { 
        question: " 5. Do you feel like you have support from your family?",
        optionA: "Yes",
        optionB: "No",
    },
    { 
        question: "6. Are you having trouble concentrating on work, school, or various tasks?",
        optionA: "Yes",
        optionB: "No",
    },
    { 
        question: "7. Do your moods change frequently?",
        optionA: "Yes",
        optionB: "No",
    },
    { 
        question: "8. Do you feel confused about your sexual orientation?",
        optionA: "Yes",
        optionB: "No",
    },
    { 
        question: "9. Do you feel confused about your gender identification?",
        optionA: "Yes",
        optionB: "No",
    },
    { 
        question: "10. Do you feel discriminated against for your sexual orientation or gender identification?",
        optionA: "Yes",
        optionB: "No",
    }
];

// displaying on page

let ques = document.getElementById('display-question');

ques.innerHTML = questions[0].question;
document.getElementById('optionA-label').innerHTML = questions[0].optionA;
document.getElementById('optionB-label').innerHTML =questions[0].optionB;

let shuffledQuestions = [];// empty array to hold shuffled shuffledQuestions

function handleQuestions(){
    for(let i=0;i<=questions.length;i++){
        const random = questions[Math.floor(Math.random()* questions.length)];
    }
}

let index = 1;
function nextQuestion(){
    if(index<questions.length){
    const currentQuestion = questions[index];
    document.getElementById('display-question').innerHTML = currentQuestion.question;
    document.getElementById('optionA-label').innerHTML = currentQuestion.optionA;
    document.getElementById('optionB-label').innerHTML = currentQuestion.optionB;
    index++;
    }
   else{
        document.getElementById('next').innerHTML = 'SUBMIT';
    }
}

