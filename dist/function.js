"use strict";
{
    const userInfo = ({ name, age, role = "guest" }) => {
        const userRoll = { name, age, role };
        return userRoll;
    };
    const result = userInfo({ name: "asad", age: 12 });
    console.log(result);
}
