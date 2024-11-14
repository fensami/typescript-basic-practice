{

    // OOP
    // class ---> object blue print ---> method
    // inheritence ----> Parent Class  ---> 
    // abstraction  ----->  engine kivabe kaaj korche na jene karjosiddi
    // Encaptulation  ----> (alada kore fela)
    // polymarpisom ----> ( bohurupi friend)

    class MusicalInstument{
        name: string;

        constructor(name:string){
            this.name = name;
        }

        play(){
            console.log(`playing the ${this.name}`);
        }
    }


    class Guitar extends MusicalInstument{

        constructor(){
            super("Guiter")
        }

        tune(){
            console.log(`tuning kortechi...${this.name}`);
        }
    }


    class Piano extends MusicalInstument{
        constructor(){
            super("Piano")
        }

        openLid(){
            console.log(``);
            
        }
    }





    const pianotune =() =>{
        

    }










}