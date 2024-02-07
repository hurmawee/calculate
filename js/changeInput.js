const buttonsNumber = document.querySelectorAll(".number")
const buttonsOperation = document.querySelectorAll(".operation")
const display = document.querySelector(".display")
const deleteButton = document.querySelector(".deleteButton")
const body = document.querySelector("body")
deleteButton.addEventListener("click", function (){
   display.textContent = deleteLast(display.textContent)
})

let counterDot = false;

buttonsNumber.forEach(button =>{
    button.addEventListener("click", function (){
        if (button.textContent === ".") {
            if (!counterDot) {
                display.textContent += button.textContent;
                counterDot = true;
            }
        }
        else
        {
            display.textContent += button.textContent;
        }
    })
})

buttonsOperation.forEach(button =>{
    button.addEventListener("click", function (){
        choiceOperation(button.textContent)
    })
})

body.addEventListener("keyup", function (e) {
    choiceOperation(e.key)
    display.textContent += display.textContent.replace(/[\D.,]/g,'');
    display.textContent += display.textContent.replace(/[,]/g,'.');
})

function choiceOperation(code) {
    if (code === "+/-")
        return display.textContent = changeSign(display.textContent);
    if (code === "=" || code === "Enter") {
        let result = calculateExpression();
        deleteSpan()
        return display.textContent = result;
    }
    if (code === "C") {
        counterDot = false;
        return display.textContent = clear();
    }
    if (code === "+") {
        counterDot = false;
        return display.textContent = sum(display.textContent);
    }
    if (code === "-") {
        counterDot = false;
        return display.textContent = difference(display.textContent);
    }
    if (code === "/") {
        counterDot = false;
        return display.textContent = division(display.textContent);
    }
    if (code === "*") {
        counterDot = false;
        return display.textContent = multiply(display.textContent);
    }
    if (code === "x²") {
        counterDot = false;
        return display.textContent = powTwo(display.textContent);
    }
    if (code === "√") {
        counterDot = false;
        return display.textContent = sqrt(display.textContent);
    }

}
