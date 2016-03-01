
<div class="availiability container">

	<div class="col-xs-12 col-md-8">
		<div id='calendar'></div>
		<button id="scheduleBtn" type="button" class="btn btn--small pull-right"> Create </button>
	</div>

	<div class="col-xs-12 col-md-4 explanation-box">
		<div class="explanation-box-wrap">
			<h2> Schedule your availability! </h2>
			<p> Here you can create different price for your place. </p>
			<p> By default, your place will always be available for <b>{{price}} {{currency}}</b> a day .</p>
			<hr>

			<ul class="list-unstyled">
				<li><span class="cal-beige-icon"></span> select a day or period of time to create your event </li>
				<li><span class="edit-icon"></span> resize or click on your event to edit it </li>
				<li><span> x7 </span> select a period of time above 7 days to set weekly price </li>
			</ul>
		</div>
	</div>

	<div class="col-xs-12 col-md-4 booking-box is-hidden">
		<div class="booking-box-wrap">

			<ul class="list-unstyled tab-wrap">
				<li class="tab-base tab-base--active col-xs-6"><a> available</a></li>
				<li class="tab-base col-xs-6"><a> blocked </a></li>
			</ul>
			<div class="clear"></div>

			<section class="avilable-section">
				<div class="booking-box__price">
					<div class="col-xs-2">
						<p class="booking-box__label no-padding"> price </p>
					</div>
					<div class="form-group">
				    <div class="col-xs-6 price-fields form-pd-right">
					    <input type="text" class="form-control pull-left js-digit js-max-price" id="priceDisplay" value="{{price}}" >
					    <input type="text" class="form-control" id="currecyDisplay" value="{{currency}}" readonly>
				  	</div>
				  	<p class="msg invalid-msg invalid-msg--light is-hidden"> max price per day is 9999 </p>
			  	</div>
					<div class="form-group">
				    <div class="col-xs-4 price-cat-fiels no-padding">
					    <select class="form-control" id="priceCatDisplay">
							  <option value="day">per day</option>
							  <option value="week" disabled>per week</option>
							  <option value="total">in total</option>
							</select>
				  	</div>
			  	</div>
				</div>
				<div class="clear"></div>

				<div class="booking-box__timing">
					<div class="col-xs-2">
						<p class="booking-box__label no-padding"> from </p>
					</div>
					<div class="form-group">
				    <div class="col-xs-10 date-fields no-padding">
			    		<div class="form-group form-inline">
				    		<input type="text" class="datepicker col-xs-12 eventFrom" data-date-format='dd-mm-yyyy' id="eventAvFrom" value="">
								<div class="datapicker-icon-wrap eventFromIcon">
						      <span class="cal-icon"></span>
						    </div>
							</div>
				  	</div>
			  	</div>
			  	<div class="col-xs-2">
						<p class="booking-box__label no-padding"> to </p>
					</div>
					<div class="form-group">
				    <div class="col-xs-10 date-fields no-padding">
			    		<div class="form-group form-inline">
				    		<input type="text" class="datepicker col-xs-12 eventTo"  data-date-format='dd-mm-yyyy' id="eventAvTo" value="">
				    		<div class="datapicker-icon-wrap eventToIcon">
						      <span class="cal-icon"></span>
						    </div>
							</div>
				  	</div>
			  	</div>
				</div>

				<div class="clear"></div>

			</section>

			<section class="blocked-section is-hidden">
				<div class="booking-box__timing">
					<div class="col-xs-2">
						<p class="booking-box__label no-padding"> from </p>
					</div>
					<div class="form-group">
				    <div class="col-xs-10 date-fields no-padding">
			    		<div class="form-group form-inline">
								<input type="text" class="datepicker col-xs-12 eventFrom" data-date-format='dd-mm-yyyy' value="">
							</div>
				  	</div>
			  	</div>

			  	<div class="col-xs-2">
						<p class="booking-box__label no-padding"> to</p>
					</div>
					<div class="form-group">
				    <div class="col-xs-10 date-fields no-padding">
			    		<div class="form-group form-inline">
				    		<input type="text" class="datepicker col-xs-12 eventTo" data-date-format='dd-mm-yyyy' value="">
							</div>
				  	</div>
			  	</div>
				</div>
				<div class="clear"></div>
			</section>
		</div>

		<div class="booking-box__buttons">
				<div class="col-xs-0 col-sm-2"></div>
					<button id="btn-cancel-event" class="btn btn-link col-xs-6 col-sm-4"> remove </button>
					<button id="btn-hide-box" class="btn btn--small col-xs-6 col-sm-6"> apply </button>
			</div>
	</div>

</div>
