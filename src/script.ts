const Logger = (logString: string) => {

    return function (constructor: Function) {
        console.log(constructor);
        console.log(logString);

    }
}

@Logger("LOGGING - PERSON - LINE 11")
class Personn {
    name = "mohamad"

    constructor() {
        console.log("creating person object ... ");

    }


}

const personn = new Personn();



console.log(personn);
