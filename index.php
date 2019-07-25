<?php
	// Everything above <main>.
	// Includes: head, global meta, nav & styles.
	include_once 'assets/php/before-content.php';

	// Inner HTML of <main>.
	// Includes: document meta, heading, content, footing, aside.
	include_once 'assets/php/content-home.php';

	// Everything below </main>
	// Includes: App footer, scripts, analytics, etc.
	include_once 'assets/php/after-content.php';
?>