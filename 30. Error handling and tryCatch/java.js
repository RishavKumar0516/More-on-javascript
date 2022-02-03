console.log("error handing and catch file");

//pretend this is coming from server as a response.
let a = "Harry bhai";
a = undefined;
if(a != undefined){
    /* if you want to throw an error message then use syntax shown below. */
    throw new Error('This is not undefined');
}
else{
    console.log('this is undefined');
}

/* why we need to throw error?
->  if server throws/send wrong response, then we throw error messages */

/* catch error:- using these we catch the error messages */
//functionHarry();
try {                     //try tries to run its content, if  their is an error then catch  function catch those error.
    // iorhtejg           // this is error
    // console.log("We are inside the try block");
    functionHarry();    //this not give syntax error, but if write it outside the try then it gives syntax error.
} catch (error) {         // it checks for the error, if their is error then it catch those error.
    // console.log("Are you okay");
    console.log(error);   // this will prints the error present inside the try function, in text format.
    console.log(error.name); // prints the name of error 
    console.log(error.message);  // prints the message of error.
}finally{                 // finally always runs either the error is try or catch.
    console.log("Finally we will run this.");
}