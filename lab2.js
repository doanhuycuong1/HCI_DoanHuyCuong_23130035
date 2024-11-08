let selectedLanguage = 'C';
let hintCount = 3;
let timerInterval;
let timeRemaining;

function login() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('dashboard-container').style.display = 'block';
}

function filterExercises() {
    const filter = document.getElementById('language-filter').value;
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    const exercises = document.querySelectorAll('.exercise');

    exercises.forEach(exercise => {
        const language = exercise.getAttribute('data-language');
        const title = exercise.querySelector('h4').textContent.toLowerCase();

        if ((filter === 'all' || language === filter) && title.includes(searchQuery)) {
            exercise.style.display = 'block';
        } else {
            exercise.style.display = 'none';
        }
    });
}

function selectExercise(title, description, language, timeLimit) {
    document.getElementById('exercise-title').textContent = title;
    document.getElementById('exercise-description').textContent = description;
    selectedLanguage = language;
    timeRemaining = timeLimit * 60;
    
    document.getElementById('coding-environment').style.display = 'block';
    document.getElementById('dashboard-container').style.display = 'none';
    document.getElementById('code-editor').textContent = getTemplate(language);
    
    startTimer();
}

function getTemplate(language) {
    switch (language) {
        case 'C':
            return '#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}';
        case 'Python':
            return 'def main():\n    # Write your code here\n\nif __name__ == "__main__":\n    main()';
        case 'Java':
            return 'public class Main {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}';
        default:
            return '';
    }
}

function switchLanguage() {
    selectedLanguage = document.getElementById('language-switcher').value;
    document.getElementById('code-editor').textContent = getTemplate(selectedLanguage);
}

function startTimer() {
    const timerDisplay = document.getElementById('time-left');
    
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeRemaining--;
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            // Implement auto-submission or other logic
        }
    }, 1000);
}

function returnToDashboard() {
    document.getElementById('dashboard-container').style.display = 'block';
    document.getElementById('coding-environment').style.display = 'none';
    clearInterval(timerInterval);
}

function runCode() {
    alert("Running code...");
}

function clearCode() {
    document.getElementById('code-editor').textContent = '';
}

function submitCode() {
    document.getElementById('submission-feedback').style.display = 'block';
    document.getElementById('submission-status').textContent = "Success!";
    document.getElementById('submission-output').textContent = "Hello World!";
    document.getElementById('submission-score').textContent = "10/10";
}

function toggleSubmissions() {
    const history = document.getElementById('submission-history');
    history.style.display = history.style.display === 'block' ? 'none' : 'block';
}

function giveHint() {
    if (hintCount > 0) {
        alert("Hint: Think about edge cases.");
        hintCount--;
    } else {
        alert("No more hints available.");
    }
}

function tryAgain() {
    document.getElementById('submission-feedback').style.display = 'none';
}
