console.log("these is class on storage");

//The localStorage and sessionStorage properties allow to save key/value pairs in a web browser.

//The localStorage object stores data with no expiration date. The data will not be deleted when the browser is closed, and will be available the next day, week, or year.

// different websites has their own different-different storage.
 
//The localStorage property is read-only.

localStorage.setItem('Name','harry');7

localStorage.setItem('Name2','rishav');
console.log(window.localStorage);
console.log(typeof window.localStorage);//these returns the type of local storage.
console.log(window.localStorage.Name);//these returns the value of key present at local storage.
console.log(window.localStorage.Name2);

//there is also another option for grabbing the key, and that is getItem.
let name =localStorage.getItem('Name');
console.log(name);
name =localStorage.getItem('Name2');
console.log(name);

//if we apply getItem on the key which do not exist in localStorage then it returns Null.
name = localStorage.getItem('age');
console.log(name);

//to clear  a particular key/value pair we use removeItem method.
localStorage.removeItem('Name');
console.log(localStorage.Name);
console.log(localStorage);

// if we want to completly clear the entire local storage, then we use clear function.
// window.localStorage.clear();
// console.log(localStorage);


// we cannot add array to the local storage, because in local storage we can set the value in string only. these is the drawbacks of the localStorage.but we can add the array in another way.

let myvegetable = ['onion', 'pea', 'chilli', 'cucumber', 'potato'];
// localStorage.setItem('vegetable', myvegetable);
// console.log(localStorage);
// console.log(typeof localStorage.vegetable);//here you wil see the that key vegetable  is  saved in local storage,but first it is converted in the string and then save it.and when you want to retrive these array myvegetable then string is returned.
// console.log(localStorage.getItem('vegetable'));


//other then that, to store these type of array in local storage we use json.stringify and json.parse.

// here we are converting the notesObj array in to the string and updating the local storage. string me hum esliye convert kiye ku ki local stroage kai andar string mai hi set karna parta hai;

localStorage.setItem('vegetable', JSON.stringify(myvegetable));
// these json.stringify convert these array in the string.
//now you see that the array is gonna store in real form.we can also store the object using these json.stringify.


 name = localStorage.getItem('vegetable');//this time also this is returning the string.
 console.log(name);

 //we could retrive the array as in real using json.prase.
 name = JSON.parse(localStorage.getItem('vegetable'));// and this time we have an array.
 console.log(name);
 console.log(typeof name);  // so now we have an array, and we can apply every property of array on these. we are converting the string in array because, it is very difficult to delete the element from string(first we delete the element and then comma).


 /* ---------------session storage---------------- */
 /* 
 The localStorage and sessionStorage properties allow to save key/value pairs in a web browser.

The sessionStorage object stores data for only one session (the data is deleted when the browser tab is closed).

Tip: Also look at the localStorage property which stores data with no expiration date. The data will not be deleted when the browser is closed, and will be available the next day, week, or year.
 */

sessionStorage.setItem('Name','sharry');
sessionStorage.setItem('Name2','srishav');
console.log(window.sessionStorage);
console.log(typeof window.sessionStorage);//these returns the type of local storage.
console.log(window.sessionStorage.Name);//these returns the value of key present at local storage.
console.log(window.sessionStorage.Name2);




 window.localStorage.clear();
 window.sessionStorage.clear(); 