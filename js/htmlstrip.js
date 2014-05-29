$.fn.ready(function() {
	$('#input').on('keyup', function() {
		var result = $('#input').val().replace(/<[^>]*>/g, '');
		$('#output').val(result);
	});
});
