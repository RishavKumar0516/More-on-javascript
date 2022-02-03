console.log("let's start the coding. ");
localStorage.clear();

shownotes();
let addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", function(e){

   addTxt = document.getElementById("addTxt");

   notes = window.localStorage.getItem("notes");
   console.log(notes);

   if(notes == null){
       notesObj = [];
   }else{
       notesObj = JSON.parse(notes);
       console.log(notesObj);
   }
     notesObj.push(addTxt.value);

     localStorage.setItem("notes",JSON.stringify(notesObj));

     addTxt.value = "";
     console.log(notesObj);
     shownotes();
})

function shownotes(){
    notes = localStorage.getItem("notes");

    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function elemenator(element, index){
        html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5> 
            <p class="cardtext">${element}</p>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
        </div>
    </div> `;

    let notesElm = document.getElementById("notes");
    if(notesObj.length != 0){
        notesElm.innerHTML = html;
    }else{
        notesElm.innerHTML = "Please add the notes here";
    }
     
    });
}