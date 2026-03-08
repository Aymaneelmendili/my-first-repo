let count = 0;
const counterDisplay = document.getElementById('counter-value');

// A single function to handle both up and down
function changeCount(amount) {
    count += amount;
    render();
}

function resetCount() {
    count = 0;
    render();
}

// Separate logic from display (Good Engineering practice)
function render() {
    counterDisplay.innerText = count;
    
    // Logic: Change color if negative
    if (count < 0) {
        counterDisplay.style.color = "#ff4444";
    } else {
        counterDisplay.style.color = "#00ff88";
    }
}