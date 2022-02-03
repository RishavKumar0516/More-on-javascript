console.log("these is allen parker");


// When an HTML document is loaded into a web browser, it becomes a document object.

// The document object is the root node of the HTML document. these is the object it contains many function and methods. we cannot access these object using foreach;

 let a = document;
a = document.all;/* these returns the collection of whole html. */

//a = document.body;/* these returns the body of the document. */

//a = document.form;  /* Returns a collection of all <form> elements in the document */
//console.log(a);

/* we can iterate the documnet form object using array.here we are converting objects into array.
with the help of array.from(a) :- these means that with the help of variable a create an array and then iterate them; here a contains the document object.*/
Array.from(a).forEach(function(element){
console.log(element);
})
// links	Returns a collection of all <a> and <area> elements in the document that have a href attribute
// let b = document.links;
let b = document.links[0].href;//these is pointing to the first link and returns the href attribute of the given links.
console.log(b);

let images = document.images;//returns collection of all img element in the document.
console.log(images);

let script = document.scripts;//returns collection of all img element in the document.
console.log(script);



