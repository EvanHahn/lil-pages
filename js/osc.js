window.AudioContext = window.AudioContext || window.webkitAudioContext;

$(document).ready(function() {

	var TYPE_NAMES = [
		'sine',
		'square',
		'sawtooth',
		'triangle'
	];

	var $output = $('#output');
	var $slider = $('#slider');
	var $type = $('#type');

	var supported = !!window.AudioContext;
	if (!supported) {
		$slider.hide();
		$output.text('Not supported in your browser.');
		return;
	}

	function updateOutput() {
		$output.text($slider.val() + ' Hz');
	}

	function updateType() {
		console.log(TYPE_NAMES[oscillator.type])
		$type.text(TYPE_NAMES[oscillator.type]);
	}

	var context = new AudioContext;
	var oscillator = context.createOscillator();
	oscillator.type = 0;
	oscillator.started = false;
	oscillator.connect(context.destination);

	$slider.on('change', function() {
		var freq = parseInt($slider.val());
		if (!oscillator.started) {
			oscillator.noteOn(0);
			oscillator.started = true;
		}
		oscillator.frequency.value = freq;
		updateOutput();
	});

	$type.on('click', function(evt) {
		evt.preventDefault();
		oscillator.type = (oscillator.type + 1) % 4;
		updateType();
	});

	updateOutput();
	updateType();

});
