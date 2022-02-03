console.log("Maps in javascript");

/* Maps in Javascript : A Map holds key-value pairs where the keys can be any datatype. A Map remembers the original insertion order of the keys.
A Map has a property that represents the size of the map.
we can use any type of keys and any types of values. we can use strings, function, blank object as a key.
*/

const myMap = new Map();  //cerating an empty map.

//let key1 = "myStr", key2 = {name: "harry"}, key3 = function () { };
let key1 = "myStr", key2 = {}, key3 = function () { };
//     Setting the map values

myMap.set(key1, 'this is a string');
myMap.set(key2, 'this is a blank object');
//myMap.set(key2, {value:'this is a blank object'}); we can use value as object.
myMap.set(key3, 'this is a empty function');
console.log(myMap);

//  Getting the values from a Map

let value1 = myMap.get(key1); // gives the value stored in the key(key1) in map.
console.log(value1);
value1 = myMap.get(key2); // gives the value stored in the key(key2) in map.
console.log(value1);
value1 = myMap.get(key3); // gives the value stored in the key(key3) in map.
console.log(value1);

//  Getting the size of the map.

console.log(myMap.size);

//  You can loop using for..of to get keys and values.
for (let [key, value] of myMap) {
    console.log(key, value);
}

//  Get only keys
for(let key of myMap.keys()){
    console.log('key is ', key);
    
}

//  Get only values
for(let value of myMap.values()){
    console.log('values is ', value);
    
}

//  You can loop the map using FOR EACH Loop
//  note:- inside arrow function grab the value first and then the key.
myMap.forEach((value, key)=>{
   console.log('key is', key);
   console.log('value is', value);
   
})

//  Converting Map to Array
let myArray = Array.from(myMap);
console.log("Map to array is ", myArray);

//  Converting Map keys to Array :- converting the only keys of map in to array
let myKeysArray = Array.from(myMap.keys());
console.log("Map keys to array is ", myKeysArray);

//  Converting Map values to Array :- converting the only values of map in to array
let myValuesArray = Array.from(myMap.values());
console.log("Map values to array is ", myValuesArray);
