var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display-text");

var t1 = 0;
var t2 = null;
var operator = null;

function isOperator(value) {
    return value == "+" || value == "-" || value == "*" || value == "/";
}

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {

        var value = this.getAttribute('data-value');
        var text = display.textContent.trim();
        if (isOperator(value)) {
            operator = value;
            t1 = parseFloat(text);
            display.textContent = "";
        }
        else if(value == 'ac'){
            display.textContent = "";
        }
        else if (value == "sign"){
            operator = parseFloat(text);
            operator = operator * (-1);
            display.textContent = operator;
        }
        else if(value == "."){
            if(text.length && !text.includes('.')){
                display.textContent = text + '.';
            }
        }
        else if(value == '%'){
            t1 = parseFloat(text);
            t1 = t1/100;
            display.textContent = t1;
        }
        else if (value == "=") {
            t2 = parseFloat(text);
            var result = eval(t1 + ' ' + operator + ' ' + t2);
            if (result) {
                display.textContent = result;
                t1 = result;
                t2 = null;
                operator = null;
            }
        } 
        else {
            display.textContent += value;
        }

    });
}