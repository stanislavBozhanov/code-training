//For each task in the README.md file do the following:

//1. Create a new function that solves the task inside PartOne component.

//2. Execute the function when the component renders and save the result in the component state.

//3. Display the result in the component's JSX (use json stringify method).

import { useState, useEffect } from "react";

function PartOne() {
  const task1Data = ['alice', 'bob', 'charlie', 'david'];
  const task2Data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const task3Data = [5, 10, 15, 20, 25];
  const task4Data = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
  ];
  const task5Data = [45, 78, 22, 89, 94, 53, 33, 12];
  const task6Data = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape'];
  const task7Data = ['apple', 'banana', 'apple', 'cherry', 'apple'];
  const task8Data = [2, 3, 4, 5, 6];
  const task9Data = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
  ];
  const task10Data = [{ points: 85 }, { points: 92 }, { points: 88 }, { points: 90 }];

  const [result1, setResult1] = useState (task1Data);
  const [result2, setResult2] = useState (task2Data);
  const [sumOfNumbers, setSumOfNumbers] = useState (0);
  const [peopleArr, setPeopleArr] = useState ([]);
  const [maxNumber, setMaxNumber] = useState(0);
  const [fruitsArray, setFruitsArray] = useState(task6Data);
  const [countApples, setCountApples] = useState(0);
  const [multiValue, setMultiValue] = useState(task8Data);
  const [filteredObjects, setFilteredObjects] = useState(task9Data);
  const [averageScore, setAverageScore] = useState(0);

  const capitalizeFirstLetterName = () => {
    setResult1(result1.map(name => name[0].toUpperCase() + name.substring(1)))
  };

  const filterEvenNumber = () => {
    setResult2(result2.filter(number => number%2 == 0))
  };

  const sumOfAllNumbers = () => {
    setSumOfNumbers(task3Data.reduce((acc, currValue) => acc + currValue))
  };

  const convertArray = () => {
    let arr = task4Data.map((person) => `${person.name} is ${person.age} years old.`)
    setPeopleArr (arr);
  };

  const findMaxNumber = () => {
    setMaxNumber(
        task5Data.reduce((max, current) => {
          return max > current ? max : current;
      }, task5Data[0])
    );
  };

  const filterArray = () => {
    const fruits = fruitsArray.filter(fruit => fruit !== 'date')
    setFruitsArray(fruits);
  };

  const countWordApple = () => {
    setCountApples(task7Data.reduce((count, word) => {
      if(word === 'apple') { 
        return count + 1;
      } else
       return count;
    }, 0))
  };

  const multiValueHandler = () => {
    setMultiValue(multiValue.map(value => value*3));
  };

  const filterObjectsHandler = () => {
    setFilteredObjects(filteredObjects.filter(object => object.id > 2));
  };

  const averageScoreHandler = () => {
    const totalScore = task10Data.reduce((total, score) => {
      return total + score.points;
    }, 0);

    const averageSum = totalScore / task10Data.length
    setAverageScore(averageSum);
  };

  useEffect(() => {
    capitalizeFirstLetterName ();
    filterEvenNumber();
    sumOfAllNumbers();
    convertArray();
    findMaxNumber();
    filterArray();
    countWordApple();
    multiValueHandler();
    filterObjectsHandler();
    averageScoreHandler();
  },[]);

  return (
    <div>
      <h1>Part One</h1>
      <p>Part One content</p>
      <ul>
        <li>Task 1 output: {result1.map(result => <span key={result}>{result} </span>)}</li>
        <li>Task 2 output: {result2.map(result => <span key={result}>{result} </span>)}</li>
        <li>Task 3 output: {sumOfNumbers}</li>
        <li>Task 4 output: {peopleArr.map(person => <span>{person} </span>)}</li>
        <li>Task 5 output: {maxNumber}</li>
        <li>Task 6 output: {fruitsArray.map(fruit => <span>{fruit} </span>)}</li>
        <li>Task 7 output: {countApples}</li>
        <li>Task 8 output: {multiValue.map(value => <span key={value}>{value} </span>)}</li>
        <li>Task 9 output: {filteredObjects.map(obj => <span key={obj.id}>{JSON.stringify(obj)} </span>)}</li>
        <li>Task 10 output: {averageScore}</li>
      </ul>
    </div>
  );
}

export default PartOne;
