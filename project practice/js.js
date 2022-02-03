console.log("these project is ready to run.");

/* if user add a note then, add it to the local storage. */

// console.log(localStorage);
// localStorage.clear();
// console.log(localStorage);

showNotes();

let addBtn = document.getElementById('addbtn');
addBtn.addEventListener('click', function (e) {

    addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
    showNotes();
})

function showNotes() {
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
       <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
       <div class="card-body">
           <h5 class="card-title">Note ${index + 1}</h5> 
           <p class="cardtext">${element}</p>
           <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
       </div>
      </div> 
       `;
    })

    let notesElm = document.getElementById('notes');
     if(notesObj.length != 0){
     notesElm.innerHTML = html;
   }
    else{
    notesElm.innerHTML = "Nothing To See! Add your comment here.";
   }

}

/* for deleting the node. */

function deleteNote(index){
    let notes = localStorage.getItem("notes");

    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));

    showNotes();
}

// function for searching bar

let searchTxt = document.getElementById("searchTxt");
searchTxt.addEventListener("input", function(){

    let inputVal = searchTxt.value;
    console.log("event is working", inputVal);

    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
})
