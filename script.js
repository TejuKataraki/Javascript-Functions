'use strict';
//1.Given a and b, your function should return the value of ab

console.log(Math.pow(2, 3));

//2.Given length of a regular hexagon, your function should return area of the hexagon.

// function hexagonArea(s) 
// { 
//     return ((3 * Math.sqrt(3) * 
//             (s * s)) / 2);     
// } 
  
    // let s = 10; 
    // document.write("Area : "
    //     + hexagonArea(s)); 


//3.Given a sentence, your functions should return the number of words in the sentence.

const str = "your long string with many words";
const wordCount = str.match(/(\w+)/g).length;
alert(wordCount);
console.log(wordCount);

//4.Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.

console.log(Math.min(3,5));

console.log(Math.min(3, 5, 9, 1));

//5.Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.

console.log(Math.max(3,5));

console.log(Math.max(3,5,9,1));

//6.Given three angles of a triange, your function should return if it is a scalen, isosceles, equilateral triangle or not a triangle at all.




//7.Given an array, your function should return the length of the array.
const xyz = [1,5,3,7,8];

console.log(xyz.length);

//8.Given an array and an item, your function should return the index at which the item is present.

const Array = [1,2,3,4,5];
console.log(Array.indexOf(2));

//9.Given an array and two numbers, your function should replace all entries of first number in an array with the second number.

let givenArray = [1, 2, 3, 4, 5];

console.log("givenArray: ", givenArray);

givenArray[2] = -1;

console.log("After: ", givenArray);

//10.Given two arrays, your function should return single merged array.

const array1 = [1,3,5];
const array2 = [2,4,6];

console.log(array1.concat(array2));

//11.Given a string and an index, your function should return the character present at that index in the string.

const string = "skillsafari";
console.log( string[4] );

//12.Given two dates, your function should return which one comes before the other.

function dateCompare(d1, d2){
    const date1 = new Date(d1);
    const date2 = new Date(d2);

    if(date1 > date2){
        console.log(`${d1}comes before${d2}`)
    } else if(date1 < date2){
        console.log(`${d2}comes before${d1}`)
    } else{
        console.log(`Both dates are equal`)
    }
}

dateCompare("6/11/2020", "7/8/2019")
dateCompare("01/01/2021", "01/01/2021")