// 1) Where is carNoise stored?
// Global execution context (GEC)
const carNoise = 'Honk';
// 2) Where is goFast stored?
// Global execution context (GEC)
const goFast = speed => {
	// 4) When is speed assigned a value? Where is this value stored?
	// When goFast is invoked, the argument of the function is assigned to the paramater shown in the functional execution context of goFast.

	// 5) Where is makeNoise stored?
	// makeNoise is stored in the function execution context of goFast
	const makeNoise = sound => {
		console.log(`My speed is at ${speed}, time to ${sound}`);
	}

	// 6) What happens in the following statement?
	// makeNoise is placed on the call stack which creates a new function execution.
	makeNoise(carNoise);
}

// 3) What happens in the following statement?
// Puts up an alert asking if you want to go fast. If you click ok, run the function "goFast" and pass in 80. Confirm is a web API and when done, it places goFast on the stack.
if(confirm("Do you want to go fast?")) {
	goFast(80);
}
