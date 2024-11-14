{
    // Task 2: Functions, Optional, and Literal Types
    // Objective: Create a function with parameters and an optional literal type.

    // Instructions:

    // Define a function that takes:
    // name (string)
    // age (number)
    // role (optional, with type 'admin' | 'user' | 'guest')
    // The function should log these values or perform a basic action.

    type UserInfo = {
        name: string;
        age: number;
        role?: "admin" | "user" | "guest"
    }


    const userInfo = ({ name, age, role = "guest" }: UserInfo) => {
        const userRoll = { name, age, role }
        return userRoll
    }

    const result = userInfo({ name: "asad", age: 12 })
    console.log(result);
    

}