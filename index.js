//QUESTION ONE 
function string1 (arr){
    const str = arr.map (string2=>string2.length);
    return str
};
console.log(string1(["Ameer","Rema"]));

//QUESTION TWO
function evenNumbers(values){
    const nums = values.filter(num => num%2===0);
    return nums
};
console.log(evenNumbers([10,5,6,3,4]));

//QUESTION THREE
function highScores(students){
    return students.filter(student => student.grade>75);
}
console.log(highScores([{name:"Ameer",grade:85},{name:"Judy",grade:50},{name:"Lucy",grade:20}]));


//QUESTION FOUR
function squared(arr2){
    const arr3 = arr2.map(arr4=>arr4*arr4)
    return arr3
};
console.log(squared([4]));

//QUESTION FIVE
function arr5(mixedDataTypes){
let cleanedArr = mixedDataTypes.filter(item => typeof(item)==="string");
return cleanedArr.map(strElements => strElements.toUpperCase());
}
console.log(arr5(["Ameer",26,false,"Rema"]));
