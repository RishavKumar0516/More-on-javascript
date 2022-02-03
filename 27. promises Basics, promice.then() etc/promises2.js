console.log("practice on promises");

function func(){
    return new Promise(function(resolve, reject){
       setTimeout(() => {
           let error = false;
           if(!error){
               console.log("hey, you have followed your promises");
               resolve();
           }
           else{
            console.log("hey, you have break your promises, you are lair");
            reject();
           }
       }, 5000);
    })
}
func().then(function(){
    console.log("I have faith/belife in you");
}).catch(function(){
    console.log("You played with my belife");
})