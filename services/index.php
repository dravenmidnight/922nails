<?php
	// Everything above <main>.
	// Includes: head, global meta, nav & styles.
	include_once '../assets/php/before-content.php';
?>

<div class="jumbotron">
	<div class="container">
		<h1>Services</h1>
	</div>
</div>

<section class="container">
	<div class="row">
		<div class="col-md-6 table-responsive">
			<?php 
				include_once '../assets/php/services-hands.php'; 
				include_once '../assets/php/services-acrylics.php';			
				include_once '../assets/php/services-wax.php';
			?>

		</div>
		<div class="col-md-6 table-responsive">
			<?php 
				include_once '../assets/php/services-feet.php';
				include_once '../assets/php/services-extras.php'; 
			?>

		</div>
	</div>	
</section>

<?php
	// Everything below </main>
	// Includes: App footer, analytics, etc.
	include_once '../assets/php/after-content.php';
?>