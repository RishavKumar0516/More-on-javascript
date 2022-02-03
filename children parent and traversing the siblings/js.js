let cont = document.querySelector(".no");
 cont = document.querySelector(".container");
console.log(cont);

//childNodes returns a collection of a node's element nodes including text and comment children and newlines.
console.log(cont.childNodes);//these gonna returns every child of the container and also return the comments and text.

// if you are not intrested in comments,text and newlines then use children in place of child nodes.
// children property returns the collection of a node's element nodes (excluding text and comment nodes and newlines).
 
console.log(cont.children);
//nodename returns the name of the element.
let nodenames = cont.childNodes[3].nodeName;//these returns the name of element at the 3rd index of the nodelist.
console.log(nodenames);

let nodetype = cont.childNodes[0].nodeType;//these returns the value related to the value at the bottom.
console.log(nodetype);  // these says that at the index 0 in the nodelist textnode is present.

/* component        nodetype
    Element            1
    Attribute          2
    Text Node          3
    Comment            8
    document           9
    docType            10
    */
   let container = document.querySelector('div.container');/* these gonna grab the div whose class is container. */
   console.log(container);
   console.log(container.children);
   /* if we want to grab the child of the child element then */
   console.log(container.children[1].children);//these will return the child of the second child of  container.  it means return kerdo container kai dushre child element ka bhi children ko. yeha container ka dushra child div#myfirst hai, aur uska child ul.this hai.

// agar hume uske bhi child element chaiye tou hum indexing ker kai childern property ka use ker ke usko bhi grab ker shakte hai.
console.log(container.children[1].children[0].children);// yeh return karega container kai dushre child ke pahle children ko.it means container kai dushre child ke pahle child ka sabhi children (sabhi child element) ko.
console.log(container.children[4]);//these returns the fifth child of the container.
console.log(container.children[5]);//these returns the sixth child of the container.
console.log(container.children[5].children);//these returns the children(whole child element) of the sixth child of the container.(container kai sixth child kai saare children.)

console.log(container.firstChild);//these returns the first child of the container(including text and elements).
//we use the firstchild when  we want to grab any text ,comments, or element which is persent on the top.
//we use the lastchild when  we want to grab any text ,comments, or element which is persent on the bottom.
console.log(container.lastChild);

console.log(container.firstElementChild);//these returns the first child container which is element.(excluding the text)
//we use the firstElementchild when we want to grab only the element which is persent on the top.
console.log(container.lastElementChild);//these returns the last child container which is element.(excluding the text)
//we use the lastElementchild when we want to grab only the element which is persent on the bottom.

console.log(container.childNodes);
console.log(container.children);
console.log(container.childElementCount);//these returns the length of the child element(only element) of the container.

console.log(container.firstElementChild.parentNode);//these returns the parentnodeof the first child of the container.
console.log(container.firstElementChild.nextSibling);//these returns the next child of the parent container other then first element child. these may return text, comments or element.

console.log(container.firstElementChild.nextElementSibling);//these returns the next child element of the parent container other then first elememt child. these returns only element.

console.log(container.firstElementChild.nextElementSibling.nextElementSibling);//these returns the next child element of the next child element of the parent container other then first elememt child. these returns only element.