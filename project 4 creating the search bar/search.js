console.log("firing the javascript");

/* function for searching bar in the navigation. */
var search = document.getElementById('searchTxt');

search.addEventListener("input", function(){ /* adding input events in the element(search). these events run the function when we type some text in the input element */

  let inputVal = search.value.toLowerCase();/* storing the value of the input element, in which users type the text.  */

  console.log("input events fired");
  let noteCards = document.getElementsByClassName('box');//these returns the nodelist of the element whose class name is card.
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


// let search = document.getElementById('searchTxt');
// search.addEventListener("input", function(){
//     let inputval = search.value.toLowerCase;
//     let box = document.getElementsByClassName("box");
//     Array.from(box).forEach( function(element){
//         let text = document.getElementsByTagName("p")[0].innerText;

//         if(text.includes(inputval)){
//             element.style.display = "block";
//         }else{
//             element.style.display = "none";
//         }
//     })
// })