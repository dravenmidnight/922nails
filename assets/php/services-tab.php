<style>
.tile {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: block;
  font-size: 80%:
}
.tile.full-size {
  width: 100%;
}
.tile.thumbnail {
  height: 72px;
  width: 90px;
}
.bg-hands {
  background-image: url(<?php echo $aPATH ?>img/_hands-600x360.jpg);
}
.bg-feet {
  background-image: url(<?php echo $aPATH ?>img/_feet-600x360.jpg);
}
.bg-wax {
  background-image: url(<?php echo $aPATH ?>img/_waxing-600x360.jpg);
}
.bg-extras {
  background-image: url(<?php echo $aPATH ?>img/_eyes-extras-600x360.jpg);
}
a.thumbnail.active, a.thumbnail:focus, a.thumbnail:hover {
  border-color: var(--a-gold) !important;
}
li[role=presentation] p {
  margin: 0;
}
</style>

<div class="mb-20 text-center">
	<h3>
		VISIT OUR NAIL SALON
	</h3>
</div>
<div class="row">
  <div class="tab-content col-lg-6 col-md-6">
    <div role="tabpanel" class="tab-pane fade in active" id="hands">
      <a href="/services/">
        <img src="<?php echo $aPATH ?>img/_hands-600x360.jpg" class="img-responsive full-width" alt="Services for your Hands">
      </a>
    </div>
    <div role="tabpanel" class="tab-pane fade" id="feet">
      <a href="/services/">
        <img src="<?php echo $aPATH ?>img/_feet-600x360.jpg" class="img-responsive full-width"
          alt="Services for your Feet">
      </a>
    </div>
    <div role="tabpanel" class="tab-pane fade" id="wax">
      <a href="/services/">
        <img src="<?php echo $aPATH ?>img/_waxing-600x360.jpg" class="img-responsive full-width" alt="Waxing Services">
      </a>
    </div>
    <div role="tabpanel" class="tab-pane fade" id="extras">
      <a href="/services/">
        <img src="<?php echo $aPATH ?>img/_eyes-extras-600x360.jpg" class="img-responsive full-width" alt="Eyelashes & Extras">
      </a>
    </div>
  </div>

  <!-- Nav tabs -->
  <ul class="nav nav-tabs col-lg-6 col-md-6 media-list nav-pills nav-stacked" role="tablist">
    <li role="presentation" class="active media">
      <div class="media-left">
        <a href="#hands" aria-controls="hands" role="tab" data-toggle="tab" class="tile thumbnail bg-hands">
          <!-- <img class="media-object" src="<?php echo $aPATH ?>img/thumbs/c.jpg" alt="Refreshing Manicure services"> -->
        </a>
      </div>
      <div class="media-body">
        <a href="#hands" aria-controls="hands" role="tab" data-toggle="tab">
          <i class="fas fa-bookmark pull-right fa-3x"></i>
          <h4 class="media-heading">
            HANDS 
          </h4>
        </a>
        <p>
          For everyday care, manicure services to keep your nails bright &amp; healthy.
        </p>
      </div>
    </li>
    <li role="presentation" class="media">
      <div class="media-left">
      <a href="#feet" aria-controls="feet" role="tab" data-toggle="tab" class="tile thumbnail bg-feet">
          <!-- <img class="media-object" src="<?php echo $aPATH ?>img/thumbs/a.jpg" 
            alt="Deluxe Pedicure service with massage"> -->
        </a>
      </div>
      <div class="media-body">
        <a href="#feet" aria-controls="feet" role="tab" data-toggle="tab">
          <i class="fas fa-bookmark pull-right fa-3x"></i>
          <h4 class="media-heading">
            FEET
          </h4>
        </a>
        <p>
          Pampered spa pedicure with added leg & foot massage.
        </p>
      </div>
    </li>
    <li role="presentation" class="media">
      <div class="media-left">
        <a href="#wax" aria-controls="wax" role="tab" data-toggle="tab" class="tile thumbnail bg-wax">
          <!-- <img class="media-object" src="<?php echo $aPATH ?>img/thumbs/waxing_service.jpg" 
            alt="Services for all your waxing needs"> -->
        </a>
      </div>
      <div class="media-body">
      <a href="#wax" aria-controls="wax" role="tab" data-toggle="tab">
        <i class="fas fa-bookmark pull-right fa-3x"></i>
        <h4 class="media-heading">
          WAX
        </h4>	
        </a>
        <p>
          Waxing treatments for arms, legs, face, &amp; more. 
        </p>
      </div>
    </li>
    <li role="presentation" class="media">
      <div class="media-left">
      <a href="#extras" aria-controls="extras" role="tab" data-toggle="tab" class="tile thumbnail bg-extras">
          <!-- <img class="media-object" src="<?php echo $aPATH ?>img/thumbs/c.jpg" 
            alt="Manicures for every occasion"> -->
        </a>
      </div>
      <div class="media-body">
        <a href="#extras" aria-controls="extras" role="tab" data-toggle="tab">
          <i class="fas fa-bookmark pull-right fa-3x"></i>
          <h4 class="media-heading">
            EXTRAS
          </h4>
        </a>
        <p>
          Eyelashes &amp; extras to make you feel your beautiful best.
        </p>
      </div>
    </li>
  </ul>
</div>
