<div class="container">
	<div class="col-md-4 mt-20 mb-20">
		<?php include 'footer-nav.php'; ?>

	</div>
	<div class="col-md-4 mt-20 mb-20">
		<div class="biz-hours-block">
			<h4>
				Business Hours
			</h4>
			<div class="biz-hours">
				<span class="week-day">Mon-Fri:</span>
				<span class="open-time">9:30 am</span>
				<span class="close-time">7:30 pm</span>
			</div>
			<div class="biz-hours">
				<span class="week-day">Sat:</span>
				<span class="open-time">9:00 am</span>
				<span class="close-time">7:30 pm</span>
			</div>
			<div class="biz-hours mb-20">
				<span class="week-day">Sun:</span>
				<span class="open-time">9:30 am</span>
				<span class="close-time">7:00 pm</span>
			</div>
			<hr>
			<p>
				<a href="<?php echo $google_reviews_URL ?>" target="_blank"
					rel="noreferrer">
					<img src="<?php echo $aPATH ?>img/_google-review-btn.png" 
						alt="Read our Google reviews." height="64">
				</a>
			</p>
			<hr>
		</div>
	</div>
	<div class="col-md-4 mt-20 mb-20">
		<div class="biz-info">
			<address class="biz-address" itemtype="http://schema.org/PostalAddress"
				itemscope="" 
				itemprop="address">
				<h4>
					Natura Nail Spa
				</h4>
				<span itemprop="streetAddress">922 Wilshire Blvd,</span><br />
				<span itemprop="addressLocality">Santa Monica</span>,
				<span itemprop="addressRegion">CA</span>,
				<span itemprop="postalCode">90401</span>
			</address>
			<hr>
			<style>
			hr {
				width: 20%;
				margin-left: auto;
				margin-right: auto;

				border-top-color: var(--a-gold);
			}
			</style>
			<?php include 'biz-phone.php'; ?>

			<hr>
		</div>
	</div>
</div>

<div class="container">
<?php include 'social.php'; ?>

<style>
	.fs-90 {
		font-size: 90%;
	}
</style>
	<hr class="hidden-lg hidden-md">
	<div class="copyright-info mb-30">
		<p class="fs-90">
			<a href="/">
				© 2018 - 2019 <b>Natura Nail Spa</b>
			</a>
			<i>All Rights Reserved</i>
		</p>
	</div>

	<a class="sr-only" href="https://naturanailspa.com/" 
		title="Santa Monica Nail Salon">
		<h5>Santa Monica Nail Salon</h5>
	</a>
	<a class="sr-only" href="https://naturanailspa.com/" 
		title="Nail Salon Santa Monica">
		<h6>Nail Salon 90401</h6>
	</a>
</div>
