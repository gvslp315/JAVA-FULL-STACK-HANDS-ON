function appendtoInput(value) {
    const input = document.getElementById('inp');
    if (input.value === '0') {
        input.value = value;
    } else {
        input.value += value;
    }
}

function clearInput() {
    const input = document.getElementById('inp');
    input.value = '';
}

function calculateResult() {
    const input = document.getElementById('inp');
    try {
        // Evaluate the expression
        input.value = eval(input.value);
    } catch (e) {
        input.value = 'Error';
    }
}
