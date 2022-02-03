console.log("This is tutorial 23");


for (let index = 0; index < 4500; index++) {//these will print the every index of the loop, then it prints the "done printing" line outside the loop.
    const element = index;
    console.log("these is index number" + index);
    
}
console.log("done printing");

setTimeout(() => {//these will print the statement "done printing" which is out side of the loop, first and then prints the content of the loop.
    for (let index = 0; index < 4500; index++) {
        const element = index;
        console.log("these is index number" + index);
        
    }
}, timeout);