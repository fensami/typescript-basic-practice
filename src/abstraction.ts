{
    // ---->
    class CoffeMachine {
        private isPowerOn: boolean = false;

        powerOn() {
            this.isPowerOn = true;
            console.log("coffe machine is on");
        }
        makeCoffe() {
            if (this.isPowerOn) {
                console.log("coffe Brewing...");
            } else {
                console.log("bhai office chere baire gelam");
            }
        }
        powerOff() {
            this.isPowerOn = false;
            console.log("coffe machine is powered off");
        }
    }


    const myCoffemachine = new CoffeMachine();

    console.log(myCoffemachine.powerOn);
    


}