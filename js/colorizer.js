window.half = parseInt('ffffff', 16) / 2;

$.fn.ready(function() {
	$('#input').on('keyup', function() {

		var color = $('#input').val();

		// Double every character if we should
		if (color.length == 3) {
			var newColor = '';
			for (var i = 0; i < 3; i ++) {
				newColor += color[i] + color[i];
			}
			color = newColor;
		}

		if (color.length == 6) {

			// Are we dark enough to change the color of the text?
			var textColor = '#000';
			if (parseInt(color, 16) < half)
				textColor = '#fff';

			$('.main').css({
				'background-color': '#' + color,
				'color': textColor
			});

		}

	});
});
