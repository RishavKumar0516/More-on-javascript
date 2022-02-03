console.log("creating an alarm app");

/* You have to create an alarm colock in javascript (use your creativity).
Allow your userto set alarm for a certain time. */

var audio = new Audio('https://pl3dxz-a.akamaihd.net/downloads/ringtones/files/mp3/twirling-intime-lenovo-k8-note-alarm-tone-41440.mp3');

function ringbell(){
    audio.play();
}

const alarmSubmit = document.getElementById('alarmSubmit');
alarmSubmit.addEventListener('click', setAlarm);

function setAlarm(e) {
    e.preventDefault();

    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value);
    console.log(`setting alarm... ${alarmDate}`); 
    now = new Date();
    let timeToAlarm = alarmDate - now;
    console.log(timeToAlarm);   
    if(timeToAlarm > 0){
        setTimeout(() => {
            console.log("alarm is ringing"); 
            ringbell();
        }, timeToAlarm);
    }

}