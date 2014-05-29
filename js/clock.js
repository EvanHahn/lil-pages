$(document).ready(function() {

	var canvas = document.createElement('canvas');
	canvas.width = canvas.height = 16;
	var context = canvas.getContext('2d');

	var $title = $('title');
	var $output = $('#output');

	var appendPeriod = false;

	function updateClock() {

		var now = new Date;

		var hours = (now.getHours() % 12);
		if (hours == 0) {
			hours = 12;
		}

		var minutes = now.getMinutes();
		if (minutes < 10) {
			minutes = '0' + minutes;
		}

		var period = '';
		if (appendPeriod) {
			if (now.getHours() >= 12)
				period = 'pm';
			else
				period = 'am';
		}

		var time = hours + ':' + minutes + period;
		$title.html(time);
		$output.html(time);

		updateFavicon();

	};

	function updateFavicon() {

		var now = new Date;
		var hours = now.getHours() % 12;
		var minutes = now.getMinutes();
		var seconds = now.getSeconds();

		var hoursAngle = (hours - 3) * 2 * Math.PI / 12;
		var minutesAngle = (minutes - 15) * 2 * Math.PI / 60;
		var secondsAngle = (seconds - 15) * 2 * Math.PI / 60;

		context.clearRect(0, 0, 16, 16);

		// clock outline
		context.beginPath();
		context.strokeStyle = '#000000';
		context.fillStyle = '#ffffff';
		context.lineWidth = 1.8;
		context.arc(8, 8, 7, 0, Math.PI * 2);
		context.fill();
		context.stroke();

		// second hand
		context.beginPath();
		context.strokeStyle = '#ff0000';
		context.lineWidth = .5;
		context.moveTo(8, 8);
		context.lineTo(Math.cos(secondsAngle) * 8 + 8, Math.sin(secondsAngle) * 8 + 8);
		context.stroke();

		// hour hand
		context.beginPath();
		context.strokeStyle = '#000000';
		context.lineWidth = 2;
		context.moveTo(8, 8);
		context.lineTo(Math.cos(hoursAngle) * 8 + 8, Math.sin(hoursAngle) * 8 + 8);
		context.stroke();

		// minute hand
		context.beginPath();
		context.lineWidth = .5;
		context.moveTo(8, 8);
		context.lineTo(Math.cos(minutesAngle) * 8 + 8, Math.sin(minutesAngle) * 8 + 8);
		context.stroke();

		// send it to the favicon!
		canvasToFavicon(canvas);

	}

	setInterval(updateClock, 1000);
	updateClock();

	$output.on('click', function() {
		appendPeriod = !appendPeriod;
		updateClock();
	});

});
