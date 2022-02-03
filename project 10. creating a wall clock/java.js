console.log('creating a wall clock');
/* 
  
*/

let box = document.getElementById('container1');
setInterval(() => {
    //Getting the current date.
    let date = new Date(); 
    //Extracting the hours, minute and second from the current date.
    let hours = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    //this is for showing the minutes and seconds starting in "01" sequence. 
    minute = ((minute < 10) ? "0" : "") + minute;
    second = ((second < 10) ? "0" : "") + second;
    let instance;
    //  This is for showing the AM or PM.
    if(hours > 12){
        instance = "PM";
    }
    else{
        instance = "AM";
    }
    //  IF you want to show the time in 12hour time.
    hours = (hours > 12)? hours - 12 : hours;
    hours = (hours == 0)? 12 : hours;
    //insert the time in container.
    box.innerHTML = hours + ':' + minute + ':' + second + " " + instance;
}, 1000);
