let br = "<br>"

/* 
Student grade calculator
Each student has to enter respective subject marks
1 - find total
2 - find percentage
3 - find grade
4 - check pass or fail
5 - combined all and show output 

NOTES: 
Marks are out of X,
Pass percentage is 60% or more

*/

var maxMarks = window.prompt("Enter MAX marks")
/* var maxMarks = 100; */
document.write("Max Marks: "+maxMarks+br)

var modMarks = window.prompt("Enter Module 1 Marks. Between 0 and "+maxMarks)

var mod2Marks = window.prompt("Enter Module 2 Marks. Between 0 and "+maxMarks)

var mod3Marks = window.prompt("Enter Module 3. Between 0 and "+maxMarks)


// calc percentage

function calcPerc(mark){
    var percentage = mark / maxMarks;
    percentage = percentage * 100
    return percentage;
}

function passCheck(grade){
    if(grade >= 60){
        return true
    } else {
        return false;
    }
}

function giveGrade(marks){
    var grade;
    if(marks >= 90){
        grade = "A"
    } else if(marks >= 75) {
        grade = "B"
    } else if (marks >= 60){
        grade = "C"
    } else {
        grade = "F"
    }

    return grade
}

let modPerc = calcPerc(modMarks)
let modGrade = giveGrade(modMarks)
let modPass = passCheck(modPerc)

let mod2Perc = calcPerc(mod2Marks)
let mod2Grade = giveGrade(mod2Marks)
let mod2Pass = passCheck(mod2Perc)

let mod3Perc = calcPerc(mod3Marks)
let mod3Grade = giveGrade(mod3Marks)
let mod3Pass = passCheck(mod3Perc)

document.write("Your Results" + br + br)
document.write("Module 1" + br)
document.write("Marks: [" + modMarks + "/" + maxMarks +"]"+ br)
document.write("Percentage: [" + modPerc + "%/100%]"+ br)
document.write("Grade: " + modGrade + br)
document.write("Module Passed: ["+modPass+"]"+br)


document.write(br + br)
document.write("Module 2" + br)
document.write("Marks: [" + mod2Marks + "/" + maxMarks +"]"+ br)
document.write("Percentage: [" + mod2Perc + "%/100%]"+ br)
document.write("Grade: " + mod2Grade + br)
document.write("Module Passed: ["+mod2Pass+"]"+br)

document.write(br + br)
document.write("Module 3" + br)
document.write("Marks: [" + mod3Marks + "/" + maxMarks +"]"+ br)
document.write("Percentage: [" + mod3Perc + "%/100%]"+ br)
document.write("Grade: " + mod3Grade + br)
document.write("Module Passed: ["+mod3Pass+"]"+br +br)

let finalPerc = (mod3Perc + mod2Perc + modPerc) / 3;

if(finalPerc >= 60){
    document.write("You have passed the trimester with "+finalPerc+"% out of 100%")
} else {
    document.write("You have failed the trimester with "+finalPerc+"% out of 100%")
}