const input = require('readline-sync');

var rl = {}

rl.abc = function() {
    var result = [];

    rl.numberOfLines = async function() {
        let answer = input.question("enter the test cases = ");
        let testCases = answer
        testCases = parseInt(testCases);

        //for each test cases
        for(let i = testCases;i>0;i--){
            //take the space separated integer
            rl.lineLength();
        }
        //print the result in the end
        rl.print();
    }
    rl.lineLength = function() {
        // get the number of space separated integer
        var noOfDigits = input.question("enter the space separated integer = ");
        rl.getUserInput(noOfDigits);
    }

    //get the number of space separated values
    rl.getUserInput = function (noOfDigits) {
        var valueForTheRow;
        let sum = 0;
        for (let i = noOfDigits; i>0; i-- ){
            //input the value
            valueForTheRow = input.question("enter the value = ");
            if (valueForTheRow >= 0)
            {
                sum += (valueForTheRow * valueForTheRow);
            }
        }
        result.push(sum);       
    }
    //print the sum
    rl.print = function() {
        console.log(...result);
    }
    rl.numberOfLines();    
}
rl.abc()