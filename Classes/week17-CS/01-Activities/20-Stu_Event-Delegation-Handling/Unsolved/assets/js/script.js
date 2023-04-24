const buttons = document.getElementsByTagName('button');

const clickHandler = function () {
	// TODO: Add a comment describing the purpose of this variable.
	// Answer: Initializes count as a variable within the scope of this function and set it to 0 initially.
	let count = 0;

	// TODO: Add a comment describing what is happening. 
	// Answer: Returns an inner function that creates closure.
	return function () {

		// TODO: Add a comment describing how this variable is being scoped. 
		// Answer: Increase local scope by 1.
		count++;
		// TODO: Add a comment describing how we are using the 'count' variable.
		// Answer: Set the text on the button to "Clicks: (Number of clicks)".
		this.textContent = `Clicks: ${count}`;
	};
};

// TODO: Add a comment describing the purpose of this loop.
// Answer: Attaches an event handler to the buttons.
for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', clickHandler());
}
