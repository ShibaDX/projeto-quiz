// Abriria uma conexão com o banco de dados
// Consulta os dados no banco de dados
// Pega o retorno e armazena na variável questions no formato array

const questions = [
    {
        question: "Qual é a capital da França?",
        options: ["Londres", "Berlim", "Paris", "Tóquio"],
        answer: "Paris"
    },
    {
        question: "Qual é o maior planeta do sistema solar?",
        options: ["Terra", "Júpiter", "Saturno", "Marte"],
        answer: "Júpiter"
    }
]

let currentQuestionIndex = 0;

function showQuestion(question) {
    // Pegar o elemento da div vazia no html
    const questionContainer = document.getElementById("question-container");
    console.log(questionContainer);
    // Incluir a questão dentro da div vazia
    questionContainer.innerHTML = `
    <div> 
        <h2>${question.question}</h2>
        <div class="options-container">
        ${
            question.options.map(
                (option, index) => ` 
                    <button class="option-btn">${option}</button>
                `
            ).join('')
        }
        </div>
    </div>
    `
}

showQuestion(questions[currentQuestionIndex]);