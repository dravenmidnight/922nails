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
				include_once '../assets/php/services-mani-pedi.php'; 
				include_once '../assets/php/services-nails.php'; 
				include_once '../assets/php/services-add-ons.php'; 
			?>

		</div>
		<div class="col-md-6 table-responsive">
			<?php 
				include_once '../assets/php/services-face.php';
				include_once '../assets/php/services-polish.php';
				include_once '../assets/php/services-wax-massage.php'; 
			?>

		</div>
	</div>	
</section>

<?php
	// Everything below </main>
	// Includes: App footer, analytics, etc.
	include_once '../assets/php/after-content.php';
?>