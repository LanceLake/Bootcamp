// Exercise 1
const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];

// TODO: Which operator is being used here?
// Answer: A spread.
const newSongs = [...songs];

// TODO: What do you expect to be logged in the console?
// Answer: The array of songs since there is no changes.
console.log(newSongs);

// Exercise 2
const addition = (x, y, z) => {
  const array = [x, y, z];
  // TODO: What does the reduce() method do?
  // Answer: 
  return array.reduce((a, b) => a + b, 0);
};
// TODO: What do you expect to be logged in the console?
// Answer: 6
console.log(addition(1, 2, 3));

// TODO: What is this syntax that is being used as the parameter?
// Answer: Spread
const additionSpread = (...array) => {
  return array.reduce((a, b) => a + b, 0);
};

// TODO: What do you expect to be logged in the console?
// Answer: 6
console.log(additionSpread(1, 2, 3));

// TODO: What do you expect to be logged in the console?
// Answer: 110
console.log(additionSpread(1, 2, 3, 4, 100));
