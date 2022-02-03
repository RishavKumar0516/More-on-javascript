console.log("Generator in Javascript");

/* Generator:-  we use array to stores values and these takes some memory. but if somebody tells you to create an array to store 1lakh values, you can do these, but you don't want to store then in storage.
so generator generates the value but, it doesn't stores them.
it generates the value whenever you call them. */

//syntax of generator.
function* numberGen(){
    let i = 0;

    // yield 1;//yield is a keyword for generating a number when generator called.
    // yield 2;
    // yield 3;
    // yield 4;
    while(true){
        yield i++;
    }
}
const gen = numberGen();
console.log(gen.next());//these returns an object
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next().value);//these returns only the value.
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
/* whenever you run the generator it gives you the next value, as an object. */