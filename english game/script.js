const words = [
    { thai: 'น้ำ', english: 'water' },
    { thai: 'ทะเล', english: 'ocean' },
    { thai: 'พิพิธภัณฑ์สัตว์น้ำ', english: 'aquarium' },
    { thai: 'ทางน้ำ', english: 'waterway' },
    { thai: 'การเพาะเลี้ยงสัตว์น้ำ', english: 'aquaculture' }
];

let currentWordIndex = 0;
let score = 0;

function loadWord() {
    document.getElementById('word').innerText = words[currentWordIndex].thai;
}

function checkAnswer() {
    const answer = document.getElementById('answer').value.trim().toLowerCase();
    const feedback = document.getElementById('feedback');
    
    if (answer === words[currentWordIndex].english) {
        feedback.innerText = 'Correct!';
        score++;
    } else {
        feedback.innerText = `Wrong! The correct answer is ${words[currentWordIndex].english}.`;
    }
    
    document.getElementById('score').innerText = score;
    currentWordIndex = (currentWordIndex + 1) % words.length;
    document.getElementById('answer').value = '';
    loadWord();
}

window.onload = loadWord;
