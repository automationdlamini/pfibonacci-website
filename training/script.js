/**
 * T2000 Modular Training Quiz System
 * 
 * Logic handles:
 * - Module selection & progress tracking
 * - Cumulative scoring across all modules
 * - 60-second timer per question
 */

// --- QUIZ DATA ---
// Answers have been shuffled to ensure correct options appear in different positions (A, B, C, D)
const quizData = {
    module1: {
        title: "Computer Systems",
        questions: [
            { 
                question: "What is a computer system?", 
                answers: [
                    { text: "Only hardware", correct: false }, 
                    { text: "Hardware and software working together", correct: true }, 
                    { text: "Only software", correct: false }, 
                    { text: "Only users", correct: false }
                ] 
            },
            { 
                question: "Which component is NOT part of a computer system?", 
                answers: [
                    { text: "Hardware", correct: false }, 
                    { text: "Software", correct: false }, 
                    { text: "Data", correct: false }, 
                    { text: "Electricity", correct: true }
                ] 
            },
            { 
                question: "What does the Input → Process → Output model stand for?", 
                answers: [
                    { text: "A visual tool used to describe a workflow, the flow of information, or activities within a system", correct: true }, 
                    { text: "Networking", correct: false }, 
                    { text: "Database structure", correct: false }, 
                    { text: "Security model", correct: false }
                ] 
            },
            { 
                question: "In a computer system, who interacts with the system?", 
                answers: [
                    { text: "Only the CPU", correct: false }, 
                    { text: "Only software", correct: false }, 
                    { text: "Users", correct: true }, 
                    { text: "Only servers", correct: false }
                ] 
            }
        ]
    },
    module2: {
        title: "Hardware",
        questions: [
            { 
                question: "What is the CPU responsible for?", 
                answers: [
                    { text: "Processing data", correct: true },
                    { text: "Storing files", correct: false }, 
                    { text: "Displaying images", correct: false }, 
                    { text: "Connecting networks", correct: false }
                ] 
            },
            { 
                question: "What is RAM used for?", 
                answers: [
                    { text: "Permanent storage", correct: false }, 
                    { text: "Power supply", correct: false }, 
                    { text: "Temporary memory", correct: true }, 
                    { text: "Cooling system", correct: false }
                ] 
            },
            { 
                question: "Which device is used for long-term storage?", 
                answers: [
                    { text: "RAM", correct: false }, 
                    { text: "CPU", correct: false }, 
                    { text: "Cache", correct: false },
                    { text: "Hard drive", correct: true }
                ] 
            },
            { 
                question: "Why do servers have more RAM?", 
                answers: [
                    { text: "For better graphics", correct: false }, 
                    { text: "To handle more processes/users", correct: true }, 
                    { text: "To reduce electricity", correct: false }, 
                    { text: "For sound processing", correct: false }
                ] 
            }
        ]
    },
    module3: {
        title: "Operating Systems",
        questions: [
            { 
                question: "What is an operating system?", 
                answers: [
                    { text: "Hardware", correct: false }, 
                    { text: "A network device", correct: false }, 
                    { text: "Software that manages hardware and programs", correct: true }, 
                    { text: "A database", correct: false }
                ] 
            },
            { 
                question: "Which is an example of an OS?", 
                answers: [
                    { text: "Linux", correct: true },
                    { text: "SQL", correct: false }, 
                    { text: "HTTP", correct: false }, 
                    { text: "RAM", correct: false }
                ] 
            },
            { 
                question: "What does the OS manage?", 
                answers: [
                    { text: "Only files", correct: false }, 
                    { text: "Only hardware", correct: false }, 
                    { text: "Only users", correct: false },
                    { text: "Hardware and software resources", correct: true }
                ] 
            },
            { 
                question: "What command shows the current directory?", 
                answers: [
                    { text: "ls", correct: false }, 
                    { text: "pwd", correct: true }, 
                    { text: "cd", correct: false }, 
                    { text: "ps", correct: false }
                ] 
            }
        ]
    },
    module4: {
        title: "File Systems",
        questions: [
            { 
                question: "What is a file?", 
                answers: [
                    { text: "A hardware device", correct: false }, 
                    { text: "A network", correct: false }, 
                    { text: "A unit of stored data", correct: true }, 
                    { text: "A CPU process", correct: false }
                ] 
            },
            { 
                question: "What is a directory?", 
                answers: [
                    { text: "A folder containing files", correct: true }, 
                    { text: "A type of RAM", correct: false }, 
                    { text: "A CPU", correct: false }, 
                    { text: "A database", correct: false }
                ] 
            },
            { 
                question: "Why are logs important?", 
                answers: [
                    { text: "For decoration", correct: false }, 
                    { text: "For gaming", correct: false }, 
                    { text: "For storage only", correct: false },
                    { text: "For troubleshooting", correct: true }
                ] 
            }
        ]
    },
    module5: {
        title: "Databases",
        questions: [
            { 
                question: "What is a database?", 
                answers: [
                    { text: "A CPU", correct: false }, 
                    { text: "A collection of organized data", correct: true }, 
                    { text: "A cable", correct: false }, 
                    { text: "A monitor", correct: false }
                ] 
            },
            { 
                question: "What is a table?", 
                answers: [
                    { text: "A structure of rows and columns", correct: true }, 
                    { text: "A physical desk", correct: false }, 
                    { text: "A network", correct: false }, 
                    { text: "A program", correct: false }
                ] 
            },
            { 
                question: "What does SELECT do?", 
                answers: [
                    { text: "Delete data", correct: false }, 
                    { text: "Update data", correct: false }, 
                    { text: "Insert data", correct: false },
                    { text: "Retrieve data", correct: true }
                ] 
            }
        ]
    },
    module6: {
        title: "Networking",
        questions: [
            { 
                question: "What is an IP address?", 
                answers: [
                    { text: "A username", correct: false }, 
                    { text: "A password", correct: false }, 
                    { text: "A cable", correct: false },
                    { text: "A unique network identifier", correct: true }
                ] 
            },
            { 
                question: "What is HTTP used for?", 
                answers: [
                    { text: "File transfer", correct: false }, 
                    { text: "Web communication", correct: true }, 
                    { text: "Email", correct: false }, 
                    { text: "Printing", correct: false }
                ] 
            },
            { 
                question: "What is a client?", 
                answers: [
                    { text: "A machine requesting services", correct: true }, 
                    { text: "A server", correct: false }, 
                    { text: "A database", correct: false }, 
                    { text: "A cable", correct: false }
                ] 
            }
        ]
    },
    module7: {
        title: "Servers & Applications",
        questions: [
            { 
                question: "What is a server?", 
                answers: [
                    { text: "A personal computer", correct: false }, 
                    { text: "A machine providing services", correct: true }, 
                    { text: "A keyboard", correct: false }, 
                    { text: "A monitor", correct: false }
                ] 
            },
            { 
                question: "What is an application server?", 
                answers: [
                    { text: "Hardware only", correct: false }, 
                    { text: "A network cable", correct: false }, 
                    { text: "Software that runs applications", correct: true }, 
                    { text: "A CPU", correct: false }
                ] 
            }
        ]
    },
    module8: {
        title: "Logs & Troubleshooting",
        questions: [
            { 
                question: "What is a log?", 
                answers: [
                    { text: "A record of system events", correct: true }, 
                    { text: "A piece of wood", correct: false }, 
                    { text: "A CPU", correct: false }, 
                    { text: "A network cable", correct: false }
                ] 
            },
            { 
                question: "What do logs help with?", 
                answers: [
                    { text: "Gaming", correct: false }, 
                    { text: "Design", correct: false }, 
                    { text: "Troubleshooting", correct: true }, 
                    { text: "Storage only", correct: false }
                ] 
            }
        ]
    },
    module9: {
        title: "Security",
        questions: [
            { 
                question: "What is authentication?", 
                answers: [
                    { text: "Logging data", correct: false }, 
                    { text: "Sending data", correct: false }, 
                    { text: "Storing files", correct: false },
                    { text: "Verifying identity", correct: true }
                ] 
            },
            { 
                question: "What is root user?", 
                answers: [
                    { text: "Administrator with full access", correct: true }, 
                    { text: "Normal user", correct: false }, 
                    { text: "Guest", correct: false }, 
                    { text: "Database user", correct: false }
                ] 
            }
        ]
    }
};

// --- STATE ---
let currentModuleKey = 'module1';
let currentQuestionIndex = 0;
let moduleScore = 0;
let totalScore = 0;
let completedModules = new Set();
let timeLeft = 60;
let timerInterval;
const SECONDS_PER_QUESTION = 60;

// --- DOM ELEMENTS ---
const screens = {
    landing: document.getElementById('landing-screen'),
    module: document.getElementById('module-screen'),
    quiz: document.getElementById('quiz-screen'),
    modResults: document.getElementById('module-results-screen'),
    finalResults: document.getElementById('final-results-screen')
};

const moduleGrid = document.getElementById('module-grid');
const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const nextBtn = document.getElementById('next-btn');
const timerCircle = document.getElementById('timer-circle');
const timerText = document.getElementById('timer-text');

// --- INITIALIZATION ---
document.getElementById('start-btn').onclick = () => showScreen('module');
document.getElementById('back-to-modules-btn').onclick = () => showScreen('module');
document.getElementById('next-module-btn').onclick = goToNextModule;
document.getElementById('restart-btn').onclick = restartAll;

function showScreen(screenKey) {
    Object.values(screens).forEach(s => s.classList.add('hidden'));
    screens[screenKey].classList.remove('hidden');
    if (screenKey === 'module') renderModuleGrid();
}

/**
 * Renders the Module Selection Grid
 */
function renderModuleGrid() {
    moduleGrid.innerHTML = '';
    let totalQs = 0;
    Object.keys(quizData).forEach((key, index) => {
        totalQs += quizData[key].questions.length;
        const card = document.createElement('div');
        card.className = `module-card ${completedModules.has(key) ? 'completed' : ''}`;
        card.innerHTML = `
            <h3>Module ${index + 1}</h3>
            <p>${quizData[key].title}</p>
            ${completedModules.has(key) ? '<span>✅ Done</span>' : ''}
        `;
        card.onclick = () => startModule(key);
        moduleGrid.appendChild(card);
    });

    // Update Overall Progress
    const progressPercent = Math.round((completedModules.size / Object.keys(quizData).length) * 100);
    document.getElementById('total-progress-bar').style.width = `${progressPercent}%`;
    document.getElementById('total-progress-text').innerText = `${progressPercent}%`;
    document.getElementById('total-questions').innerText = totalQs;
}

/**
 * Starts a specific module
 */
function startModule(moduleKey) {
    currentModuleKey = moduleKey;
    currentQuestionIndex = 0;
    moduleScore = 0;
    showScreen('quiz');
    loadQuestion();
}

function loadQuestion() {
    resetState();
    const module = quizData[currentModuleKey];
    const question = module.questions[currentQuestionIndex];
    
    document.getElementById('module-title-display').innerText = module.title;
    document.getElementById('question-number').innerText = `Question ${currentQuestionIndex + 1} of ${module.questions.length}`;
    document.getElementById('progress-bar').style.width = `${((currentQuestionIndex + 1) / module.questions.length) * 100}%`;
    document.getElementById('current-score').innerText = moduleScore;
    
    questionText.innerText = question.question;
    question.answers.forEach(ans => {
        const btn = document.createElement('button');
        btn.innerText = ans.text;
        btn.classList.add('answer-btn');
        if (ans.correct) btn.dataset.correct = "true";
        btn.onclick = selectAnswer;
        answerButtons.appendChild(btn);
    });

    startTimer();
}

function resetState() {
    clearInterval(timerInterval);
    nextBtn.classList.add('hidden');
    answerButtons.innerHTML = '';
}

function selectAnswer(e) {
    clearInterval(timerInterval);
    const btn = e.target;
    const isCorrect = btn.dataset.correct === "true";
    
    if (isCorrect) {
        moduleScore++;
        totalScore++;
        btn.classList.add('correct');
        document.getElementById('correct-sound').play();
    } else {
        btn.classList.add('incorrect');
        document.getElementById('wrong-sound').play();
    }

    // Highlight correct
    Array.from(answerButtons.children).forEach(b => {
        if (b.dataset.correct === "true") b.classList.add('correct');
        b.classList.add('disabled');
    });

    nextBtn.classList.remove('hidden');
    nextBtn.onclick = () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData[currentModuleKey].questions.length) {
            loadQuestion();
        } else {
            showModuleResults();
        }
    };
}

/**
 * Module Results logic
 */
function showModuleResults() {
    completedModules.add(currentModuleKey);
    showScreen('modResults');
    document.getElementById('mod-score').innerText = moduleScore;
    document.getElementById('mod-total').innerText = quizData[currentModuleKey].questions.length;
    
    // Check if all modules done
    if (completedModules.size === Object.keys(quizData).length) {
        document.getElementById('next-module-btn').innerText = "Finish Training";
        document.getElementById('next-module-btn').onclick = showFinalResults;
    } else {
        document.getElementById('next-module-btn').innerText = "Next Module";
        document.getElementById('next-module-btn').onclick = goToNextModule;
    }
}

function goToNextModule() {
    const keys = Object.keys(quizData);
    const currentIndex = keys.indexOf(currentModuleKey);
    if (currentIndex < keys.length - 1) {
        startModule(keys[currentIndex + 1]);
    } else {
        showFinalResults();
    }
}

function showFinalResults() {
    showScreen('finalResults');
    document.getElementById('final-score').innerText = totalScore;
    
    let totalPossible = 0;
    Object.values(quizData).forEach(m => totalPossible += m.questions.length);
    
    const percent = Math.round((totalScore / totalPossible) * 100);
    document.getElementById('percentage-text').innerText = `${percent}%`;
    
    const msg = document.getElementById('result-message');
    if (percent >= 80) msg.innerText = "Ready to start the TXP manual";
    else if (percent >= 50) msg.innerText = "Good progress - Review weak modules";
    else msg.innerText = "Retry Training Required";
}

function restartAll() {
    totalScore = 0;
    completedModules.clear();
    showScreen('landing');
}

/**
 * Timer implementation (60s)
 */
function startTimer() {
    timeLeft = SECONDS_PER_QUESTION;
    updateTimerUI();
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerUI();
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeout();
        }
    }, 1000);
}

function updateTimerUI() {
    timerText.innerText = `${timeLeft}s`;
    const offset = 113.1 * (1 - (timeLeft / SECONDS_PER_QUESTION));
    timerCircle.style.strokeDashoffset = offset;
    timerCircle.style.stroke = timeLeft < 15 ? 'var(--wrong-red)' : 'var(--eskom-blue)';
}

function handleTimeout() {
    Array.from(answerButtons.children).forEach(b => {
        if (b.dataset.correct === "true") b.classList.add('correct');
        b.classList.add('disabled');
    });
    nextBtn.classList.remove('hidden');
}
