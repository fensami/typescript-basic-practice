"use strict";
{
    const age = 25;
    const yourName = "Asad";
    const isActive = true;
    // array
    const numbers = [1, 2, 4, 5, 6, 7]; // array
    // Tupple
    const info = ["asad", "nur", 40, 35, null]; // tupple
    const person = {
        name: "Shoriful islam",
        age: 45,
        isActive: true,
        designation: "next lvl",
        company: "ph"
    };
    // Normal Function & Arrow Function
    function multiply(num1, num2) {
        const result = num1 * num2;
        return result;
    }
    const multiplyResult = multiply(2, 3);
    console.log(multiplyResult);
    //arrow function
    const sumOfTwo = (a, b) => {
        return a + b;
    };
    const result2 = sumOfTwo(3, 4);
    console.log(result2);
    // Operator and Destructure
    const rolls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const newRolls = [...rolls, 2, 3, 45, 6, 7];
    const person1 = {
        name: "Shoriful islam",
        age: 45,
        isActive: true,
        designation: "next lvl",
        company: "ph"
    };
    const newInfoOfPerson1 = Object.assign(Object.assign({}, person1), { salary: 23004 });
    console.log(newInfoOfPerson1);
    // rest opearator 
    const [first, ...bakiElement] = [2, 4, 56, 7, 4, 3];
    console.log("first:", first);
    console.log("Rest", bakiElement);
    // Taneary Optional Chainning
    // Assertion
}
