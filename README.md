# Starting the project

Install lastest LTS Node version which is 20.11.1
Preferably use NVM program to manage node versions
Install yarn globally

## 1. Go in the main folder where package.json file is

## 2. Run `yarn` command which will install all the dependances

## 3. Run `yarn dev` to run the project

## Project should run on `http://localhost:5173/`

# JavaScript Array Practice Problems

Improve your skills with JavaScript array methods such as `map`, `filter`, and `reduce` by solving the following problems:

## 1. Capitalize Names

**Problem**: You have an array of names: `["alice", "bob", "charlie", "david"]`. Use the `map` function to capitalize each name so that they start with a capital letter.

## 2. Filter Even Numbers

**Problem**: Given an array of numbers: `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`, use the `filter` method to create a new array that contains only the even numbers.

## 3. Sum of All Numbers

**Problem**: You have an array of integers: `[5, 10, 15, 20, 25]`. Use the `reduce` method to find the sum of all elements in the array.

## 4. Convert Array of Objects

**Problem**: Given an array of objects representing people with properties for name and age like `[{name: "Alice", age: 25}, {name: "Bob", age: 30}, {name: "Charlie", age: 35}]`, use the `map` function to transform this array into an array of strings formatted like "Name is Age years old", e.g., "Alice is 25 years old".

## 5. Find Maximum Number

**Problem**: Using the `reduce` method, find the maximum number in an array `[45, 78, 22, 89, 94, 53, 33, 12]`.

## 6. Remove Specific Value

**Problem**: You have an array `["apple", "banana", "cherry", "date", "fig", "grape"]`. Use the `filter` function to create a new array that does not include "date".

## 7. Count Specific Items

**Problem**: Count how many times the word "apple" appears in an array `["apple", "banana", "apple", "cherry", "apple"]` using the `reduce` method.

## 8. Multiply Array Values

**Problem**: Use the `map` function to multiply each value in the array `[2, 3, 4, 5, 6]` by 3.

## 9. Filter Objects Based on Property

**Problem**: Given an array of objects `[{id: 1, name: "Alice"}, {id: 2, name: "Bob"}, {id: 3, name: "Charlie"}, {id: 4, name: "David"}]`, use `filter` to retrieve only those objects where the `id` is greater than 2.

## 10. Aggregate Properties

**Problem**: For an array of objects `[{points: 85}, {points: 92}, {points: 88}, {points: 90}]`, use `reduce` to calculate the average score.

# Part Two

## 1. Display a card from the list

**Problem**: Create an react component `cardDisplay.jsx` that will import the `cardData` from `data/data.js` and display the picture of the card.

## 2. Display all cards from the list in a line

**Problem**: Create an react component `allCardDisplay.jsx` that will import the `cardData` from `data/data.js` and display the pictures of all card in a row with some spacing between them.

## 3. Make a page /card/<card code> that will open a page with the specific card

**Problem**: Create an react component `cardCode.jsx` that will import the `cardData` from `data/data.js` and display the pictures of the card that was passed in the url as the cardCode.
You will see inside the data for all card in `data.data.js` each card has a code. Use the code from the URL for example `/card/5S` search for that card in the data and display its picture
