console.log("you are in the alen parker console");



//  1. how to create and append the element


/* The createElement() method creates an Element Node with the specified name.

Tip: After the element is created, use the element.appendChild() or element.insertBefore() method to insert it to the document. */

let element = document.createElement('li');
console.log(element);

//to add a class name to the element we use className property.these property adds the class name to the specified element.
element.className = 'childul';
console.log(element);

//we can also add id to the specified element using
element.id = 'createList';
console.log(element);

//we can also add more attribute to the specified element.
element.setAttribute('title', 'mytitle');
console.log(element);

// element.innerHTML = "<b>this text is created by allen parker.</b>";//inseting text to the created element.

//we can also create text using createTextNode.
let text = document.createTextNode('I am created using createTextNode ');
element.appendChild(text);//appending these text inside the element node.

//if we want to add these element inside the document or inside the ul.this element then, first we need to grab the ul.this element and then we append these newly created element.


let ul = document.querySelector('ul.this');//grabing the first ul element whose class is "this".
console.log(ul);


/* The appendChild() method appends a node as the last child of a node.

Tip: If you want to create a new paragraph, with text, remember to create the text as a Text node which you append to the paragraph, then append the paragraph to the document.

You can also use this method to move an element from one element to another (See "More Examples").

Tip: Use the insertBefore() method to insert a new child node before a specified, existing, child node. */
ul.appendChild(element);//appending the newely created node(element) inside the ul node.
console.log(ul);
console.log(element);



//    2.  how to replace the element.

let element2 = document.createElement('h3');
element2.id = 'elem2';
element.className = 'elem2';
let tnode = document.createTextNode("this is created node for elem2");
element2.appendChild(tnode);
//in the above code we have created the h3 element and setted id and class.then created text and append those text in the element2.

//  replacewith function replace the element with the given element.

element.replaceWith(element2);
console.log(ul);

let myul = document.getElementById('myul');
 myul.replaceChild(element, document.getElementById('fui'));//these gonna replace the element of id 'fui' with the element node inside the parent myul.
 //hum jis element ko replace ker rahe hai wo child hona chaiye myul ka.otherwise these throwout error.
console.log(myul);

//we can also remove the child from the parent node using removeChild properties.
//using removeChild we can remove any child from the element(parent).
myul.removeChild(document.getElementById('lui'));
 //hum jis element ko remove ker rahe hai wo child hona chaiye myul ka.otherwise these throwout error.

 let pr = element2.getAttribute('class');//these return the given attribute from the given element.
console.log(element2,pr);
let ptr = element2.getAttribute('id');//these return the given attribute from the given element.
console.log(element2,ptr);

 ptr = element2.hasAttribute('id');//these checks whether the  element has has given attribute or not. it returns true or false.
console.log(element2, ptr);

 ptr = element2.hasAttribute('width');//these checks whether the  element has has given attribute or not. it returns true or false.
console.log(element2, ptr);

 ptr = element2.removeAttribute('id');//these remove the given attribute from the specified element.
console.log(element2);


//quick quiz

let heading = document.createElement('h1');
let htext = document.createTextNode('good buy Harry');
heading.appendChild(htext);
let container = document.querySelector('.container');
container.appendChild(heading);
// console.log(body);



