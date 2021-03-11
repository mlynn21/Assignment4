//STEP 1
function halfNumber() {
    number1 = prompt("Enter a number.");
    console.log("Half of " + number1 + " is " + number1 / 2 + ".");
}


//STEP 2
function squareNumber() {
    number2 = prompt("Enter a number.");
    console.log(`The result of squaring the number ${number2} is  ${number2 ** 2} .`);
}


//STEP 3
function percentOf() {
    number3A = prompt("Enter a number.");
    number3B = prompt("Enter another number.");
    percentage = (number3B / number3A * 100).toFixed(2)
    console.log(`${number3B} is ${percentage}% of ${number3A}.`);
}


//STEP 4
function findModulus() {
    number4A = prompt("Enter a number");
    number4B = prompt("Enter another number.")
    modulus = number4A % number4B;
    console.log(`${modulus} is the modulus of ${number4A} and ${number4B}`);
}


//STEP 5
function calculate(numbers) {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) { 
        total += Number(arguments[i]);
    }
    return total;
}
console.log(calculate(10, 20, 5, 1));


// function findSum(num1, num2, num3) {
//     num1 = Number(prompt("Enter a number to add."));
//     num2 = Number(prompt("Enter another number to add."))
//     num3 = Number(prompt("Enter one more number to add."));
//     console.log(num1 + num2 + num3);
// }
// findSum();