const quizData = [
    {
        question: "What is KaiOS based on?",
        options: ["Android", "Firefox OS", "Linux", "iOS"],
        answer: "Firefox OS"
    },
    {
        question: "Which language is used for KaiOS apps?",
        options: ["Java", "Python", "HTML/CSS/JS", "C++"],
        answer: "HTML/CSS/JS"
    },
    {
        question: "Does KaiOS support web APIs?",
        options: ["Yes", "No"],
        answer: "Yes"
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function loadQuestion() {
    const quiz = quizData[currentQuestion];
    questionEl.textContent = quiz.question;
    optionsEl.innerHTML = "";
    
    quiz.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.onclick = () => checkAnswer(option);
        optionsEl.appendChild(button);
    });
}

function checkAnswer(answer) {
    if (answer === quizData[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    optionsEl.innerHTML = "";
    questionEl.textContent = "Quiz Completed!";
    resultEl.textContent = `Your Score: ${score}/${quizData.length}`;
    nextBtn.style.display = "none";
}

nextBtn.addEventListener("click", loadQuestion);

// Start quiz
loadQuestion();
