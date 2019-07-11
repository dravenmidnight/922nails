<?php
	// Everything above <main>.
	// Includes: head, global meta, mast, nav, scripts & styles.
	include 'before-content.php';

	// Inner HTML of <main>.
	// Includes: document meta, heading, content, footing, & aside.
	include 'content-home.php';

	// Everything below </main>
	// Includes: App footer, analytics, etc.
	include 'after-content.php';
?>