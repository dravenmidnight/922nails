<?php
	// Everything above <main>.
	// Includes: head, global meta, nav & styles.
	include_once '../assets/php/before-content.php';
?>

<div class="jumbotron">
	<div class="container">
		<h1>Gallery</h1>
	</div>
</div>
<?php 
	include_once 'gallery-content.php';

	// Everything below </main>
	// Includes: App footer, analytics, etc.
	include_once '../assets/php/after-content.php';
?>