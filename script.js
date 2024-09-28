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

    // Create a wrapper div for scrolling effect
    const scrollContainer = document.createElement('div');
    scrollContainer.className = 'scroll-container';

    // Clear previous buttons if any
    colorPickerContainer.innerHTML = '';

    // Generate random color buttons and add them to the scroll container
    const buttonCount = 100; // Total number of unique buttons
    for (let i = 0; i < buttonCount; i++) {
        let randomColor = getRandomColor();
        let colorButton = document.createElement('button');
        colorButton.className = 'color-btn';
        colorButton.style.backgroundColor = randomColor;
        colorButton.onclick = () => changeColor(randomColor);
        scrollContainer.appendChild(colorButton);
    }

    // Duplicate the buttons to create a seamless scroll effect
    for (let i = 0; i < buttonCount; i++) {
        let duplicateButton = scrollContainer.children[i].cloneNode(true);
        scrollContainer.appendChild(duplicateButton);
    }

    // Append scroll container to color picker container
    colorPickerContainer.appendChild(scrollContainer);
}

// Function to change the donut color
function changeColor(color) {
    const donut = document.getElementById('donutShape');
    donut.style.borderTopColor = color;
}

// Initialize color buttons on page load
window.onload = createColorButtons;
