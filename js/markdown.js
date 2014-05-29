window.md = new Showdown.converter();

$.fn.ready(function() {
	$('#input').on('keyup', function() {
		var html = md.makeHtml($('#input').val()),
		    safe = html.replace(/</g, '&lt;').replace(/>/g, '&gt;');
		$('#real-output').html(html);
		$('#code-output').html(safe);
	});
});
