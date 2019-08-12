<link rel="dns-prefetch" href="//maps.googleapis.com">
<link rel="dns-prefetch" href="//khms1.googleapis.com">
<div class="container mb-30">
	<div class="row ">
		<div class="col-md-3">
			<h4>
				Phone
			</h4>
			<?php include 'biz-phone.php'; ?>

			<hr>
			<h4>
				Address
			</h4>
			<address itemprop="address" itemscope="" itemtype="http://schema.org/PostalAddress">
				<i class="fa fa-home icon-address"></i> 
				<span class="address" itemprop="streetAddress">
					922 Wilshire Blvd <br />
					Santa Monica, CA 90401
				</span>
			</address>
			<hr>
			<h4>
				Hours
			</h4>
			<ul class="hours-list">
				<li itemprop="openingHours" content="Mon 9:30 am - 7:30 pm">
					<b>Monday:</b> 
					<span>9:30 am - 7:30 pm</span>
				</li>
				<li itemprop="openingHours" content="Tue 9:30 am - 7:30 pm">
					<b>Tueday:</b> 
					<span>Closed</span>
				</li>
				<li itemprop="openingHours" content="Wed 9:30 am - 7:30 pm">
					<b>Wednesday:</b> 
					<span>9:30 am - 7:30 pm</span>
				</li>
				<li itemprop="openingHours" content="Thu 9:30 am - 7:30 pm">
					<b>Thursday:</b> 
					<span>9:30 am - 7:30 pm</span>
				</li>
				<li itemprop="openingHours" content="Fri 9:30 am - 7:30 pm">
					<b>Friday:</b> 
					<span>9:30 am - 7:30 pm</span>
				</li>
				<li itemprop="openingHours" content="Sat 9:00 am - 7:30 pm">
					<b>Saturday:</b> 
					<span>9:00 am - 7:30 pm</span>
				</li>
				<li itemprop="openingHours" content="Sun 9:30 am - 7:00 pm">
					<b>Sunday:</b> 
					<span>9:30 am - 7:00 pm</span>
				</li>
			</ul>
		</div>
		<div class="col-md-9">
			<hr class="hidden-lg hidden-md">
			<h4>Map</h4>
			<div id="map" itemscope itemprop="hasMap" itemtype="http://schema.org/Map">
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.802478657267!2d-118.49503748496006!3d34.023280726703426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a52200665bef%3A0xbf5857eddc40de01!2sNatura+Nail+Spa!5e0!3m2!1sen!2sus!4v1548826705071"
					class="bg-skyblue-gradient"		
					title="map to our location"
					allowfullscreen 
					frameborder="0"
					width="100%" 
					height="450">
				</iframe>
			</div>
		</div>
	</div>
	<hr />
	<div class="text-center">
		<?php include 'appointment-btn.php'; ?>

	</div>
</div>
