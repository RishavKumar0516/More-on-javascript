console.log("iterator in javascript");

//Itereator
const myArray = ['Apples', 'Grapes', 'Oranges', 'Bhindi'];
console.log("My array is", myArray);

//these function only created a variable and return the object.
/* these function returning an object.
object containing next named function. inside these function their is if else statement. when if statement runs return a object, and when else statement runs return a another object. */

//these is syntax of Iterator.
function fruitsIterator(values) {
    let nextIndex = 0;
    return {  //  we will return an object. this return is the return of fruitIterator function.
        next: function () {
            if (nextIndex < values.length) {
                // we will return below object.
                return {
                    value: values[nextIndex++],
                    done: false
                }
            } else {
                //we will return below object with only done.
                return {
                    done: true
                }
            }
        }
    }
}

//using the iterator.
const fruits = fruitsIterator(myArray);
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next());