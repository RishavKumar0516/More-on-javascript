console.log("Validating the form");

//creating class for storing the valid information to the local storage and then posting it to the file.
class UserInformation{
  constructor(name, email, phone, IdType, IdNo){
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.IdType = IdType;
    this.IdNo = IdNo;
  }
}

class Display{
  AddToStorage(userInfo){
    let nodes = localStorage.getItem("nodes");
    let userObj;
    if(nodes == null){
       userObj = []; //creating an empty array for storing objects.
    }
    else{
      userObj = JSON.parse(nodes);
    }
    userObj.push(userInfo);
    localStorage.setItem("nodes", JSON.stringify(userObj));
    console.log(userObj);
    
  
  }
  Clear(){
    let formvalidation = document.getElementById("formvalidation");
    formvalidation.reset();
  }
//    postData(){
//     let nodes = localStorage.getItem("nodes");
//     let userObj;
//     if(nodes == null){
//        userObj = []; //creating an empty array for storing objects.
//     }
//     else{
//       userObj = JSON.parse(nodes);
//     }
//     console.log("starting getData");

//     url="userinfo.txt";//the url to which we post.
//     data = JSON.stringify(userObj);//data which we post is in stiring.
//     params = {
//         method:'post', 
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: data//posting the data. if the data we are posting in not string then use -- body: JSON.stringify(data) |converting the object data in string and then post it to the given url.
//     }
//     fetch(url, params).then(response=> response.json())
//     .then(data=>console.log(data))
// }
}

let username = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let idType = document.getElementById('id-type');
let idProve = document.getElementById('id-prove');
let Success = document.getElementById("Success");  
let failure = document.getElementById("failure");
failure.style.display = 'none';
Success.style.display = 'none';
let validName = false;
let validEmail = false;
let validPhone = false;
let validIdprove = false;


username.addEventListener('blur', ()=>{
   console.log("username is blured");
   //validating the username.
   let regex = /[a-zA-Z]/;
   let str = username.value;
   console.log(regex, str);
   if(regex.test(str)){
     console.log("Valid username");
     username.classList.remove('is-invalid');
     validName = true;
   }
   else{
     console.log("Invalid usename");
     username.classList.add('is-invalid');
     validName = false;
   }
})
email.addEventListener('blur', ()=>{
    console.log("Email is blured");
    //validating the username.
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if(regex.test(str)){
      console.log("Valid email");
      email.classList.remove('is-invalid');
      validEmail = true;
    }
    else{
      console.log("Invalid email");
      email.classList.add('is-invalid');
      validEmail = false;
    }
})
phone.addEventListener('blur', ()=>{
    console.log("Phone is blured");
    //validating the username.
    let regex = /^[0-9]{10}$/;
    let str = phone.value;
    console.log(regex, str);
    if(regex.test(str)){
      console.log("Valid phone");
      phone.classList.remove('is-invalid');
      validPhone = true;
    }
    else{
      console.log("Invalid phone");
      phone.classList.add('is-invalid');
      validPhone = false;
    }
})

idProve.addEventListener('blur', ()=>{
    console.log("IdProve is blured");
    console.log(idType.value);
    //validating the username.

    let regex;
    if(idType.value == 1)
    {
        regex = /^[0-9]{12}$/;
    }
    else if(idType.value == 2){
        regex = /^[a-zA-Z]+([a-zA-Z0-9]){11}$/;
    }
    else{
        regex = /^([a-zA-Z0-9]){12}$/;
    }
    let str = idProve.value;
    console.log(regex, str);
    if(regex.test(str)){
      console.log("Valid idProve");
      idProve.classList.remove('is-invalid');
      validIdprove = true;
    }
    else{
      console.log("Invalid idProve");
      idProve.classList.add('is-invalid');
      validIdprove = false;
    }
})

let submit = document.getElementById("submit");
submit.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(" You clicked submit button.");
    //submit Your form.

    if(validName && validEmail && validPhone){  
        console.log("phone,Email and user are valid. Submitting the form");
        Success.classList.add('show');
         failure.classList.remove('show');
         failure.style.display = 'none';
         Success.style.display = 'block';
         let userInfo = new UserInformation(username.value, email.value, phone.value, idType.value, idProve.value);
         console.log(userInfo);
          let display = new Display();
          display.AddToStorage(userInfo);
          // display.postData();
          display.Clear();


    }
    else{
        console.log("One of Email, Phone or User are not valid. Please correct error and try again.")
         Success.classList.remove('show');
         failure.classList.add('show');
         failure.style.display = 'block';
         Success.style.display = 'none';
    }
})