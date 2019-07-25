<?php
	// Everything above <main>.
	// Includes: head, global meta, mast, nav, scripts & styles.
	include_once 'before-content.php';

	// Inner HTML of <main>.
	// Includes: document meta, heading, content, footing, & aside.
	include_once 'content-home.php';

	// Everything below </main>
	// Includes: App footer, analytics, etc.
	include_once 'after-content.php';
?>