const results = ["9060", "530", "740", "1000", "2002r", "1500", "480", "550", "1906", "557v1", "991v2"];
let user_scores = new Array(results.length).fill(0);

let current_question = 0;

const questions = [
    {
        question: "ideal weekend vibe?",
        answers: {
            A: {
                text: "exploring the city, popping into cafes, staying active",
                scores: ["9060", "2002r", "480"]
            },
            B: {
                text: "chilling at home, brunch, maybe a vintage market stroll",
                scores: ["530", "550", "740"]
            },
            C: {
                text: "working on creative projects, biking, or catching a gallery",
                scores: ["991v2", "1500", "1906"]
            }
        }
    },
    {
        question: "what aesthetic best describes your closet?",
        answers: {
            A: {
                text: "clean, retro, minimal colors",
                scores: ["530", "550", "740"]
            },
            B: {
                text: "futuristic, bold silhouettes, standout details",
                scores: ["9060", "1000", "1906"]
            },
            C: {
                text: "classic but elevated, structured pieces, neutral tones",
                scores: ["991v2", "1500", "2002r"]
            }
        }
    },
    {
        question: "choose your dream destination:",
        answers: {
            A: {
                text: "tokyo - sleek fashion, endless energy, futuristic cool",
                scores: ["9060", "1000", "1906"]
            },
            B: {
                text: "copenhagen - minimalist beauty, bikes, modern design",
                scores: ["991v2", "1500", "2002r"]
            },
            C: {
                text: "lisbon - sun-drenched streets, vintage shops, chill cafes",
                scores: ["530", "740", "550"]
            }
        }
    },
    {
        question: "what's your default morning ritual?",
        answers: {
        A: {
            text: "wake up, get dressed, eat breakfast",
            scores: ["550", "530", "1500"]
        },
        B: {
            text: "wake up, panic, leave",
            scores: ["1000", "480", "1906"]
        },
        C: {
            text: "wake up before the sun and watch it rise",
            scores: ["991v2", "2002r", "740"]
        }
        }
    },
    {
        question: "how do you spend a slow sunday?",
        answers: {
        A: {
            text: "going out to waste my day marvelling the city",
            scores: ["9060", "1906", "480"]
        },
        B: {
            text: "staying at home with a good book, movie, or tv show",
            scores: ["530", "740", "991v2"]
        },
        C: {
            text: "inviting friends over",
            scores: ["550", "1000", "1500"]
        }
        }
    },
    {
        question: "what's your ideal creative outlet?",
        answers: {
        A: {
            text: "writing (literary arts)",
            scores: ["991v2", "740", "530"]
        },
        B: {
            text: "drawing (traditional visual arts)",
            scores: ["1500", "550", "2002r"]
        },
        C: {
            text: "film (more modern visual art)",
            scores: ["9060", "1000", "1906"]
        }
        }
    },
    {
        question: "what motivates your daily hustle?",
        answers: {
        A: {
            text: "personal drive & desire to be better",
            scores: ["1500", "2002r", "991v2"]
        },
        B: {
            text: "money",
            scores: ["480", "1000", "550"]
        },
        C: {
            text: "encouragement & validation from friends, peers, and family",
            scores: ["530", "9060", "740"]
        }
        }
    },
    {
        question: "choose your dream destination",
        answers: {
        A: {
            text: "tokyo or seoul - fast-paced cities full of energy and style",
            scores: ["9060", "1000", "480"]
        },
        B: {
            text: "copenhagen or amsterdam - cozy, aesthetic, clean and classic",
            scores: ["991v2", "530", "740"]
        },
        C: {
            text: "bali or patagonia - peace, nature, good balance",
            scores: ["2002r", "1500", "550"]
        }
        }
    },
    {
        question: "how do you handle change or uncertainty?",
        answers: {
        A: {
            text: "think about it and cry",
            scores: ["740", "530", "991v2"]
        },
        B: {
            text: "think about it and resolve it",
            scores: ["1500", "2002r", "1000"]
        },
        C: {
            text: "think about it and ignore it",
            scores: ["480", "550", "9060"]
        }
        }
    },
    {
        question: "if your life had a soundtrack, what genre would it be?",
        answers: {
        A: {
            text: "electronic or experimental",
            scores: ["9060", "1000", "1906"]
        },
        B: {
            text: "indie or soft alt",
            scores: ["530", "991v2", "1500"]
        },
        C: {
            text: "classic r&b or pop",
            scores: ["740", "550", "2002r"]
        }
        }
    },
    {
        question: "which design element do you value most? form, function, or storytelling?",
        answers: {
        A: {
            text: "form",
            scores: ["9060", "530", "740"]
        },
        B: {
            text: "function",
            scores: ["550", "2002r", "991v2"]
        },
        C: {
            text: "storytelling",
            scores: ["1000", "1500", "1906"]
        }
        }
    },
    {
        question: "what kind of environment do you thrive in? urban coastal, rural, or digital?",
        answers: {
        A: {
            text: "urban",
            scores: ["9060", "480", "1000"]
        },
        B: {
            text: "rural",
            scores: ["2002r", "1500", "550"]
        },
        C: {
            text: "digital",
            scores: ["991v2", "1906", "530"]
        }
        }
    },
    {
        question: "what kind of museum would you get lost in?",
        answers: {
        A: {
            text: "art",
            scores: ["991v2", "9060", "1500"]
        },
        B: {
            text: "history",
            scores: ["550", "530", "740"]
        },
        C: {
            text: "science",
            scores: ["1906", "1000", "480"]
        }
        }
    },
    {
        question: "what does your dream workspace look like?",
        answers: {
        A: {
            text: "organized, neat, anyone can find anything very easily; all follows a meticulous color scheme",
            scores: ["1500", "991v2", "2002r"]
        },
        B: {
            text: "messy but loved, only i can find things... but that's okay, because why are you looking through my stuff anyway?",
            scores: ["740", "550", "530"]
        },
        C: {
            text: "idk whatever happens happens i guess i'll just let it be",
            scores: ["480", "1000", "9060"]
        }
        }
    }
];

function startQuiz() {
    document.getElementById("start-page").style.display = "none";
    document.getElementById("quiz-page").style.display = "block";
    displayQuestion();
}

function displayQuestion() {
    const question = questions[current_question];
    document.getElementById("question").innerText = question.question;
    ["A", "B", "C"].forEach((answer) => {
        document.getElementById(answer).innerText = questions[current_question].answers[answer].text;
        document.getElementById(answer).onclick = () => selectAnswer(answer);
    });
}

function selectAnswer(answer) {
    const scores = questions[current_question].answers[answer].scores;
    scores.forEach((score) => {
        user_scores[results.indexOf(score)] += 1;
    });
    console.log(user_scores);
    current_question++;
    if (current_question < questions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}