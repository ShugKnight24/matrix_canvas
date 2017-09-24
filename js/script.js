// Identify canvas and set its context
var canvas = document.getElementById('canvas'),
	context = canvas.getContext('2d');

// Set height and width of the canvas to fill the entire screen
canvas.width = window.innerWidth;
canvas.height = window.innerWidth;

var englishLetters = 'abcdefghijklmnopqrstuvwxyz',
	capitalEnglishLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
	numbers = '0123456789',
	fontSize = '14',
	columns = canvas.width / fontSize,
	fallingText = [];

// converting strings into arrays
englishLetters = englishLetters.split(''),
capitalEnglishLetters = capitalEnglishLetters.split(''),
numbers = numbers.split('');

for (var i = 0; i < columns; i++) {
	// y coordinate of the falling text initially
	fallingText[i] = 1;
}

// concatinating all arrays together
var allFallingValues = englishLetters.concat(capitalEnglishLetters, numbers);

// accounting for screen resizing
window.addEventListener('resize', function(){

	'use strict';

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	draw();

});

function draw() {

	'use strict';

	// fill canvas background - black
	context.fillStyle = 'rgba(0, 0, 0, .05)';
	context.fillRect(0, 0, canvas.width, canvas.height);

	// green color for numbers and letters
	context.fillStyle = '#39FF14';
	context.font = fontSize + 'px arial';

	for (var i = 0; i < fallingText.length; i++) {

		var text = allFallingValues[Math.floor(Math.random() * allFallingValues.length)];

		context.fillText(text, i * fontSize, fallingText[i] * fontSize);

		if (fallingText[i] * fontSize > canvas.height && Math.random() > 0.975) {
			fallingText[i] = Math.floor(Math.random() * 10);
		}

		fallingText[i]++;

	}

}

// speed at which the letters are drawn and "fall"
setInterval(draw, 50);
