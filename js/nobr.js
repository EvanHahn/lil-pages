$.fn.ready(function() {
	$('#input').on('keyup', function() {
		var result = $('#input').val().replace(/\n|\r/g, ' ').replace(/  /g, ' ');
		$('#output').val(result);
	});
});
