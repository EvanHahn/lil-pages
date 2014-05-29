<?PHP
require_once('functions.php');
top('HTML tag stripper', 'htmlstrip');
?>

<h1>HTML tag stripper</h1>

<textarea id="input"></textarea>
<textarea id="output" disabled></textarea>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script defer src="js/htmlstrip.js"></script>

<?PHP bottom(); ?>
