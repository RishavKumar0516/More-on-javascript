// let doc = document.all;
// console.log(doc);

// we can grab the element using documnt properties and methods. but the best thing we can do is grab the element using element selectors.

//Element secectors 
//1.single element selectors
//2.Multi element selectors


//1. single element selectors

        //grabbin element using id

        let main = document.getElementById('main');// these (documnet.getElementById) is used to grab the element whose id is main. It is used to select the element using id.
        console.log(main);
        let ele = document.getElementById('myfirst');// these is used to grab the element whose id is myfirst. It is used to select the element using id.
        console.log(ele);

        //ele.innerHTML = main.innerHTML;// using innerHTML we change the content of element.

        //we can use the above element variable and do some changes.

        // The className property sets or returns the class name of an element (the value of an element's class attribute). 
        // Tip: A similar property to className is the classList property.
        //  ele = ele.className;
        //  console.log(ele);


// The childNodes property returns a collection of a node's child nodes, as a NodeList object.
// The nodes in the collection are sorted as they appear in the source code and can be accessed by index numbers. The index starts at 0.
/* Tip: You can use the length property of the NodeList object to determine the number of child nodes, then you can loop through all child nodes and extract the info you want. */
//Tip: To return a collection of a node's element nodes (excluding text and comment nodes), use the children property.

        //  ele = ele.childNodes;
        //  console.log(ele);


//         The parentNode property returns the parent node of the specified node, as a Node object.

// Note: In HTML, the document itself is the parent node of the HTML element, HEAD and BODY are child nodes of the HTML element.

// This property is read-only
        // ele = ele.parentNode;
        // console.log(ele);


        //we can change the css using javascript
        ele.style.color = 'red';

        //we can also change the content of the element using javascript.
        ele.innerText ="alen parker is a good guy";
        //we can also grab the content of the element using javascript.
       console.log(ele.innerText);

        //we can also change the html of the element using javascript.
        ele.innerHTML ='<b>alen parker is a good guy</b>';



        let sel = document.querySelector('#navbar');  // the first element which matches with these selector get returned.
        //jo bhi pehla element es selector sai match karega wo return ho gaye ga,or usaay grab ker laega.
        sel = sel.className;
        console.log(sel);
 
        let sel2 = document.querySelector('#navbar');// In these case we said, to return the first element whose id is 'navbar'.
        console.log("selector returns" + " " + sel2);
 
        let sel3 = document.querySelector('#navbar>li');// In these case we said, to find the first element whose id is 'navbar' and returns the first child 'li' element of navbar.
        console.log( sel3);
 
        sel3.innerHTML = "<li> remember me </li>";  
        
        
        //grabbing elements using tag name.

        /* The tagName property returns the tag name of the element.
In HTML, the returned value of the tagName property is always in UPPERCASE.
This property is read-only.
Tip: You can also use the nodeName property to return the tag name of an element. The difference is that nodeName also returns attribute nodes, text nodes, comment nodes. */
        let elems = document.getElementsByTagName('div');
        console.log(elems);
                //when grabbing or selecting the element using tagname, it return all the element whose tagname is same.it returns the arrays of element whose tagname is same.

                // elems.forEach(element => {
                //     console.log(element);
                // });
                //these will throwout error because we cannot use foreach on html collection.
                //but we can use like these:-
                Array.from(elems).forEach(element => {
                    console.log(element);
                    element.style.color = "blue";
                });
                //this gonna print whole html collection.

