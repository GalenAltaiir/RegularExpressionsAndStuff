const string = "Hello World! I'm ready!"
const regEx = /world/i

const string2 = "Hello World! I'm ready!"
const regEx2 = /planet/i


var br = "<br>"

document.write("String: "+string + br);
document.write("RegEx: "+regEx + br);
document.write("Output: "+ string.replace(regEx, "People") + br)

document.write("==========================================="+ br);
document.write("String: "+string2 + br);
document.write("RegEx: "+regEx2 + br);
document.write("Output: "+ string2.replace(regEx2, "People") + br)


/* 

This will match the string, and if a match is found, it will replace the match with the new string.
Otherwise it won't do anything

Syntax:
string.replace(regExp);
Parameters: Here the parameter is “regExp” (i.e. regular expression) which will compare 
with the given string. 

Return Value: It will return an array that contains the matches one item for each match
or if the match will not found then it will return Null. 
 */