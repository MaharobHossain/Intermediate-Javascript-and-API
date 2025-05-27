
const difference = ( x, y ) => x - y;
const multiply = (frist, second, third) => frist * second * third;

// singel parameter or one parameter
const getAge =(person) => person.age;
const student = {name: 'ananta', age: 45}
const age = getAge(student);
console.log(age); 


const getThird = numbers => numbers[2];
const third = getThird([5,6,74,8,9,34,65]);
console.log(third);

// no parameter
const getPI = () => Math.PI
console.log(getPI());