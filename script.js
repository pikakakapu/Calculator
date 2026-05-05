const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons button");

// Calculator Logic
let expression = "";

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        let val = btn.innerText;

        if (val === "C") {
            expression = "";
            display.innerText = "0";
        } 
        else if (val === "=") {
            try {
                expression = expression.replace("√", "Math.sqrt");
                display.innerText = eval(expression);
                expression = display.innerText;
            } catch {
                display.innerText = "Error";
                expression = "";
            }
        } 
        else {
            expression += val;
            display.innerText = expression;
        }
    });
});

// =========================
// Fibonacci Generator
// =========================
document.querySelectorAll(".creative-section button")[0].onclick = () => {
    let n = document.querySelectorAll(".creative-section input")[0].value;
    let a = 0, b = 1, result = [0];

    for (let i = 1; i < n; i++) {
        let temp = a + b;
        result.push(temp);
        a = b;
        b = temp;
    }

    alert("Fibonacci: " + result.join(", "));
};

// =========================
// Prime Checker
// =========================
document.querySelectorAll(".creative-section button")[1].onclick = () => {
    let num = document.querySelectorAll(".creative-section input")[1].value;
    let isPrime = true;

    if (num <= 1) isPrime = false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    alert(isPrime ? "Prime Number" : "Not Prime");
};

// =========================
// Statistics
// =========================
document.querySelectorAll(".creative-section button")[2].onclick = () => {
    let data = document.querySelectorAll(".creative-section input")[2].value
        .split(",")
        .map(Number);

    let sum = data.reduce((a, b) => a + b, 0);
    let avg = sum / data.length;

    alert("Sum: " + sum + " | Avg: " + avg);
};

// =========================
// Golden Ratio
// =========================
document.querySelectorAll(".creative-section button")[3].onclick = () => {
    let num = document.querySelectorAll(".creative-section input")[3].value;
    let phi = (1 + Math.sqrt(5)) / 2;

    alert("Golden Ratio × n = " + (num * phi));
};

// =========================
// Office Export (Basic Simulation)
// =========================
document.querySelectorAll(".office-section button")[0].onclick = () => {
    downloadFile("excel_data.csv", "Result," + display.innerText);
};

document.querySelectorAll(".office-section button")[1].onclick = () => {
    downloadFile("word_doc.txt", "Calculation Result: " + display.innerText);
};

document.querySelectorAll(".office-section button")[2].onclick = () => {
    downloadFile("presentation.txt", "Slide Content: " + display.innerText);
};

document.querySelectorAll(".office-section button")[3].onclick = () => {
    alert("Import feature simulated.");
};

// File download helper
function downloadFile(filename, content) {
    const blob = new Blob([content], { type: "text/plain" });
    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
}