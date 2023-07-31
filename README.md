# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by Shyamal Ghosh as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @shyamal192168/lotide`

**Require it:**

`const _ = require('@shyamal192168/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `asserArraysEqual`: function 'assertArraysEqual' takes two arrays, array1 and array2, as input and checks if they are equal using a function named eqArrays.
* `asserEqual`: function 'assertEqual', which takes two arguments: actual and expected. The purpose of this function is to compare the actual value with the expected value and print a message to the console indicating whether the assertion passed or failed.
* `assertObjectEqual`: function 'assertObjectsEqual' takes two objects array1 and array2 as input and checks if they are equal. The function is designed to handle nested objects and arrays recursively to compare their contents.
* `average`: function 'average' calculates the average (arithmetic mean) of a given list of numbers. The function takes a single argument list, which is an array of numbers.
* `countLetters`: the function called 'countLetters'taking a string as input and returning object containing the count of each letter in the output string
* `countOnly`: the function 'countOnly' takes two arrays 'allItems' and 'itemsToCount'
* `eqArrays`: 'eqArrays' function compares two arrays for equality 
* `eqObjects`: the function 'eqObjects' checks two objects 'object1' and 'object2' are equal based on their keys and corresponding values
* `findKey`: the function 'findKey' searches for a key in an object based on a provided callback function. The function takes two arguments: an object to search and a callback function that specifies the search condition.
* `findKeyByValue`: the fucntion 'findKeyByValue' takes an object and a value as input and returns the key corresponding to that value in the object.
* `flatten`: the function named flatten that takes an array as input and returns a new array containing all the elements of the input array in a flattened form.
* `head`: the 'head' function takes an array as input, logs the array to the console, and returns the first element of the array.
* `conceptList`: the function 'conceptList' passes in the conceptList array and ", " as arguments. The function is expected to join the elements of the array with the separator ", " and return the resulting string.
* `letterPositions`: the function 'letterPosition' takes a 'sentence' as input and returns an object that maps each unique lowercase letter in the 'sentence' to an array of its positions (indexes) in the 'sentence'
* `whatToDoForLunch`: the function called 'whatToDoForLunch', which takes two parameters: hungry (a boolean value indicating if the person is hungry) and availableTime (a number representing the amount of time available for lunch).
* `map`: The function 'map' takes two parameters: array (an array) and callback (a function).
* `middle`: The function called 'middle' takes an array as input and returns a new array containing the middle element(s) of the input array.
* `min`: The function called 'min' takes an array of numbers as input and returns the smallest value from the array using the built-in Math.min method.
* `reverse`: The 'reverse' function takes the input string and uses the split('') method to convert it into an array of characters. Then, it uses the reverse() method to reverse the order of elements in the array. Finally, the join('') method is used to join the reversed array elements back into a string, which is then returned as the output.
* `sum`: the function named 'sum' is declared using the function expression syntax. It takes two parameters num1 and num2, and returns their sum when called. The num1 and num2 are placeholders for any two numbers that will be provided as arguments when calling this function.
* `tail`: the 'tail' function is declared using the function expression syntax. It takes an array as a parameter. Inside the tail function, the input array is logged to the console using console.log. This will print the original array to the console before further processing.
* `takeUntil`: the function named 'takeUntil' takes an array and a callback function as input. It creates a new array by iterating over the elements of the input array until the callback function returns a truthy value for an element. Once the callback returns true for an element, the takeUntil function stops iterating, and the new array is returned.
* `without`: the function 'without' takes two arrays as input and returns a new array that contains the elements from the first array (array1) excluding the elements present in the second array (arrayExclude).