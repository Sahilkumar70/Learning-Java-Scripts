// for a given array with marks of students [85,97,44,37,76,60] find average marks of the entire class?
let sum = 0;
let marks = [85,97,44,37,76,60];
for (let val of marks){
    sum += val;
}
let avg = sum/marks.length;
console.log(`avg marks of the class = ${avg}`);