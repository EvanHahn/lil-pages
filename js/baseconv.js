function changeBase(inputBase, outputBase, inputString) {
	return (parseInt(inputString.replace(/ /g, ''), inputBase) || '').toString(outputBase);
}

$.fn.ready(function() {

	var $decimal = $('#decimal');
	var $binary = $('#binary');
	var $hex = $('#hex');

	$decimal.on('keyup', function() {
		var v = this.value;
		$binary.val(changeBase(10, 2, v));
		$hex.val(changeBase(10, 16, v));
	});

	$binary.on('keyup', function() {
		var v = this.value;
		$decimal.val(changeBase(2, 10, v));
		$hex.val(changeBase(2, 16, v));
	});

	$hex.on('keyup', function() {
		var v = this.value;
		$decimal.val(changeBase(16, 10, v));
		$binary.val(changeBase(16, 2, v));
	});

});
