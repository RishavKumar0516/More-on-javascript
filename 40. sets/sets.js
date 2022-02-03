console.log("Sets in javascript");

/*Sets   :-  A JavaScript Set is a collection of unique values.

             Each value can only occur once in a Set.

             A Set can hold any value of any data type.
*/
const mySet = new Set(); //Initialize an empty set.
//Adding values to the set.
console.log('The  set looks like : ',mySet);
mySet.add('this');
mySet.add('My name');
mySet.add('this');//this will not added in the set because their is already same value is present in the set.
mySet.add(34);//adding integer values to the set
mySet.add(true);//adding boolean value to the set.
mySet.add(false);
console.log('The  set looks like : ',mySet);

// use a constructor to initialize the set.
let mySet2 = new Set([1, 45, 'rishav', false, {a:4, b: 8}, 'rishav', false]);//but in the set rishav is added only once. because sets stores only unique values.
console.log('The new set is ', mySet2);

console.log('the size of set is', mySet2.size);
console.log('the size of set is', mySet2.size);
mySet2.add(45);
mySet2.add(46);
console.log('The  set looks like : ',mySet2);
//   has() :- This checks whether this element is in sets or not, if yes then it returns true else it returns false.
console.log(mySet2.has(46));
console.log(mySet2.has(34));
console.log(mySet2.has('rishav'));

//   delete() :-  this deletes the element from the set.
console.log('before removal', mySet2.has(46));
mySet2.delete(46);
console.log('after removal', mySet2.has(46));

//  terating the set.
for(let item of mySet2){
    console.log(item);
}
//using for Each loop.
mySet2.forEach((item)=>{
    console.log(item);

})

//Can you use Array.from(mySet2) to convert set in to an array?.
console.log('converting sets into array');

let myArray = Array.from(mySet2);
console.log(myArray);


