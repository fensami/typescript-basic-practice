{

    const age: number = 25;
    const yourName: string = "Asad";
    const isActive: boolean = true;


    // array
    const numbers: number[] = [1, 2, 4, 5, 6, 7]; // array

    // Tupple
    const info: [string, string, number, number, null] = ["asad", "nur", 40, 35, null] // tupple


    // Object
    type PersonType = {
        name: string;
        age: number | string; // Union
        isActive: boolean;
        designation: string;
        company: string;
    }
    const person: PersonType = {
        name: "Shoriful islam",
        age: 45,
        isActive: true,
        designation: "next lvl",
        company: "ph"
    }


    // Normal Function & Arrow Function
    function multiply(num1: number, num2: number): number {
        const result: number = num1 * num2;
        return result
    }

    const multiplyResult = multiply(2, 3);
    console.log(multiplyResult);

    //arrow function
    const sumOfTwo = (a:number, b:number):number => {
        return a + b
    }
    const result2 = sumOfTwo(3, 4)
    console.log(result2);

    // Operator and Destructure

    const rolls: number[] = [1,2,3,4,5,6,7,8,9,10];

    const newRolls: number[] = [...rolls,2,3,45,6,7]



    // Object
    // Spreed Oparetor UseCase
    type PersonType1 = {
        name: string;
        age: number | string; // Union
        isActive: boolean;
        designation: string;
        company: string;
        salary?:number // nullable (optional)
    }
    const person1: PersonType1 = {
        name: "Shoriful islam",
        age: 45,
        isActive: true,
        designation: "next lvl",
        company: "ph"
    }

    const newInfoOfPerson1: PersonType1 ={
        ...person1,
        salary: 23004,
    }

    console.log(newInfoOfPerson1);
    


    // rest opearator 
    const [first,...bakiElement] = [2,4,56,7,4,3];
    console.log("first:", first);
    console.log("Rest", bakiElement);
    

    // Taneary Optional Chainning
    // Assertion
    

    
}