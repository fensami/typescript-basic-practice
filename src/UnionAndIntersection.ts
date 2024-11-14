{

    //Task 4: Union and Intersection Types
    // Objective: Create union and intersection types using interfaces.

    // Instructions:

    // Define interfaces Book and Magazine.
    // Create:
    // A type that is a union of Book and Magazine.
    // A type that is an intersection of Book and Magazine.

    interface Book {
        title: string;
        author: string;
        pages: number
    }
    interface Magazine {
        issueNumber: number;
        publisher: string;
    }

    // this is union ulta
    type BookOfMega = Book | Magazine
    // this is intersection ulta
    type MegaOfBook = Book & Magazine

    const bookish1: BookOfMega = {
        title: "name",
        author: "kaku",
        pages: 123,
    }

    const bookish2: MegaOfBook = {
        title: "name",
        author: "kaku",
        pages: 123,
        issueNumber: 123,
        publisher: 'kskai'
    }
    console.log(bookish1);
    console.log(bookish2);



    //
    interface Car {
        name: string;
        model: string;
    }
    


}