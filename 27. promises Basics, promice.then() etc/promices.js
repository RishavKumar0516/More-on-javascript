console.log("tutorial on promices");

/* Promices: promices is same as we speak in hindi(kasam khana).
after we promice things could happen - 
1. resolve (we do the work for which we promices for)
2. reject (we do not do the work for which we promices for, we break the promice.  )
3. pending (promice could be resolve or could be reject.) */

/* 
promise is an object
*/
/* promise takes function as an argument and this function takes another two function as an argument.
1. resolve
2. reject
on the basis of these above function  we perfom different task.
if promises is resolve then do different task and
if promise is reject then perform different task.

the promises remains in panding state, when the promices is running. 
 */

/* func1 is a function which returns new promises. inside promises if not error then run resolve and if error the run reject.
to catch the promises we use two function 
1.   .then()
2    .catch()
*/
function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log("Function: Your promices has been resolved");
                resolve();
            }
            else {
                console.log("Your promices has been rejected");
                reject('sorry not fullfilled');
            }
        }, 2000);
    })
}
/* 
  .then() means if the callback is resolved, then what you do.
  if i want to run the another function, when resolved is called. then we define the new function inside of then() function
*/
/* func1 returns the promises. then and catch are the methods of promises
then() means if promices is resolve then run the block of code inside the then() methods
catch() means if promices is rejected then run the block of code inside the catch() methods */
func1().then(function(){
    console.log("Rishav: Thanks for resolving");
})
/* .catch() means if the callback is rejected, then what you do.
if i want to run the another function, when rejected is called. then we define the new function inside of catch() function. */
.catch(function(error){
    console.log("Rishav: Very bad bro " + error);
})

const students = [
    {name: "Harry", subject: "Javscript"},
    {name: "Rohan", subject: "machine learning"}
 ]

 
function enrollStudent(student){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            students.push(student);
            console.log("Student has been enrolled");
            let error = false;
            if(!error){
               resolve();  // running the callback function.
            }else{
                reject();
            }

        }, 1000);
    })

}
function getStudent(){
    setTimeout(function(){
        let str= "";
        students.forEach(function(student){
            str+= `<li>${student.name}</li>`
        });
        document.getElementById('student').innerHTML = str;
        console.log("Student has been fetched");
    }, 5000);
}

let newStudent = {name:"Sunny", subject:"python"}
enrollStudent(newStudent).then(function(){
    getStudent();
}).catch(function(){
    console.log("The Error Occoured");
})

/* function inside then is run as - resolve()
   function inside catch is run as -reject()
 */