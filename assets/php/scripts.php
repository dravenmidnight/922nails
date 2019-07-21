<style>
/* latin */
@font-face {
  font-family: 'Cinzel Decorative';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Cinzel Decorative Regular'), local('CinzelDecorative-Regular'), url(https://fonts.gstatic.com/s/cinzeldecorative/v8/daaCSScvJGqLYhG8nNt8KPPswUAPni7TTMxpazyD.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Raleway'), local('Raleway-Regular'), url(https://fonts.gstatic.com/s/raleway/v13/1Ptug8zYS_SKggPNyCMIT4ttDfCmxA.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Raleway'), local('Raleway-Regular'), url(https://fonts.gstatic.com/s/raleway/v13/1Ptug8zYS_SKggPNyC0IT4ttDfA.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
</style>
<script src="https://kit.fontawesome.com/5815bc3725.js" defer></script>
<script src="<?php echo $aPATH ?>js/vendor-2.js" async defer></script>
<script defer>
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
