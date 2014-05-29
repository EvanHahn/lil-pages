<?PHP
require_once('functions.php');
top('Character doubler', 'doubler');
?>

<h1>Character doubler</h1>

<textarea id="input"></textarea>
<textarea id="output" disabled></textarea>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script defer src="js/doubler.js"></script>

<?PHP bottom(); ?>
