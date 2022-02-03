//probleum:-
/* create a file of fruit.json and vegetable.json. use the bootstrap template create list of fruits and these gonna fatch from fruits.json and vegetable from vegetable.json. it also contains to buttons one for fatching the fruit and one for fatching vegetable. */

console.log("javascript is running perfectly");

var fruits = document.getElementById('Fruits');
fruits.addEventListener("click", fruitHandler)
function fruitHandler(){
    console.log('Furits button is clicked');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'fruits.json', true);
xhr.onload = function(){
    if(this.status===200){
        let obj2 = JSON.parse(this.responseText);//this return the response in string, so using parse method converting the string in the object.
        console.log(obj2);
        let list = document.getElementById('tablebody');
        str = "";
        for(key in obj2){
             str += `<tr>
                     <th scope="0">1</th>
                     <td>${obj2[key]}</td>
                     <td>@mdo</td>
                     </tr>`; 
            list.innerHTML=str;
        }
    }
}
}