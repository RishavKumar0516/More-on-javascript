console.log(" These is tutorial on regular expression ");

/* what is the uses of regular expression?
-->  consider that you have a long paragraph string, and you want to search some words in it. if you want to search the two words followed by space. and you want to find those matches. this is done by regular expression.
 */

/* 
1. if we write something inside 2 slash then it is called regular expression literal.*/

let reg = /harry/; //this is a regular expression literals in javascript.
console.log(reg);
console.log(reg.source);// this return the content of the regular expression.

let s = "This is a great code with harry ";
//function to match expression
/* 
1.  exec() - this function will return an array for match or null for no match. It also retrun the index number.



 */
let result = reg.exec(s);// this always return the first match either retrun null.
console.log(result);
result = reg.exec(s);
console.log(result);

let reg2 = /harry/g;  //here 'g' is a global flag. Now these global Flag finds or searched value globally. it search the whole string and returns all matches.
//  we can use multiple exec() with global flag.
console.log(reg2);
console.log(reg2.source);
let s2 = "This is a great code with harry and also harry bhai ";
let result2 = reg2.exec(s2); //these return the array with first match and index where it finds the match
console.log(result2);
result2 = reg2.exec(s2);//these return the array with second match and index where it finds the second match.
console.log(result2);
result2 = reg2.exec(s2);//these return the array with next match and index where it finds the next match. if there is not any other possible matches then it retruns null.
console.log(result2);

let reg3 = /harry/i;  //here 'i' is a case insensitive flag. this will return the match either the matched result is in uppercase or lowercase.
console.log(reg3);
console.log(reg3.source);
let s3 = "This is a great code with HaRRy and also haRrY bhai ";
let result3 = reg3.exec(s2); // this always return the first match either retrun null.
console.log(result3);
result3 = reg3.exec(s3);// this always return the first match either retrun null.
console.log(result3);
result3 = reg3.exec(s3);// this always return the first match either retrun null.
console.log(result3);
if (result) {
    console.log(result3.index);
    console.log(result3.input);
}
/* 
2. test() - returns true or false. It retruns true when string contains regular expression and retrun false when regular expression is not matched.
*/
let result4 = reg3.test(s3);
console.log(result4);
s3 = "This is a great code with Heart and also heat bhai ";
let result5 = reg3.test(s3);
console.log(result5);

/* 
3. match() - this return an array of results or null. if we search globally the regular expression then it return the array of every matches.
 */
//result4 = reg.match(s3)  - this is wrong syntax of match function.
reg3 = /harry/g;
s3 = "This is a great code with harry and also harry bhai ";
result4 = s3.match(reg3) // - this is true syntax of match function.
console.log(result4);
reg3 = /harry/i;
s3 = "This is a great code with hArry and also harry bhai ";
result4 = s3.match(reg3) // - this is true syntax of match function.
console.log(result4);
result4 = s3.match(reg3) // - this is true syntax of match function.
console.log(result4);
/* 
4.  search() - retruns the index of first match else -1.
 */
reg3 = /harry/i;
s3 = "This is a great code with hArry and also harry bhai ";
result4 = s3.search(reg3) // - this is true syntax of match function.
console.log(result4);
reg3 = /harry/;
s3 = "This is a great code with hArry and also harry bhai ";
result4 = s3.search(reg3) // - this is true syntax of match function.
console.log(result4);
/* 
5. replace() - retruns the new replaced string with all the replacements( if no global flag is given, first match is replaced).
 */
reg3 = /harry/;
s3 = "This is a great code with harry and also harry bhai ";
result4 = s3.replace(reg3, 'SHUBHAM') // - this is true syntax of match function.
console.log(result4);
reg3 = /harry/g;
s3 = "This is a great code with harry and also harry bhai ";
result4 = s3.replace(reg3, 'SHUBHAM') // - this is true syntax of match function.
console.log(result4);