<style>
.service-button {
  bottom: 10px;
  left: 15px;
  z-index: 10;
}
.a-block {
  display: block;
  position: relative;
  z-index: 1;
  height: 100%;
}
/* .a-block:hover {
  opacity:
} */
.a-block > * {
  position: absolute;
}
.a-block .title {
  z-index: 10;
  width: 100%;
  background-color: rgba(255,255,255,.75);
  margin: 0;
  padding: 10px 15px;
  left: 0;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: .04em;
}
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
		OUR SALON SERVICES
	</h3>
</div>
<div class="row">
  <div class="tab-content col-lg-6 col-md-6">
    <div role="tabpanel" class="tab-pane fade in active" id="hands">
      <a href="/services/" class="a-block embed-responsive embed-responsive-4by3">
        <h5 class="title">
          Services for Hands
        </h5>
        <button class="btn btn-sm service-button btn-primary">
          View Services
        </button>
        <img src="<?php echo $aPATH ?>img/_hands-600x360.jpg" 
          class="img-responsive full-width embed-responsive-item" 
          alt="Services for Hands">
      </a>
    </div>
    <div role="tabpanel" class="tab-pane fade" id="feet">
      <a href="/services/" class="a-block embed-responsive embed-responsive-4by3">
        <h5 class="title">
          Services for Feet
        </h5>
        <button class="btn btn-sm service-button btn-primary">
          View Services
        </button>
        <img src="<?php echo $aPATH ?>img/_feet-600x360.jpg" 
          class="img-responsive full-width embed-responsive-item" 
          alt="Services for Feet">
      </a>
    </div>
    <div role="tabpanel" class="tab-pane fade" id="wax">
      <a href="/services/" class="a-block embed-responsive embed-responsive-4by3">
        <h5 class="title">
          Waxing Services
        </h5>
        <button class="btn btn-sm service-button btn-primary">
          View Services
        </button>
        <img src="<?php echo $aPATH ?>img/_waxing-600x360.jpg" 
          class="img-responsive full-width embed-responsive-item" 
          alt="Waxing Services">
      </a>
    </div>
    <div role="tabpanel" class="tab-pane fade" id="extras">
      <a href="/services/" class="a-block embed-responsive embed-responsive-4by3">
        <h5 class="title">
          Eyes &amp; Extras
        </h5>
        <button class="btn btn-sm service-button btn-primary">
          View Services
        </button>
        <img src="<?php echo $aPATH ?>img/_eyes-extras-600x360.jpg" 
          class="img-responsive full-width embed-responsive-item" 
          alt="Eyes & Extras">
      </a>
    </div>
  </div>

  <!-- Nav tabs -->
  <ul class="nav nav-tabs col-lg-6 col-md-6 media-list nav-pills nav-stacked" role="tablist">
    <li role="presentation" class="active media">
      <div class="media-left">
        <a href="#hands" aria-controls="hands" role="tab" 
          data-toggle="tab" class="tile thumbnail bg-hands">
          <span class="sr-only">Services for Hands<span>
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
        <a href="#feet" aria-controls="feet" role="tab" 
          data-toggle="tab" class="tile thumbnail bg-feet">
          <span class="sr-only">Services for Feet<span>
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
        <a href="#wax" aria-controls="wax" role="tab" 
          data-toggle="tab" class="tile thumbnail bg-wax">
          <span class="sr-only">Waxing Services<span>
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
        <a href="#extras" aria-controls="extras" role="tab" 
          data-toggle="tab" class="tile thumbnail bg-extras">
          <span class="sr-only">Eyes &amp; Extras<span>
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
