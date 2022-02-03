console.log("shortand character classes");

//  character classes
/* 
1.  \w(word character) : word charachter - _ or alphabet or alphanumeric character.
 */
let regex = /\wart/;  //  har can exactly occour 2 times.
let str = "har bhai"; 
regex = /\w+d1r/;    //  \w+ means one or more character
str = "hard1r bhai"; 
regex = /\Wbhai/;    //  \W non word character.
str = "hard1r bhai"; 
regex = /\W+bhai/;   //  \W+ means more then one Non word character.
str = "hard1r $$$%bhai"; 
regex = /\d8999/;   //  \d means digit.
str = "hard1r $$$%bhai harry ka number 999999999555"; 
regex = /number \d+/;   //  \d means more then one digit.
str = "hard1r $$$%bhai harry ka number 999999 999555"; 
regex = /\D999/;   //  \D means non digit.
str = "hard1r $$$%bhai harry ka number 999999harry999555"; 
regex = /\D+999/;   //  \D means more then non digit.
str = "hard1r $$$%bhai harry ka number 999999harry999555"; 
regex = /\ska number/;   //  \s means white space. match white space character
str = "hard1r $$$%bhai harry ka number 999999harry999555"; 
regex = /\s+ka number/;   //  \s+ means match more then one white space character
str = "hard1r $$$%bhai harry           ka number 999999harry999555"; 
regex = /\Ska number/;   //  \s  match one non whitespace character
str = "hard1r $$$%bhai harryka number 999999harry999555"; 
regex = /\S+ka number/;   //  \S+ match one or more then one non whitespace character.
str = "hard1r $$$%bhai harryka number 999999harry999555"; 
regex = /4r5r\b/;   //  \b means word boundary.
str = "hard1r4r5r$$$%bhai harryka number 999999harry999555"; 

// Assertions.
regex = /h(?=y)/;   //  these returns the word which contains y after the h
str = "hard1r4r5r$$$%bhai hyarryka number 999999harry999555";  
regex = /h(?!=y)/;   //  these returns the word which does not contain y after the h
str = "hard1r4r5r$$$%bhai hyarryka number 999999harry999555"; 

result = regex.exec(str);
 console.log("The result form exec is ",result);
 if(regex.test(str)){
     console.log(`The string ${str} match the expression ${regex.source}`);
 }
 else{
     console.log(`The string ${str} does not match the expression ${regex.source}`);
 }