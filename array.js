// array is a special variable which can hold more one value.
var numbers = [1, 2, 3, 4, 5, 6];

//The length property sets or returns the number of elements in array.
var numLength = numbers.length;
console.log(numLength);

// You access an array element by referring to the index number or get element by index.
var number = numbers[3];
var number = numbers[1];
console.log(number);
console.log(numbers[2]);

// You can also create an array, and then provide the elements. 
// set or changing element in array

numbers[2] = 77;
console.log(numbers);

// find the index of an element
var numberPosition = numbers.indexOf(77);
console.log(numberPosition);

// add element of array in last position
numbers.push(69);
console.log(numbers);
numbers.push(78);
console.log(numbers);

// remove the last elemet of array 
numbers.pop()
console.log(numbers);
numbers.pop()
console.log(numbers);

numbers.pop()
console.log(numbers);
numbers.pop()
console.log(numbers);
numbers.pop()
console.log(numbers);

// remove first element of array
numbers.shift();
console.log(numbers);
numbers.shift();
console.log(numbers);

// add first element of array
numbers.unshift(5);
console.log(numbers);
