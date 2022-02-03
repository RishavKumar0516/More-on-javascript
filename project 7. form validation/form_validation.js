console.log("Form validation");
const names = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
let validUser = false;
let validEmail = false;
let validPhone = false;
// console.log(names, email,phone);
names.addEventListener('blur', ()=>{   // blur work as select the container and click out side of the container/.
    console.log("name is blured");
    //validate name here.
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){5,10}$/;
    let str = names.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log("Your name is valid");
        names.classList.remove('is-invalid');
        validUser= true;
    }
    else{
        console.log("Your name is not valid");
        names.classList.add('is-invalid');
        validUser= false;
    }
})
email.addEventListener('blur', ()=>{
    console.log("email is blured");
    //validate email here.
    let regex = /^([_\-0-9\.a-zA-Z]+)@([_\-0-9\.a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log("Your email is valid");
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else{
        console.log("Your email is not valid");
        email.classList.add('is-invalid');
        validEmail = false;
    }
})
phone.addEventListener('blur', ()=>{
    console.log("phone is blured");
    //validate phone here.
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log("Your phone is valid");
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else{
        console.log("Your phone is not valid");
        phone.classList.add('is-invalid');
        validPhone = false;
    }
})

let submit = document.getElementById("submit");
submit.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(" You clicked submit button.");
    //submit Your form.
    let Success = document.getElementById("Success");  
    let failure = document.getElementById("failure");
    if(validUser && validEmail && validPhone){  
        console.log("phone,Email and user are valid. Submitting the form");
        Success.classList.add('show');
         failure.classList.remove('show');
         failure.style.display = 'none';
         Success.style.display = 'block';
    }
    else{
        console.log("One of Email, Phone or User are not valid. Please correct error and try again.")
         Success.classList.remove('show');
         failure.classList.add('show');
         failure.style.display = 'block';
         Success.style.display = 'none';
    }
})