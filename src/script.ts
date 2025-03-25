const Logger = (target: any)=>{
    console.log(target);
    
}

@Logger
class Personn {
  name="mohamad"

  constructor(){
    console.log("creating person object ... ");
    
  }


}

const personn = new Personn();



console.log(personn);
