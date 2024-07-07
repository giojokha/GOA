function generateStyledParagraph() {
    const text = prompt("Enter the text for the paragraph:");
    const textColor = prompt("Enter the text color (for example, 'red', '#00ff00', 'rgb(255, 0, 0)'):");
    const backgroundColor = prompt("Enter the background color (for example, 'blue', '#ffff00', 'rgba(0, 0, 255, 0.5)'):");

    const displayParagraph = document.createElement('p');
    displayParagraph.textContent = text;
    displayParagraph.style.color = textColor;
    displayParagraph.style.backgroundColor = backgroundColor;

    const container = document.body;
    container.appendChild(displayParagraph);
}