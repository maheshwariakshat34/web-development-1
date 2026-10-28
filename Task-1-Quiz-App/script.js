
const startBtn = document.querySelector("#start-btn");
const startScreen = document.querySelector("#start-screen");
const quizScreen = document.querySelector("#quiz-screen");

const questionElement = document.querySelector("#question");
const optionsElement = document.querySelector("#options");

const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Home Tool Markup Language",
            "Hyperlinks Text Mark Language"
        ],
        answer: 0
    },
    {
        question: "Which language styles a webpage?",
        options: ["HTML", "CSS", "Java", "Python"],
        answer: 1
    }
];

let currentQuestion = 0;

function showQuestion() {
    const questionData = questions[currentQuestion];

    questionElement.textContent = questionData.question;
    optionsElement.innerHTML = "";

    questionData.options.forEach(function (option, index) {
        const button = document.createElement("button");

        button.textContent = option;
        button.classList.add("option");

        optionsElement.appendChild(button);
    });
}

startBtn.addEventListener("click", function () {
    startScreen.hidden = true;
    quizScreen.hidden = false;

    showQuestion();
});

questionData.options.forEach(function (option, index) {
    const button = document.createElement("button");

    button.textContent = option;
    button.classList.add("option");

    button.addEventListener("click", function () {
        if (index === questionData.answer) {
            button.style.backgroundColor = "green";
            button.style.color = "white";
        } else {
            button.style.backgroundColor = "red";
            button.style.color = "white";
        }
    });

    optionsElement.appendChild(button);
});
