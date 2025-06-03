// Normal numbers ar moddhe theke max number ber kora
const maxNumber = Math.max(12, 45, 23, 75);
console.log(maxNumber);


// Array theke max number ber kora

const numbers = [ 32, 45, 67, 97, 27];
const arrayMax = Math.max(...numbers);
console.log(arrayMax);



//Use spreed operator to copy
const nums = [2, 4 ,5, 7, 34, 86];
const num2 = nums;
const num3 = [...num2];
num3.push(100);
console.log(nums);
console.log(num2);
console.log(num3);