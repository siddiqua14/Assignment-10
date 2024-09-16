// 1. Function to calculate the difference between two numbers
function calculateDifference(num1, num2) {
    return num1 - num2;
}

// 2. Function to check if a number is odd
function isOdd(num) {
    return num % 2 !== 0;
}

// 3. Function to find the minimum number in an array
function findMin(numbers) {
    return Math.min(...numbers);
}

// 4. Function to filter out even numbers from an array
function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}

// 5. Function to sort an array in descending order
function sortArrayDescending(numbers) {
    return numbers.sort((a, b) => b - a);
}

// 6. Function to lowercase the first letter of a string
function lowercaseFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

// 7. Function to count the number of vowels in a string
function countVowels(str) {
    let vowel = 'aeiouAEIOU';
    return Array.from(str).filter(char => vowel.includes(char)).length;
}

// 8. Function to find the average of numbers in an array
function findAverage(numbers) {
    let sum = numbers.reduce((total, num) => total + num, 0);
    return sum / numbers.length;
}

// Function calls with predefined arguments

// 1. Calculate Difference
let difference = calculateDifference(18, 15);
console.log("1. Difference: ", difference);  

// 2. Check if Odd
let oddCheck = isOdd(7);
console.log("2. Is Odd: ", oddCheck);  

// 3. Find Minimum
let minNumber = findMin([5, 3, 9, 1, 4]);
console.log("3. Minimum number: ", minNumber);  

// 4. Filter Even Numbers
let evenNumbers = filterEvenNumbers([5, 6, 7, 8, 9, 10, 2]);
console.log("4. Even numbers: ", evenNumbers);  

// 5. Sort Array in Descending Order
let sortedArray = sortArrayDescending([1, 7, 5, 3, 9, 2]);
console.log("5. Sorted in descending order: ", sortedArray);

// 6. Lowercase First Letter of a String
let lowercaseString = lowercaseFirstLetter("Sumaiya");
console.log("6. Lowercased first letter: ", lowercaseString);

// 7. Count Vowels in a String
let vowelCount = countVowels("ostadMERN");
console.log("7. Number of vowels: ", vowelCount); 

// 8. Find Average
let average = findAverage([10, 25, 45, 80]);
console.log("8. Average: ", average);
