<?PHP

function top($title, $htmlClass='') {
	$pages = array(
		'alpha' => 'Alphabetizer',
		'clock' => 'Clock',
		'markdown' => 'Markdown dingus',
		'colorizer' => 'Colorizer',
		'urlizer' => 'URLizer',
		'nobr' => 'Line break remover',
		'html_strip' => 'HTML tag stripper',
		'doubler' => 'Character doubler',
		'blackboard' => 'Blackboard bolder',
		'base_convert' => 'Binary, decimal, hex converter',
		'bitwise_nand' => 'Bitwise nandifier',
		'osc' => 'Oscillator',
	);
	echo '<!DOCTYPE html>';
	echo "<html class=\"$htmlClass\">";
	echo '<head>';
	echo "<title>$title</title>";
	echo '<link rel="stylesheet" type="text/css" href="the.css">';
	echo '<meta charset="utf-8">';
	echo '</head>';
	echo '<body>';
	echo '<ul class="sidebar">';
  echo '<h1><a href="http://evanhahn.com/">Evan Hahn\'s</a> lil\' pages</h1>';
	foreach($pages as $url => $title) {
		echo "<li><a href=\"$url.php\">$title</a>";
	}
	echo '</ul>';
  echo '<div class="main">';
}

function bottom() {
	echo '</div></body></html>';
}

?>
