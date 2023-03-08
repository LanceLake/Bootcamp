// TODO: Add a comment explaining the role of `export` in this function `boxClick()`
// Answer: This exports the function so that it can be used in the index.js file.

export const boxClick = () => {
  const box = document.getElementById('box');
  if (box.style.backgroundColor === 'blue') {
    box.style.backgroundColor = 'yellow';
  } else {
    box.style.backgroundColor = 'blue';
  }
};
