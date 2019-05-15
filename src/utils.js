function zipWith(arr1, arr2, f) {
	return arr1.map((val, idx) => f(val, arr2[idx]));
}

function sum(arr) {
	return arr.reduce((acc, val) => acc + val);
}

function getAverage(arr) {
	return sum(arr) / arr.length;
}

function toPercent(score) {
	return (score * 100).toFixed(2);
}

export { zipWith, sum, getAverage, toPercent };
