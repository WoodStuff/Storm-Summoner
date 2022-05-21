/*
	helper functions & stuff
*/

function chance(ch) {
	return Math.random() < ch;
}
function randomArray(array) {
	return array[Math.floor(Math.random() * array.length)];
}
function weightedChoose(object) {
	/*
		guide:
		weightedChoose(
			{
				'thing': 2,
				'egg': 5,
				'h': 1,
			}
		)
		this will make it so egg has the biggest chance of getting selected and h has the least chance of getting selected
		an element has a value in sum of values of the object chance of getting selected
		the sum of values is 2+5+1 = 8
		so thing has a 2 in 8 (1 in 4) chance of getting selected (25%), egg has a 5 in 8 chance (62.5%)
		and h has a 1 in 8 chance of getting selected (12.5%)

		how it works: each element of the object gets added to an array the number of times in the number
		then a random value from the array is chosen
	*/

	let array = [];
	for (const value in object) {
		if (Object.hasOwnProperty.call(object, value)) {
			const element = object[value];
			for (let weight = 0; weight < element; weight++) {
				array.push(value);
			}
		}
	}

	return randomArray(array);
}
function convertPos(value, method) {
	const width = canvas.width;
	const height = canvas.height;

	switch (method) {
		case enums.convertPos.xtoperc:
			return value / width;

		case enums.convertPos.xtopixel:
			return value * width;

		case enums.convertPos.ytoperc:
			return value / height;

		case enums.convertPos.ytopixel:
			return value * height;
	
		default:
			break;
	}
}