let br = "<br>"

/* 
Nested for loop with no initialization
*/

var i = 0;
for (;i < 5; i++){
    console.log(i)
    // OUTPUT 0,1,2,3,4
}


console.log("-------------------")

/* 
Nested for loop with no condition
*/

var i = 0;
for (var i = 0; ; i++){
    console.log(i)
    if(i == 5){
        break
    }
    // OUTPUT 0,1,2,3,4, 5 (without break it'll go on forever)
}

/* Nested for loop with no init, condi or iter */
console.log("-------------------")

var i = 0;

for(;;){
    console.log(i)
    if(i==5){
        break
    }
    i++;
}

// output: 0,1,2,3,4,5 



