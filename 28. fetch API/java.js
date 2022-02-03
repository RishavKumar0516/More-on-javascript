console.log("tutiorial on fetch api");

//Button with id mybtn
let myBtn = document.getElementById("mybtn");
//div with id content
let content = document.getElementById("content");

 function getData(){
     console.log("starting getData");
     /* fetch takes an url and these return the promise and these again call to new promise.
     the fetching process(getting the data from the server/File) works in background. so these prints the data until it gets the entire data from the file. */
     /*  thesefore the content of fetch prints after printing the "after running getdata". */
     url="rishav.txt";
     fetch(url).then((response)=>{
         console.log("Inside First then");
         return response.text();
     }).then((data)=>{
         console.log("Inside second then");
       console.log(data);
     })
 }
 console.log("Before running getData");
 getData();
 console.log("After running getData");

/* getting the json data */
// function getData(){
//     console.log("starting getData");
//     /* fetch takes an url and these return the promise and these again call to new promise.
//     the fetching process(getting the data from the server/File) works in background. so these prints the data until it gets the entire data from the file. */
//     /*  thesefore the content of fetch prints after printing the "after running getdata". */
//     url="https://api.github.com/users";
//     fetch(url).then((response)=>{
//         console.log("Inside First then");
//         return response.json();
//     }).then((data)=>{
//         console.log("Inside second then");
//       console.log(data);
//     })
// }
// console.log("Before running getData");
// getData();
// console.log("After running getData");


/* post request using fetchAPI */
// function postData(){
//     console.log("starting getData");
//     url="https://httpbin.org/post";//the url to which we post.
//     data = '{"name":"testwe345674567","salary":"123"}}'//data which we post is in stiring.
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
// postData();
/* fetchAPI takas url as well as it also takes parameter. here we use two parameters.
params is an object, this contains method(post) and headers. inside the header we shows how the data comes.
inside the header, most important is contentType. In most of the cases it is application/json.
body always contains data in string, iin most of the cases data is object so convert those data in string and then post them.*/

