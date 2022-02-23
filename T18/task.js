let br = "<br>"

// Calc factorial of 1 to 10 numbers add elements to 2D array

// EX 5 (find factorial of a number)

let matrix = [];
let result;
for(i = 1; i <= 10; i++){
    var input = window.prompt("Find factorial of ");
    document.write("The factorial of "+input+"<br>")

    arrFactorial = [];
    for(x = input; x > 0; x --){
        arrFactorial.push(x);
    }
    result = arrFactorial.join(" * ")
    document.write("is equal to " + eval(result) + br +br +br) 
    // takes input, decrements in number and multiplies them all to find the factorial
    // eg. input = 3, arrFactorial will look like this [3,2,1] into [3*2*1] and finally into
    // final results as 6 by using eval(result)
    entry = parseInt(input)
    matrix.push([entry, eval(result)]) // it won't add the input lol
}


console.table(matrix)