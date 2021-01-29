const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

/* State variable */
let currentActive = 1;

/* Progress state */
next.addEventListener('click', () => {

	currentActive++;

	/* Check bounds */
	if (currentActive > circles.length) {
		currentActive = circles.length;
	}

	/* Update visuals */
	update();

});

prev.addEventListener('click', () => {

	currentActive--;

	/* Check bounds */
	if (currentActive < 1) {
		currentActive = 1;
	}

	/* Update visuals */
	update();

});

/* Update colors on button blick */
function update() {

	/* Determine disabled behavior */
	if (currentActive === 1) prev.disabled = true;
	else if (currentActive === 4) next.disabled = true;
	else {
		prev.disabled = false;
		next.disabled = false;
	}

	/* For circles */
	circles.forEach((circle, idx) => {

		console.log(currentActive, idx);

		/* If index (index is zero-based) of circle (currentactive is 1-based) is smaller than current active circle: add active class */
		if (idx < currentActive) {
			circle.classList.add('active');
		}
		/* If index of circle is greater or equal to current active circle: remove active class */
		else {
			circle.classList.remove('active');
		}

	});

	/* Get active items */
	const actives = document.querySelectorAll('.active');

	/* Set line width according to percentage of active elements */
	const linePercentage = (actives.length - 1) / (circles.length - 1) * 100 + '%';
	progress.style.width = linePercentage;

}