var countdowndate = new Date("nov 20, 2021 15:37:25").getTime();
console.log(countdowndate);
//update the countdown every 1s.
var x = setInterval(function(){
    
    //get todays date and time.
    let timenow = new Date().getTime();
    console.log(timenow);
    //find the distance between the timenow and the countdowndate.
    let distance = countdowndate - timenow;
    //time calculation for days, hours, minute and second.
    let Days = Math.floor(distance/(1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / (1000));
    //display the result in the element whose id is demo.
    document.getElementById('demo').innerHTML = Days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

    //if the count down is finished then write some text.
    if(distance < 0){
        clearInterval(x);
        document.getElementById('demo').innerHTML = " offer Exipired";
    }



}, 1000);



/* The Math.floor() method rounds a number DOWNWARDS to the nearest integer, and returns the result. */