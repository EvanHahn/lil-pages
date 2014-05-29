function double(str) {
	var result = '';
	var bang = '!'.charCodeAt(0);
	var c;
	for (var i = 0; i < str.length; i ++) {
	  c = str[i];
	  if (c != ' ')
	  	result += String.fromCharCode(c.charCodeAt(0) - bang + 65281);
	  else
	  	result += String.fromCharCode(parseInt('FFA0', 16));
	}
	return result;
}

$.fn.ready(function() {
	$('#input').on('keyup', function() {
		var result = double($('#input').val());
		$('#output').val(result);
	});
});
