
const buttons = document.querySelectorAll('.btn-number, .btn-operator, .btn-dot, .btn-clear, .btn-equals')
const display = document.querySelector('.display')

let displayData = "";

buttons.forEach(button => {
    button.addEventListener('click', () => { 

        const buttonValue = button.getAttribute('data-num');
        displayData += buttonValue;
        alert("Display is now: " + displayData)
    })
})

display.textContent = displayData;