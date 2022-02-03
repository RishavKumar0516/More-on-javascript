console.log("we are working on the object prototype");

//creating object using object literals: object.prototype.

let obj = {
    name: "Rishav",
    channel: "fundamental tech",
    address: "mars"

}
console.log(obj);

/* at the bottom of the object, in the console you will find " __proto".  prototype means fom where we created the object.
whenever we are creating object it starts creating from object literals(object.prototype).
in prototype there are some methods, which comes by default. and you can use any of them*/

/* here we are creating the same object using object constructor  */
function ola(givenName){
    this.name = givenName
}
let obj2 =new ola("Harry")
console.log(obj2);

/* the template persent inside javascript for creating object is "object.prototype".
using  constructor we are creating a new prototype. we can also edit those prototype.

lets see: */
ola.prototype.getName = function(){  /* so using these we can edit the prototype. */
    return this.name;
}
ola.prototype.setName = function(newName){  /* so using these we have add a new prototype fiunction which takes newName and set the name with newName. */
    return this.name = newName;
}
/* always edit the prototype of object which is created by yours constructors*/
console.log(obj2.getName());
console.log(obj2.setName("ronak"));

/* we cannot change the object portotype which is created using object literals. we can only change the object prototype which is created using constructors and only edit the prototype which is created by yours

never use :-  object.prototype.getName = function(){
    return this.name
}  if you use these then you may edit the template of the global prototype which is very dangerous.*/