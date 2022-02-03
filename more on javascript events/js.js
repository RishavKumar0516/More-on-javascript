let btn = document.getElementById('btn');
btn.addEventListener('click',func1);
btn.addEventListener('dblclick',func2);
//  function func1(e){
//     console.log("Thanks", e);
//  }
//the default bevaiour of the form is if you click on any button, then it will submit your form. and to keep save from those behaviour we use preventListent.
 function func1(e){
    //  console.log("Thanks", e);
     e.preventDefault();//now the form will not submit.
  }

  function func2(e){
    console.log("Thanks its a double click", e);
    e.preventDefault();
 }
//   btn.addEventListener('dblclick',func3);
//   function func2(e){
//     console.log("Thanks its a double click", e);
//     e.preventDefault();
//  }

document.querySelector('.container').addEventListener('mousemove',function(e){//these change the background color of the element,when mouse is moved.
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor =`rgb(${e.offsetX}, ${e.offsetX},154)`;
    console.log('you triggered mouse event');
})