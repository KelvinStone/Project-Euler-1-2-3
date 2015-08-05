// JavaScript source code


function question3() {                                             
    var updatedValue = document.getElementById('input3').value;            
    var primeFactorList = "";       
    var numberToCheck = 2;                                         
    var largestPrime = numberToCheck;

    while (numberToCheck * numberToCheck <= updatedValue) {                  
        if (updatedValue % numberToCheck == 0) {                            
            primeFactorList = primeFactorList + numberToCheck;      
            if (numberToCheck > largestPrime) {
                largestPrime = numberToCheck;
            }             
            updatedValue = updatedValue / numberToCheck;                      
            if (updatedValue != 1)  {                                                
                primeFactorList = primeFactorList + ", ";            
            }
        }
        else  {                                                    
            numberToCheck++;                                     
        }
    }
    if (updatedValue != 1)  {                                                                                
        primeFactorList = primeFactorList + updatedValue;               
        if (updatedValue > largestPrime) {
            largestPrime = updatedValue;
        }
    }    

    document.getElementById('result3').innerHTML = primeFactorList;
    document.getElementById('result3a').innerHTML = largestPrime;
}



