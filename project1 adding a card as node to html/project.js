console.log("welcome to notes app. this is app.js");
showNotes();

/* if user add a note then, add it to the local storage. */

console.log("if user add a notes then, add it to the local storage.");

console.log(localStorage);
let addBtn = document.getElementById("add-btn"); /* grabbing the element whose id is btn, and adding the click event to the btn. if the btn is clicked then it runs the function. */
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  /* grabbing the textarea element whose id is addtxt.
   */
let notes = localStorage.getItem("notes"); //these returns the value of key whose name is notes(string), stored in local storage. agar koi notes pahle sai local storage mai ai tou useea return ker do.
  if (notes == null) {
    //if there is no any notes named key is stored in local storage the it is going to return null.
    notesObj = []; //if notes is null then setting the array as empty.
  } 
  else {
    notesObj = JSON.parse(notes); // if notes is already exist then convert the notes(string) in array  using json.parse(). it takes a valid string and convert the string in to javascript object. so it convert the string(notes) in to array.
  }
  notesObj.push(addTxt.value); // if anybody enter the text then we are adding the text in the array notesObj. here we are updating the array with the addTxt element.if anybody clicks on the addbtn, then we update the nodes, we add one more nodes.

  /* here we have added new node to the array but we haven't update the local storage */
  localStorage.setItem("notes", JSON.stringify(notesObj)); // here we are converting the notesObj array in to the string and updating the local storage. string me hum esliye convert kiye ku ki local stroage kai andar string mai hi set karna parta hai;
  addTxt.value = ""; // addtxt ke value ko blank ker daige, agar nahi karege tou uske andar likha hua humesha likha hi reh gaye ga.
  console.log(notesObj);
  showNotes();
});
function showNotes() {
  let notes = localStorage.getItem("notes"); //these returns the value of key whose name is notes, stored in local storage. agar koi notes pahle sai local storage mai ai tou useea return ker do.
  if (notes == null) {
    //if there is no any notes named key is stored in local storage the it is going to return null.
    notesObj = []; //if notes is null then setting the array as empty.
  } else {
    notesObj = JSON.parse(notes); //json.parse() takes a valid string and convert the string in to javascript object. so it convert the string(notes) in to array.
  }

  // let newdate = new Date();
  // let hours = newdate.getHours();
  // let minute = newdate.getMinutes();

  let html = ""; /* creating a blank string */
  notesObj.forEach(function (element, index) {

    //notesObj is an array so, we are looping these. creating the function which takes element and index as argument.

    /* with the help of backtics we are creating cards and appending inside the string variable html */
    html += `
                <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note ${index + 1}</h5> 
                        <p class="cardtext">${element}</p>
                        <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
                    </div>
                </div> 
               `;
  }); /* with the help of template literals we can grab any variable using ${variable name} .we can also place the content of the variable using literals. */
  /* using ${string variable name} we can place the content of the array at  the place of ${string variable name} */
  /* in button element, setting the id as the index variable . when we click these function it calls the deleteNode function and passing the id of the element,which element is clicked.  */

  let notesElm =document.getElementById("notes"); /*  grabbing the element whose id is notes. */
  if (notesObj.length != 0) {
    /*  if the length of the array is not 0, then place the content of html variable inside the element(notes). */
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note"  section above to add notes.`; /* if the length of the array is  0, then show these message as the content of the notesElm(element). */
  }
  
}

// function to delete the node.

function deleteNote(index) {
  // these function takes the index of the array
  console.log("I am deleting", index);

  let notes = localStorage.getItem("notes"); //these returns the value of key whose name is notes, stored in local storage. agar koi notes pahle sai local storage mai ai tou useea return ker do.
  if (notes == null) {
    //if there is no any notes named key is stored in local storage the it is going to return null.
    notesObj = []; //if notes is null then setting the array as empty.
  } else {
    notesObj = JSON.parse(notes); //json.parse() takes a valid string and convert the string in to javascript object. so it convert the string(notes) in to array.
  }

  notesObj.splice(index, 1);
  /* Array.splice(start: number, deleteCount?: number)
The zero-based location in the array from which to start removing elements.
Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
@returns — An array containing the elements that were deleted. */

/* these methods takes starting index, which is index and the second argument as the number of element you want to delete. */

  /* here we have added new node to the array but we haven't update the local storage */
  localStorage.setItem("notes", JSON.stringify(notesObj)); // here we are converting the notesObj array in to the string and updating the local storage. string me hum esliye convert kiye ku ki local stroage kai andar string mai hi set karna parta hai;

  showNotes();
}



/* function for searching bar in the navigation. */
let search = document.getElementById('searchTxt');

search.addEventListener("input", function(){ /* adding input events in the element(search). these events run the function when we type some text in the input element */

  let inputVal = search.value.toLowerCase();/* storing the value of the input element, in which users type the text.  */

  console.log("input events fired", inputVal);
  let noteCards = document.getElementsByClassName('noteCard');//these returns the nodelist of the element whose class name is card.
  Array.from(noteCards).forEach(function(element){/* converting the nodeList in to the array and grabbing the p child element of each card element  */
       let cardTxt = element.getElementsByTagName('p')[0].innerText;
       console.log(cardTxt);

       if(cardTxt.includes(inputVal)){
         element.style.display ="block";
       } 
       else{
        element.style.display = "none";
       }

  })
})
localStroage.clear();
