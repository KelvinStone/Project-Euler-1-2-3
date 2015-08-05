// JavaScript source code


function question1() {
    var sum = 0;
    var inputValue = document.getElementById('input').value;

    for (i = 1; i < inputValue; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    }
    document.getElementById('result').innerHTML = sum;
};



