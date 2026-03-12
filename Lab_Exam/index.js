const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try {
        let input = display.value; 
        let a = 0;
        let b = 0;
        let operator = "";
        let result = 0;         
     
        if (input.includes("+")) {
            operator = "+";
        } else if (input.includes("-")) {
            operator = "-";
        } else if (input.includes("*")) {
            operator = "*";
        } else if (input.includes("/")) {
            operator = "/";
        }                         

        if (operator !== "") {
            let position = input.indexOf(operator); 
            a = Number(input.substring(0, position)); 
            b = Number(input.substring(position + 1)); 
        }

        if (operator === "+") {
            result = a + b;
        } else if (operator === "-") {
            result = a - b;
        } else if (operator === "*") {
            result = a * b;
        } else if (operator === "/") {
            result = a / b;
        }

        display.value = result;
        
    } catch(error) {
        display.value = "Error";
    }
}