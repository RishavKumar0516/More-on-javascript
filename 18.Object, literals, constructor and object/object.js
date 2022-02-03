console.log("welcome to the object classes");

/* object are unique entity, having properties and methods. */
let car = {// creating object using object literals.
   name: 'Maruti 800',
   topSpeed: 89,
   run:function(){
       console.log("car is running");
   }
}
console.log(car);

/* we have also seen constructor like these
1. new Date();
 */

/* creating a constructor for cars */
function GeneralCar(givenname, givenSpeed){//these is a constructor whose purpose is to create object of type generalCar.
    this.name = givenname;
    this.topSpeed = givenSpeed;
    this.run = function(){
        console.log(`${this.name} is running`);
    }
    this.analyse = function(){
        console.log(`this car is slower by ${this.topSpeed}Km/h then mercedz`);
    }

}
/* we can create object of type general car using "new" keyword. */
let car1 = new GeneralCar('Nissan', 180);
let car2 = new GeneralCar('Maruti sizuki', 120);
console.log(car1); 
console.log(car2);
console.log(car2.name);
console.log(car2.topSpeed);
console.log(car2.run());
console.log(car2.analyse());
let car3 = new GeneralCar('marcedez', 200);
console.log(car1, car2, car3);