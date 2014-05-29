<?PHP
require_once('functions.php');
top('Evan Hahn\'s lil\' pages', 'osc');
?>

<h1>Oscillate</h1>

<input id="slider" type="range" min="0" max="4500" value="440">

<div id="output"></div>

<a id="type" href="#"></a>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script defer src="js/osc.js"></script>

<?PHP bottom(); ?>
