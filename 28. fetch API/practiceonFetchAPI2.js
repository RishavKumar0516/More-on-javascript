console.log("Fetching the data from the file");

//  Get request
function getData(){
    console.log("start getting data from the file");

   url = "rishav.json";
   fetch(url).then((response)=>{
       return response.json();
   }).then((data) =>{
       console.log(data);
   })
}

 getData();



 function postData(){
     console.log("starting getData");
     url="https://httpbin.org/post";
     data = '{"introduction":"Hello, good morning I am rishav kumar belongs from khagaria district which is well known for the largest maize producing district in bihar. I completed my primary education from JNKT inter school of khagaria with 69% of marks and  secondary education from MS College of Khagaria with 72% of marks. Now  currently i am pursuming my btech degree from IES college of technology bhopal with 8.21 cgpa. my hobbies are playing cricket, watching movies, listening musics. my Interest is in the web development field."}}'
     params = {
         method:'post', 
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
     }
     fetch(url, params).then(response=> response.json())
     .then(data=>console.log(data))
 }

 //postData();

 /* About rishav.json file : The file always store strings, wheither it is a json file so we store the array of object in form of string in rishav.json */
