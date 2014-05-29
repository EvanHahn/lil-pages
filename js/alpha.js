$.fn.ready(function() {
	$('#input').on('keyup', function() {
		var lines = $('#input').val().split('\n').sort();
		$('#output').val(lines.join('\n'));
	});
});
