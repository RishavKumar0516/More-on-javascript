console.log('symbols in javascript');

//Symbols :- it is primitive data type, it is same as strings, boolean it is used to create unique keys. so these are used to create unique primitive.
// const sym1 = Symbol();
const sym1 = Symbol('My identifier');
const sym2 = Symbol('My identifier');
console.log('symbol is', Symbol);
console.log('Type of symbol is',typeof sym1);
console.log(sym1===sym2); //this return false.

const a = "this is";
const b = "this is";
console.log(a===b); //this retrun true because both of these are strings and strings are primitive data dype.
console.log(undefined===undefined);
console.log(null===null);

const k1 = Symbol('identifier for k1');
const k2 = Symbol('for k2');

myObj = {};
myObj[k1] = "harry";
myObj[k2] = "rohan";
myObj["name"] = "Good boy";
myObj[4] = "Good four";
console.log(myObj[k1]);
console.log(myObj[k2]);
console.log(myObj);
console.log(myObj.k2);// Alert: we can't do these, because it is same as myObj["k2"] either it searches for k2 string.

//symbols are igonered in for loop.
for ( key in myObj) {
        console.log(key, myObj[key]);
        
}

console.log(JSON.stringify(myObj));





