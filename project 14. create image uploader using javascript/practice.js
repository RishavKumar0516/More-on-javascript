let file = document.getElementById('myfile');
let columns = document.querySelectorAll(".column");
// create array to store image tag for adding animation
let arrImg = [];

// event handler for input file

/* 
The onchange event occurs when the value of an element has been changed.

For radiobuttons and checkboxes, the onchange event occurs when the checked state has been changed.
 */

file.onchange = ()=>{
   //get the file from the selected folder.

   /* 
   The files property returns a FileList object, representing the file or files selected with the file upload button.

   Through the FileList object, you can get the the name, size and the contents of the files

   file.files return the array(list) of file object selected from input file.
   */
   //console.log(file.files);
   for (const key in file.files) {
       const element = file.files[key];  /* grabbing each object one by
                                            one from the array(file.files) of object*/
       //console.log(element);

       if(element.type === "image/jpeg"||element.type === "image/jpg"||element.type === "image/png"){

        //  finding which column has minimum number of image element
         let parent_column = minParent(columns);
        //  passing the actual path of the file and in return getting image element 
         let imageEle = createImgElement(element.webkitRelativePath);
        // store image element in the array for animation
         arrImg[key] = imageEle;
        //appending image element in the column.
         parent_column.append(imageEle);

       }
   }
     // create variable for index number
        let i = 0;
   let clearinter = setInterval(() => {
        arrImg[i].setAttribute("style", "display : initial");
        arrImg[i].classList.add("animated", "zoomIn");
        i++;
     // clear set interval when i is equal to array lenght
        i == arrImg.length ? clearInterval(clearinter) : undefined;
   }, 200);
}


//  Obtain the parent of the image element which contain minimum number of image element
//  parentmode is an array of column class element. iterating them and and storing the number of children in array arr, of column class element.

function minParent(parentnode){

   let arr = [];
   parentnode.forEach( (element, i)=>{
      arr[i] = element.children.length;
   });

   // Getting the minimum number of element from the array arr.
   let min = Math.min.apply(null, arr);

   // finding which parent has minimum number of children from parentnode array and return those parent

  for(let i=0; i<parentnode.length;i++){
      if(parentnode[i].children.length == min){
          return parentnode[i];
      }
  }
}

//  create image element and adding source(src) attribute to the image element and return the element.
// imgsrc contain the source of element
function createImgElement(imgsrc){
    let image = document.createElement("img");
    image.setAttribute("src", imgsrc);
    image.className = "img";
    return image;
}