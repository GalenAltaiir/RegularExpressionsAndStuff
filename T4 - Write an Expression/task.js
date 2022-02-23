const string = "smith"
const regEx = /[a-z]{5}/gi

const string2 = "William, Smith, Johnes, Jackson";

var br = "<br>"

document.write("String: "+string + br);
document.write("RegEx: "+regEx + br);
document.write("Output: "+ string.match(regEx) + br)
document.write("===========================" + br)
document.write('The {} limits the regular expression string to 5 character PER MATCH , if the string is longer, this is the result' + br)

document.write("String 2: "+string2 + br);
document.write("RegEx 2: "+regEx + br);
document.write("Output 2: "+ string2.match(regEx))

/* 
Syntax:
string.match(regExp);
Parameters: Here the parameter is “regExp” (i.e. regular expression) which will compare 
with the given string. 

Return Value: It will return an array that contains the matches one item for each match
or if the match will not found then it will return Null. 
 */