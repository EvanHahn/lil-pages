<?PHP
require_once('functions.php');
top('Base converter', 'baseconv');
?>

<h1>Binary, decimal, hex converter</h1>

<div class="el">
	<label for="decimal">Decimal</label><input id="decimal">
</div>
<div class="el">
	<label for="binary">Binary</label><input id="binary">
</div>
<div class="el">
	<label for="hex">Hex</label><input id="hex">
</div>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script defer src="js/baseconv.js"></script>

<?PHP bottom(); ?>
