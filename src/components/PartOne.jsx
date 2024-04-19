//For each task in the README.md file do the following:

//1. Create a new function that solves the task inside PartOne component.

//2. Execute the function when the component renders and save the result in the component state.

//3. Display the result in the component's JSX (use json stringify method).

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

  return (
    <div>
      <h1>Part One</h1>
      <p>Part One content</p>
      <ul>
        <li>Task 1 output: </li>
        <li>Task 2 output: </li>
        <li>Task 3 output: </li>
        <li>Task 4 output: </li>
        <li>Task 5 output: </li>
        <li>Task 6 output: </li>
        <li>Task 7 output: </li>
        <li>Task 8 output: </li>
        <li>Task 9 output: </li>
        <li>Task 10 output: </li>
      </ul>
    </div>
  );
}

export default PartOne;
