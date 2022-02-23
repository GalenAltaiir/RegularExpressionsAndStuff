const string = "Hello World!!!!!!"
const regEx = /[a-zA-z]/gi

const string2 = "!!!!!"
const regEx2 = /[a-zA-z]/gi

var br = "<br>"

document.write("String: "+string + br);
document.write("RegEx: "+regEx + br);
document.write("Output: "+ regEx.test(string) + br)

document.write("===========================" + br)

document.write("String 2: "+string2 + br);
document.write("RegEx 2: "+regEx2 + br);
document.write("Output 2: "+ regEx2.test(string2))

/* 
test() : The test method searches string for text that matches regexp. 
If it finds a match, it returns true; otherwise, it returns false.

Syntax : RegExpObject.test( string );
Parameter Details:The string to be searched
Return Value :
Returns true if a match is found, and false if not.
 */