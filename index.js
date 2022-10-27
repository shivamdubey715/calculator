var buttons = document.getElementsByClassName('button');
var display = document.getElementById('display');

var t1 = 0;
var t2 = null;
var operator = null;

function isOperator(value) {
    if (value == '+' || value == '*' || value == '/' || value == '-') {
        return true;
    }
    return false;
}

for (var i = 0; i < buttons.length; i++) {
    buttons[i].setAttribute('click', function () {

        var value = this.getAttribute('data-value');
        var text = display.textContent.trim();
        if (isOperator(value)) {
            operator = value;
            t1.parseFloat(text);
            display.textContent = "";
        }
        else if (value == "ac") {
            display.textContent = "";
        }
        else if (value == "sign") {
            t1 = parseFloat(text);
        }

    });
}