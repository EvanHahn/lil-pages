<?PHP

function top($title, $htmlClass='') {
	$pages = array(
		'alpha' => 'Alphabetizer',
		'base_convert' => 'Binary, decimal, hex converter',
		'bitwise_nand' => 'Bitwise nandifier',
		'blackboard' => 'Blackboard bolder',
		'clock' => 'Clock',
		'colorizer' => 'Colorizer',
		'doubler' => 'Character doubler',
		'html_strip' => 'HTML tag stripper',
		'markdown' => 'Markdown dingus',
		'nobr' => 'Line break remover',
		'osc' => 'Oscillator',
		'randoms' => 'Randoms',
		'urlizer' => 'URLizer',
	);
	echo '<!DOCTYPE html>';
	echo "<html class=\"$htmlClass\">";
	echo '<head>';
	echo "<title>$title</title>";
	echo '<meta charset="utf-8">';
	echo '<link rel="stylesheet" type="text/css" href="the.css">';
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
