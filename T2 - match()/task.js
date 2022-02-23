const string = "Hello World!!!!!!"
const regEx = /[a-zA-z]/gi

const string2 = "Hello World!"
const regEx2 = /[0-9]/gi

var br = "<br>"

document.write("String: "+string + br);
document.write("RegEx: "+regEx + br);
document.write("Output: "+ string.match(regEx) + br)

document.write("===========================" + br)

document.write("String 2: "+string2 + br);
document.write("RegEx 2: "+regEx2 + br);
document.write("Output 2: "+ string2.match(regEx2))

/* 
Syntax:
string.match(regExp);
Parameters: Here the parameter is “regExp” (i.e. regular expression) which will compare 
with the given string. 

Return Value: It will return an array that contains the matches one item for each match
or if the match will not found then it will return Null. 
 */