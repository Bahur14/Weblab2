// Функція для додавання символу до рядка результату
function appendToResult(char) {
    document.getElementById("result").value += char;
}

// Функція для очищення рядка результату
function clearResult() {
    document.getElementById("result").value = "";
}

// Функція для обчислення результату
function calculateResult() {
    try {
        const result = eval(document.getElementById("result").value);
        document.getElementById("result").value = result;
    } catch (error) {
        alert("Invalid input");
    }
}
