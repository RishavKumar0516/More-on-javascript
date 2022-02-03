console.log("This is tutorial on metacharacter");

let regex = /harry/;
let str = "harry is a harry";
let result = regex.exec(str);
console.log(result);
if(regex.test(str)){
    console.log(`The string ${str} match the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}

//   lets look at some metacharacter symbol.
/* 
1. ^(carrat) : these carrat symbol means start with. expression will match if string starts with.
 */
regex = /^harr/;
if(regex.test(str)){
    console.log(`The string ${str} match the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}
/* 
2. $ : $ at the end means string ends with. expression will match if strings ends with.
 */
regex = /rry$/;
if(regex.test(str)){
    console.log(`The string ${str} match the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}
/* 
3.  .(dot): matches any one character.
 */
regex = /har.y/;
if(regex.test(str)){
    console.log(`The string ${str} match the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}
/* 
3.  *(astik): matches any 0 or more character.
 */
regex = /har*y/;
str = "haraiokfdpobmvry is a harry";
if(regex.test(str)){
    console.log(`The string ${str} match the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}
/* 
3.  ?(optional): optional after a charcter means it makes  those character as optional.
 */
regex = /ha?rryi?/;
str = "harry is a hrry";
if(regex.test(str)){
    console.log(`The string ${str} match the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}
/* 
3.  /(optional): if the string contains same character symbol then use backslash(\) before symbol.
 */
regex = /h\*rry/;
str = "harry means codewith";
if(regex.test(str)){
    console.log(`The string ${str} match the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}
