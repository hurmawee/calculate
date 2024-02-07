const lastValue = document.querySelector("span")

function sum(value){
    if (!value) {
        return ""
    }
    if(!lastValue.textContent) {
        addSpan(value + "+")
        return ""
    }
    else
    {
        lastValue.textContent = calculateExpression() + "+"
        return ""
    }
}
function difference(value){
    if (!value) {
        return "-"
    }
    if(value.length === 1 && value[0] === "-") {
        return "-"
    }
    if(!lastValue.textContent) {
        addSpan(value + "-")
        return ""
    }
    else{
        lastValue.textContent =  calculateExpression() + "-"
        return ""
    }
}
function multiply(value){
    if (!value) {
        return ""
    }
    if(!lastValue.textContent) {
        addSpan(value + "*")
        return ""
    }
    else{
        lastValue.textContent =  calculateExpression() + "*"
        return ""
    }
}
function division(value) {
    if (!value) {
        return ""
    }
    if (!lastValue.textContent) {
        addSpan(value + "/")
        return ""
    } else {
        lastValue.textContent = calculateExpression() + "*"
        return ""
    }
}
function sqrt(value) {
    if (value) {
        if (value[0] === "-") {
            return "Ошибка ввода"
        } else {
            return Math.sqrt(value)
        }
    }
    return ""
}
function powTwo(value) {
    if (value) {
        return Math.floor(value ** 2 * 10000) / 10000
    } else {
        return ""
    }
}
function changeSign(value){
    if (value[0] === "-") {
        return value.slice(1, value.length)
    }
    else {
        return "-" + value
    }
}
function deleteLast(value){
    return value.slice(0,value.length-1 )
}
function clear(){
    deleteSpan()
    return ""
}
function calculateExpression() {
    if (lastValue.textContent[lastValue.textContent.length - 1] === "+")
        return +lastValue.textContent.slice(0, lastValue.textContent.length - 1) + +display.textContent
    if (lastValue.textContent[lastValue.textContent.length - 1] === "-")
        return +lastValue.textContent.slice(0, lastValue.textContent.length - 1) - +display.textContent
    if (lastValue.textContent[lastValue.textContent.length - 1] === "*")
        return +lastValue.textContent.slice(0, lastValue.textContent.length - 1) * +display.textContent
    if (lastValue.textContent[lastValue.textContent.length - 1] === "/")
        return +lastValue.textContent.slice(0, lastValue.textContent.length - 1) / +display.textContent
}

function addSpan(text){
    deleteButton.style.top = "75px"
    lastValue.classList.add("lastValue")
    lastValue.textContent = text
}
function deleteSpan() {

    deleteButton.style.top = "45px"
    lastValue.textContent = ""

}