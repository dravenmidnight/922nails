<script src="<?php echo $aPATH ?>js/vendor-2.js"></script>
<script>
$(document).ready(function() {
	var groups = {};
	$('.gallery-item').each(function() {
			var id = parseInt($(this).attr('data-group'), 10);
			if (!groups[id]) {
					groups[id] = [];
			}
			groups[id].push(this);
	});

	$.each(groups, function() {
		$(this).magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			closeBtnInside: false,
			gallery: { enabled:true }
		})
	});
});
</script>
<?php 
	// GOOGLE ANALYTICS
	// include 'ga.php';
?>
