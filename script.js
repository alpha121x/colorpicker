// Function to generate a random hex color
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to create random color buttons
function createColorButtons() {
    const colorPickerContainer = document.getElementById('colorPickerContainer');
    
    // Clear previous buttons if any
    colorPickerContainer.innerHTML = '';

    // Generate and append random color buttons
    for (let i = 0; i < 10; i++) {
        let randomColor = getRandomColor();
        let colorButton = document.createElement('button');
        colorButton.className = 'color-btn';
        colorButton.style.backgroundColor = randomColor;
        colorButton.onclick = () => changeColor(randomColor);
        colorPickerContainer.appendChild(colorButton);
    }
}

// Function to change the donut color
function changeColor(color) {
    const donut = document.getElementById('donutShape');
    donut.style.borderTopColor = color;
}

// Initialize color buttons on page load
window.onload = createColorButtons;
