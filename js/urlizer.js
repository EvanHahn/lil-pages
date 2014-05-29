$.fn.ready(function() {
	$('#input').on('keyup', function() {
		var url = $('#input').val();
		if (url) {
			$('#output').attr('href', url).html(url);
		} else {
			$('#output').removeAttr('href').html('');
		}
	});
});
