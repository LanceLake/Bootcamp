const button = document.querySelector('btn');

// function to block the stack for x number of milliseconds
const pause = milliSeconds => {
	// get the current time
	var startTime = new Date().getTime(); 
	// block stack until time's up
	setTimeout(() => {
		document.getElementById('submitbutton').removeAttribute('disabled');
	}, milliSeconds);

};

pause(8000);
