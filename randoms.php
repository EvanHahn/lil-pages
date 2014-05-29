<?PHP
require_once('functions.php');
top('Randoms', 'randoms');
?>

<h1>Randoms</h1>

<div id="number"></div>

<div id="password"></div>

<div id="button-container">
	<button id="reset">Again</button>
</div>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script async src="js/randoms.js"></script>

<?PHP bottom(); ?>
