// JavaScript source code


function question2() {
    var sum = 0;
    var evenSum = 0;
    var firstNum = 0;
    var secondNum = 1;
    var inputValue = document.getElementById('input2').value;
    
    while (sum <= inputValue) {
        sum = firstNum + secondNum;         
        if (sum % 2 == 0) {
            evenSum += sum;
        }
        firstNum = secondNum;
        secondNum = sum;        
    }
    document.getElementById('result2').innerHTML = evenSum;
};



