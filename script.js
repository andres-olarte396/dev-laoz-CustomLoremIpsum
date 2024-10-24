function generateLorem() {
    const length = document.getElementById('length').value;
    const style = document.getElementById('style').value;
    const resultDiv = document.getElementById('result');

    const loremTexts = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    ];

    let loremResult = '';

    for (let i = 0; i < length; i++) {
        loremResult += loremTexts[Math.floor(Math.random() * loremTexts.length)] + '<br><br>';
    }

    // Aplicar estilo
    if (style === 'bold') {
        resultDiv.innerHTML = `<strong>${loremResult}</strong>`;
    } else if (style === 'italic') {
        resultDiv.innerHTML = `<em>${loremResult}</em>`;
    } else {
        resultDiv.innerHTML = loremResult;
    }
}