
const buttons = document.querySelectorAll('.btn-number, .btn-operator, .btn-dot, .btn-clear, .btn-equals');
const display = document.querySelector('.display');
const equalsButton = document.querySelector('.btn-equals');
const clearButton = document.querySelector('.btn-clear')

let displayData = "";

buttons.forEach(button => {
    button.addEventListener('click', () => { 

        const buttonValue = button.getAttribute('data-num');
        displayData += buttonValue;
        display.textContent = displayData;
    })
})

equalsButton.addEventListener("click", () => {
  displayData.innerHTML.split(" ");
});

clearButton.addEventListener('click', () => { 
  displayData = "";
  display.textContent = displayData;
})