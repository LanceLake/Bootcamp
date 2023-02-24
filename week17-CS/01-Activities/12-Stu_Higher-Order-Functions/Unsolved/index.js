const grades = [56, 78, 99, 85];

// TODO: Complete the 'findAverage' function below.
function findAverage(runningTotal, currentValue, index, array) {
	if(index === array.length -1)
		{
			return (runningTotal + currentValue) / array.length;
		}
	return runningTotal + currentValue;
}

// TODO: Pass the 'findAverage' into the reduce method.
let gradeAverage = grades.reduce(findAverage);

console.log(gradeAverage);
