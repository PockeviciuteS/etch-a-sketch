document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");
    const resizeButton = document.getElementById("resizeButton");

    function createGrid(squaresPerSide) {
        container.innerHTML = ''; // Clear existing grid
        const squareSize = 960 / squaresPerSide;

        for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
            const square = document.createElement('div');
            square.classList.add('grid-square');
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;

            // Adding hover effect
            square.addEventListener('mouseover', () => {
                // Randomize color
                const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
                square.style.backgroundColor = randomColor;

                // Darken effect
                let currentOpacity = parseFloat(square.style.opacity) || 0;
                if (currentOpacity < 1) {
                    currentOpacity += 0.1;
                }
                square.style.opacity = currentOpacity;
            });

            container.appendChild(square);
        }
    }

    // Initial grid
    createGrid(16);

    // Resize grid
    resizeButton.addEventListener('click', () => {
        let squaresPerSide = parseInt(prompt("Enter the number of squares per side (maximum 100):"));
        if (isNaN(squaresPerSide) || squaresPerSide < 1 || squaresPerSide > 100) {
            alert("Please enter a valid number between 1 and 100.");
        } else {
            createGrid(squaresPerSide);
        }
    });
});