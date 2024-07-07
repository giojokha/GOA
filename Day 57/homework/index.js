function applyStyles() {
    const color = document.getElementById('colorInput').value;
    const width = document.getElementById('widthInput').value + 'px';
    const height = document.getElementById('heightInput').value + 'px';
    const text = document.getElementById('textInput').value;

    const displayDiv = document.getElementById('displayDiv');
    const displayText = document.getElementById('displayText');

    displayDiv.style.backgroundColor = color;
    displayDiv.style.width = width;
    displayDiv.style.height = height;

    displayText.textContent = text;
}