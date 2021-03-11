// IMPORT THE MODULE

import {add} from "./modules/calculator.js";
import {sub} from "./modules/calculator.js";
import {mult} from "./modules/calculator.js";
import {divide} from "./modules/calculator.js";

let num1;
let num2;
let operation;
let again = 'y';

// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER
do {
    num1 = Number(prompt("Choose a number."));
    num2 = Number(prompt("Choose another number."));

// CHECK TO SEE WHAT OPERATION THEY'RE USING
    operation = prompt("Would you like to add, subtract, multiply, or divide the numbers?");

// CALL THE APPROPRIATE FUNCTION
switch (operation) {
        case "add":
            alert(add(num1, num2));
            break;
        case "subtract":
            alert(sub(num1, num2));
            break;
        case "multiply":
            alert(mult(num1, num2));
            break;
        case "divide":
            alert(divide(num1, num2));
            break;
        default: 
            alert("Please enter: add, subtract, multiply, or divide.");
            
        }
        again = prompt('Run calculator again? y/n');

    } while (again === 'y')
  
 







