console.log("this is alen parker");

let a = window;/*  window is an object whixh contains lots of properties and lots of methods.
in java script window object is global  */

console.log(a);

/*  it is not compulsory to write members and methods followed by window.
ex:- 
  window.alert("welcome");  is same as alert("welcome");

  thesefore we can execute every methods and properties of the window by writting it as it is(its name).
   */

  /*a = prompt("these will destroy your computer");    is same as 
  a = window.prompt("these will destroy your computer"); */

//   let b = window.document;

/*Returns the width of the window's content area (viewport) including scrollbars */

/* b = window.innerWidth; is same as we write, directly the name of the property as
b = innerWidth;	*/

/* 	Returns the height of a window's content area (viewport) including scrollbars */

/*b = window.innerHeight; is same as 
b = innerHeight */

/* scrollX -	An alias of pageXOffset
scrollY -	An alias of pageYOffset */

b = scrollX;
b = scrollY;

/* location	Returns the Location object for the window */
// b = location;


  /*location.reload(); these reload the window */
  /*b = location.href; these returns the href of the windows. */
  /* location.href ="https:www.facebook.com"; these change the links or href of the windows. */

//   b = location.toString();
//   b = window.history; these returns the history of the window.

  console.log(b);


