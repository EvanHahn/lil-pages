<?PHP
require_once('functions.php');
top('Alphabetizer', 'alpha');
?>

<h1>Alphabetizer</h1>

<textarea id="input"></textarea>
<textarea id="output" disabled></textarea>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script defer src="js/alpha.js"></script>

<?PHP bottom(); ?>
