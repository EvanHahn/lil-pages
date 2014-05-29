<?PHP
require_once('functions.php');
top('Markdown dingus', 'markdown');
?>

<h1>Markdown dingus</h1>

<textarea id="input"></textarea>
<textarea id="code-output" disabled></textarea>
<div id="real-output"></div>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="js/showdown.js"></script>
<script defer src="js/markdown.js"></script>

<?PHP bottom(); ?>
