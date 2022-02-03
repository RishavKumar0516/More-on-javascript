console.log("This is tutprial for Async and Await");

function harry(){
    return "harry";
}
let a = harry();
console.log(a);

//Async returns the promise. using this promise we can respond. when we are using fetchAPI with await we don't need to use two .then() function.
async function harry2(){//these is going to return promise.
    console.log("Inside Harry function");
    const response = await fetch('https://api.github.com/users');
    console.log("before response");
    const users = await response.json();
    console.log('user resolved');
    return users;

}
console.log("before calling harry2");
let b = harry2();
console.log("after calling harry2");
console.log(b);
b.then(data => console.log(data))
console.log("Last line of this file");


/* what these harry2 function is going to do:-
asyns returns the promise, but before that the statement of function executes.
so, first these gonna prints "inside the harry function".
when it sees 'await' the controls exit out the function and runs the whole statement after the function called.
so it prints the "after calling harry".
and after that we are trying to print a, which is promise and it is pending. so it prints "pending".
after that a(promise) is not resolved so the .then() function not runs. and statement after the then function runs and it prints "last line of this js file".
after running every statement below the function call, controls agains retrun to the 'await' key which is inside the function.
Now await bolega response sai, ki mai apna sarra kaam ker ke aa gaya hu apna, kya aap complete hua ho kya, agar response complete hogaya hoga tou ye "before response" prints karega.
uske baad usse 'await' dobara dekhega, tou ab await user se puchega ke aap complete ho chuke ho kya. agar complete nahi hua hai tou await control ko bolega ki dekh kai aao ki koi aur kaam bacha hua hai kya agar hai tou usse kro.
aur agar nahi tou, control phir 'await' ke paas return ho jaye ga.
aur jab response, json me convert ho jaye ga tab "user resolved" print ho gaye ga.
uske baad async wali promise return ho gaye gi.
uske baad .then() function run ho gaye ga, ku ki a ki promise resolve ho chuke hai.
*/