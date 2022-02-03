console.log("AJAX in one video");

// Lets learn how to request XML http and how XMLhttp works. start with basics.

var fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler)

function buttonClickHandler(){
    console.log("You have clicked on the button.");
    //instantiate/create an xhr object.
    const xhr = new XMLHttpRequest();
    //open the object.

    /* xhr.open('request_name', 'name of file from where data comes', type of request)
    GET means only fetch the data. we give the url.
    POST means we pass data as well as url.
    there are two type of request.
    1.synchrous - it is a blocking request, if you want these request then write  false.
    2.Asynchrous - it is a non blocking request. if you want these request then write true.
     */

    //  ------------1------------------
//      xhr.open('GET', 'rishav.txt', true);
//      //what to do on progress.(optional)
//      xhr.onprogress = function(){
//          console.log('on Progress');
//      }
//  // what to do when response is ready.
//      xhr.onload = function(){
//          console.log(this.responseText);
//      }
//      //send the request
//      xhr.send();

     //------------2---------------
//     // if we include the file name which doesn't exist in our directory then we get error. so if we want to perform different work when we get error, and perform different task when we have no error message.
//     // so inside onload we can check status that we have error or not.
//     xhr.open('GET', 'rishav2.txt', true);
//     //what to do on progress.(optional) :- whenever the onload function not runs, you can perform another task.
//     xhr.onprogress = function(){
//         console.log('on Progress');
//     }
//     //In past days onreadystate was used in place of onload.
//     xhr.onreadystatechange = function(){
//         console.log('ready state is ', xhr.readyState);
//     }
//     /* these return 5 values
//   value meaning            function
//     0	UNSENT	            Client has been created. open() not called yet.
//     1	OPENED	            open() has been called.
//     2	HEADERS_RECEIVED	send() has been called, and headers and status are  available.
//     3	LOADING	            Downloading; responseText holds partial data.
//     4	DONE	            The operation is complete.
//     */
// // what to do when response is ready.
//     xhr.onload = function(){
//         if(this.status===200){
//             console.log(this.responseText);
//         }
//         else{
//             console.log("some error occured");
//         }

//     }
//     //send the request
//     xhr.send();
//-----------------------3-------------------------
//  xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
//  //what to do on progress.(optional)
//  xhr.onprogress = function(){
//      console.log('on Progress');
//  }
//  // what to do when response is ready.
//  xhr.onload = function(){
//      console.log(this.responseText);
//  }
//  //send the request
//  xhr.send();
//  console.log("we are done!");
//-------------------------4------------------------
//using these for post request.
// never send passward using GET request, always use POST request to send passward to private data. using post request you can send large data, there is no rectriction.
//  xhr.open('POST', '	https://httpbin.org/post', true);
//  xhr.getResponseHeader('content-type', 'application/json');//this is a response header, we are sending the form data in form of url.
//  //what to do on progress.(optional)
//  xhr.onprogress = function(){
//      console.log('on Progress');
//  }
//  // what to do when response is ready.
//       xhr.onload = function(){
//           if(this.status===200){
//               console.log(this.responseText);
//           }
//           else{
//               console.log("some error occured");
//           }

//       }
//  //send the request
//  params = `{"name":"testwe345674567","salary":"123"}`;
//  xhr.send(params);
//  console.log("we are done!");

}

// --------------populating the data-------------------

var popBtn = document.getElementById("popBtn");
popBtn.addEventListener("click", popHandler)

function popHandler(){
    console.log("You have clicked on the button.");
    //instantiate/create an xhr object.
    const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://reqres.in/api/products/3', true);

  // what to do when response is ready.
  xhr.onload = function(){
         if(this.status===200){
             let obj2 = JSON.parse(this.responseText);//this return the response in string, so using parse method converting the string in the object.
             console.log(obj2);
             let list = document.getElementById('list');
             str = "";
             for(key in obj2){
                  str += `<li> </li>`;
                 list.innerHTML=str;
             }
         }
         else{
             console.log("some error occured");
         }
  }
  //send the request
  xhr.send();
  console.log("we are done! fetching employee.");
}
