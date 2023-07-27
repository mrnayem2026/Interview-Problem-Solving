/* 
=========== PROBLEM 1 =============
Create a function that takes a string as input and returns 
the reversed version of the string without using the built-in reverse() method. 
*/

const reverseString = (inputString) => {
  let reversedString = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString.charAt(i);
  }
  return reversedString;
};

/* 
=========== PROBLEM 2 =============
Create a function that takes an array of numbers as input and
returns the sum of all positive numbers in the array.
*/

const sumPositiveNumbers = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
};

/* 
=========== PROBLEM 3 =============
 Write a JavaScript program to find the most frequent element in an array and return it. 
*/

const findMostFrequentElement = (arr) => {
  const frequencyCounter = {};
  arr.forEach((element) => {
    frequencyCounter[element] = (frequencyCounter[element] || 0) + 1;
  });

  let mostFrequentElement;
  let maxFrequency = 0;

  for (const element in frequencyCounter) {
    if (frequencyCounter[element] > maxFrequency) {
      maxFrequency = frequencyCounter[element];
      mostFrequentElement = element;
    }
  }

  return mostFrequentElement;
};

/* 
=========== PROBLEM 4 =============
Create a function that takes a sorted array of numbers and a target value as input. 
The function should find two numbers in the array that add up to the target value. 
Return an array containing the indices of the two numbers. 
*/

const findTwoNumbersSumToTarget = (sortedArr, target) => {
  let left = 0;
  let right = sortedArr.length - 1;

  while (left < right) {
    const sum = sortedArr[left] + sortedArr[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return null;
};

/* 
=========== PROBLEM 5 =============
 Implement a simple JavaScript calculator. The calculator
 should take two numbers and an operator (+, -, *, /) as 
 input and return the result of the operation.
*/

const calculator = (num1, operator, num2) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        return "Error: Cannot divide by zero.";
      }
    default:
      return "Error: Invalid operator.";
  }
};

/* 
=========== PROBLEM 6 =============
Create a program that generates a random password of a specified length. 
The password should include a mix of uppercase letters, 
lowercase letters, numbers, and special characters.
*/

const generateRandomPassword = (length) => {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()_-+=<>?/[]{}";

  const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
};

/* 
=========== PROBLEM 7 =============
Implement a function that converts a Roman numeral to an integer. 
The function should take a Roman numeral string (e.g., "IX" or "XXI") as 
input and return the corresponding integer value.
*/

const romanToInteger = (romanNumeral) => {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  let prevValue = 0;

  for (let i = romanNumeral.length - 1; i >= 0; i--) {
    const currentChar = romanNumeral[i];
    const currentValue = romanMap[currentChar];

    if (currentValue < prevValue) {
      result -= currentValue;
    } else {
      result += currentValue;
    }

    prevValue = currentValue;
  }

  return result;
};

/* 
=========== PROBLEM 8 =============
 Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
*/

const findSecondSmallest = (arr) => {
  if (arr.length < 2) {
    return "Error: Array should have at least two elements.";
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
      secondSmallest = arr[i];
    }
  }

  if (secondSmallest === Infinity) {
    return "Error: All elements in the array are the same.";
  }

  return secondSmallest;
};
