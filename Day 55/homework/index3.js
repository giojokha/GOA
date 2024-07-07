function changeColor() {

    const text = document.getElementById('textInput').value;
    const color = document.getElementById('colorInput').value;

    const displayParagraph = document.getElementById('displayText');

    displayParagraph.textContent = text;
    displayParagraph.style.color = color;
}