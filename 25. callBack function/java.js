console.log("this is tutorial for callback function");
//naming the server response
//pretend that this response is coming from the server.
const students = [
   {name: "Harry", subject: "Javscript"},
   {name: "Rohan", subject: "machine learning"}
]

// function enrollStudent(student){
//     setTimeout(function(){
//         students.push(student);
//         console.log("Student has been enrolled");
//     }, 8000);
//     //settimeout says that aap jo ker reha hai wo aap kerte reha mai es ke andar ka samhal lunga background mai. the content of settimeOut runs in background after 3second.
//     /* why we use the setTimeOut?
//     ans:  we have used the settimeout function, because whenever you enroll the student, you send request to the server and consider the request takes 3second so we run the function after 3 second.
//     writing the data takes time and fatching the data takes less time. */
// }
// function getStudent(){
//     setTimeout(function(){
//         let str= "";
//         students.forEach(function(student){
//             str+= `<li>${student.name}</li>`
//         });
//         document.getElementById('student').innerHTML = str;
//         console.log("Student has been fetched");
//     }, 1000);
// }

// let newStudent = {name:"Sunny", subject:"python"}
// enrollStudent(newStudent);
// getStudent();
/* so here the Enrollstudent takes 8seconds to requeat the server and getstudent runs in the 1seconds. thesefore the new added list is not showing. we can resolve these by:- by using call back function.
as a callback function, whatever we pass as a value it calls those value,   */
// we can use any name in place of callback
function enrollStudent(student, callback){
    setTimeout(function(){
        students.push(student);
        console.log("Student has been enrolled");
        callback();  // running the callback function.
    }, 3000);
}
function getStudent(){
    setTimeout(function(){
        let str= "";
        students.forEach(function(student){
            str+= `<li>${student.name}</li>`
        });
        document.getElementById('student').innerHTML = str;
        console.log("Student has been fetched");
    }, 1000);
}

let newStudent = {name:"Sunny", subject:"python"}
enrollStudent(newStudent,getStudent);
//passing get students as a call back function
//now fetching process begins only after the requesting process ends.