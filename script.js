const rowOneContainer = document.getElementById('row1');
const rowTwoContainer = document.getElementById('row2');
const rowThreeContainer = document.getElementById('row3');
const rowFourContainer = document.getElementById('row4');

const COLORS = [
	'#f45b69',
	'#CE5D29',
	'#e8c547',
	'#f6e8ea',
	'#89023e',
	'#463239',
	'#5a0001',
	'#ff9505',
	'#f13030',
	'#fff94f',
	'#60d394',
	'#f45b69',
	'#CE5D29',
	'#e8c547',
	'#f6e8ea',
	'#89023e',
	'#463239',
	'#5a0001',
	'#ff9505',
	'#f13030',
	'#fff94f',
	'#60d394'
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
	let counter = array.length;

	// While there are elements in the array
	while (counter > 0) {
		// Pick a random index
		let index = Math.floor(Math.random() * counter);

		// Decrease counter by 1
		counter--;

		// And swap the last element with it
		let temp = array[counter];
		array[counter] = array[index];
		array[index] = temp;
	}

	return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(shuffledColors) {
	for (let i = 0; i < 5; i++) {
		// create a new div
		const cirContainer = document.createElement('div');
		const cirBase = document.createElement('div');
		const cirFront = document.createElement('div');
		const cirBack = document.createElement('div');

		// give it a class attribute for the value we are looping over
		//	newDiv.classList.add(onclosed);
		//	newDiv.classList.add(open);
		cirContainer.classList.add('circontainer');
		cirBase.classList.add('cirbase');
		cirFront.classList.add('cirfront');
		cirBack.classList.add('cirback');

		cirBack.style.backgroundColor = shuffledColors[i];

		// call a function handleCardClick when a div is clicked on
		cirFront.addEventListener('click', handleCardClick);

		// append the div to the element with an id of game
		cirBase.append(cirFront);
		cirBase.append(cirBack);
		cirContainer.append(cirBase);
		rowOneContainer.append(cirContainer);
	}

	for (let i = 5; i < 11; i++) {
		// create a new div
		const cirContainer = document.createElement('div');
		const cirBase = document.createElement('div');
		const cirFront = document.createElement('div');
		const cirBack = document.createElement('div');

		// give it a class attribute for the value we are looping over
		//	newDiv.classList.add(onclosed);
		//	newDiv.classList.add(open);
		cirContainer.classList.add('circontainer');
		cirBase.classList.add('cirbase');
		cirFront.classList.add('cirfront');
		cirBack.classList.add('cirback');

		cirBack.style.backgroundColor = shuffledColors[i];

		// call a function handleCardClick when a div is clicked on
		cirFront.addEventListener('click', handleCardClick);

		// append the div to the element with an id of game
		cirBase.append(cirFront);
		cirBase.append(cirBack);
		cirContainer.append(cirBase);
		rowTwoContainer.append(cirContainer);
	}

	for (let i = 11; i < 16; i++) {
		// create a new div
		const cirContainer = document.createElement('div');
		const cirBase = document.createElement('div');
		const cirFront = document.createElement('div');
		const cirBack = document.createElement('div');

		// give it a class attribute for the value we are looping over

		cirContainer.classList.add('circontainer');
		cirBase.classList.add('cirbase');
		cirFront.classList.add('cirfront');
		cirBack.classList.add('cirback');

		cirBack.style.backgroundColor = shuffledColors[i];

		// call a function handleCardClick when a div is clicked on
		cirFront.addEventListener('click', handleCardClick);

		// append the div to the element with an id of game
		cirBase.append(cirFront);
		cirBase.append(cirBack);
		cirContainer.append(cirBase);
		rowThreeContainer.append(cirContainer);
	}

	for (let i = 16; i < 22; i++) {
		// create a new div
		const cirContainer = document.createElement('div');
		const cirBase = document.createElement('div');
		const cirFront = document.createElement('div');
		const cirBack = document.createElement('div');

		// give it a class attribute for the value we are looping over
		//	newDiv.classList.add(onclosed);
		//	newDiv.classList.add(open);
		cirContainer.classList.add('circontainer');
		cirBase.classList.add('cirbase');
		cirFront.classList.add('cirfront');
		cirBack.classList.add('cirback');

		cirBack.style.backgroundColor = shuffledColors[i];

		// call a function handleCardClick when a div is clicked on
		cirFront.addEventListener('click', handleCardClick);

		// append the div to the element with an id of game
		cirBase.append(cirFront);
		cirBase.append(cirBack);
		cirContainer.append(cirBase);
		rowFourContainer.append(cirContainer);
	}
}

let oneOpenCircle;
var openColorOne;
var openColorTwo;

// TODO: Implement this function!
function handleCardClick(event) {
	// you can use event.target to see which element was clicked
	//rotate target

	let allOpenCircles = document.querySelectorAll('.circlicked');

	// if there is no open circle
	if (allOpenCircles.length === 0) {
		event.target.parentElement.classList.add('circlicked');
		openColorOne = event.target.nextElementSibling.style.backgroundColor;
		oneOpenCircle = event.target;
	} else if (allOpenCircles.length === 1) {
		// if there is already an open circle
		event.target.parentElement.classList.add('circlicked');

		if (openColorOne === undefined) {
			openColorOne = event.target.nextElementSibling.style.backgroundColor;
		} else {
			openColorTwo = event.target.nextElementSibling.style.backgroundColor;
		}

		if (openColorTwo !== openColorOne) {
			var timeOutIdTwo = setTimeout(function() {
				event.target.parentElement.classList.remove('circlicked');
				oneOpenCircle.parentElement.classList.remove('circlicked');
				openColorTwo = undefined;
				openColorOne = undefined;
			}, 2000);
		}

		if (openColorOne === openColorTwo) {
			//leave open

			oneOpenCircle.parentElement.classList.remove('circlicked');
			oneOpenCircle.parentElement.classList.add('circompleted');
			event.target.parentElement.classList.add('circompleted');
			event.target.parentElement.classList.remove('circlicked');
			openColorOne = undefined;
			openColorTwo = undefined;
			let allCompletedCircles = document.querySelectorAll('.circompleted');

			if (allCompletedCircles.length === 22) {
				setTimeout(function() {
					for (let sub of allCompletedCircles) {
						sub.classList.remove('circompleted');
					}
				}, 3000);
			}
		}
	}
}

// when the DOM loads
createDivsForColors(shuffledColors);
