/* you have to create a div and inject it into the pagewhich contains a heading. jab bhi koi click kare us div par wo editable item ban jaye, aur usse click away kare tou use save kerdo local storage mai.*/

/*creating new element */
let divEle = document.createElement('div'); 
/* creating textfor the created node */
let val = localStorage.getItem('text');
let text;
if(val == null){//if you haven't set any value to the element or you are the first one, who is visiting the website.then
     text = document.createTextNode("this is my element. click to edit it");
}
else{
     text = document.createTextNode(val);
}

divEle.appendChild(text);

/* setting id,style and class */
divEle.setAttribute('id', 'elem');
divEle.className = "elem";
divEle.setAttribute('style', 'border:2px solid black; width:200px; margin:34px,padding:23px');
//grab the main container.
let container = document.querySelector(".container");
let first = document.getElementById('myfirst');


//insert the element before element with id first.
/* The insertBefore() method inserts a node as a child, right before an existing child, which you specify */
container.insertBefore(divEle,first);

console.log(divEle,container,first);

/*  adding event listener to the div element */

divEle.addEventListener('click', function(){
    let notextAreas = document.getElementsByClassName('textarea').length;
    if(notextAreas == 0){
    
    let html = elem.innerHTML;
    divEle.innerHTML = `<textarea class="textarea form-control"  id="textarea" rows="3" >${html}</textarea>`;

    }

    //listening for the blur event on text area.
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function(){
        elem.innerHTML = textarea.value;
        localStorage.setItem('text',textarea.value);
    })
});

