const Logger = (logString: string) => {

    return function (constructor: Function) {
        console.log(constructor);
        console.log(logString);

    }
}


const addTemplate = (template: string, hookId: string) => {
    return function (constructor: any) {
        const hookEl = document.getElementById(hookId)
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name
        }
    }
}

// @Logger("LOGGING - PERSON - LINE 11")


@addTemplate('<h1> My Person Object</h1>', 'app')
class Personn {
    name = "mohamad"

    constructor() {
        console.log("creating person object ... ");

    }


}

const personn = new Personn();



console.log(personn);
