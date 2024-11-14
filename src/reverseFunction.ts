{

    //Reverse Function

    type ReverseStringg = {
        name: string
    }

    // function reverseString(T: string):string{
    //     return T.split("").reverse().join('');
    // }


    // const kaku: ReverseStringg = {
    //     name: "kaku"
    // }
    function reverse(s: string) {
        return s.split("").reverse().join("");
    }

    // const result: ReverseStringg = reverse("kaku");

    console.log(reverse('kaku'));













}