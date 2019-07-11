<?php
	// Everything above <main>.
	// Includes: head, global meta, nav & styles.
	include '../assets/php/before-content.php';
?>

<div class="jumbotron">
	<div class="container">
		<h1>Gallery</h1>
	</div>
</div>
<?php 
	include 'gallery-content.php';

	// Everything below </main>
	// Includes: App footer, analytics, etc.
	include '../assets/php/after-content.php';
?>