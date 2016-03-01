<section class="col-xs-12 col-sm-4 insert-data">
	<div class="insert-data__wrap ">
		<h2> When your place is available? </h2>
		<p> Let your hosts know when is possible to book your accomodation. <br/>
		 In the next step you will be able to edit or add new possibilities. </p>

		<form id="profileInfo" class="price-box form-group form-horizontal">
	    <div class="form-group">
	    	<div class="no-padding">
		    	<input type="text" class="price-box__price form-control pull-left js-digit js-max-price" id="price" placeholder="0000" />
	  		</div>
	    	<span class="arrow-select"></span>
		    <select class="price-box__currency form-control pull-left" id="priceCurrency">
		    	<option value="EUR">EUR</option>
				  <option value="CHF">CHF</option>
				  <option value="AUD">AUD</option>
				  <option value="BRL">BRL</option>
				  <option value="CAD">CAD</option>
				  <option value="CZK">CZK</option>
				  <option value="DKK">DKK</option>
				  <option value="HKD">HKD</option>
				  <option value="HUF">HUF</option>
				  <option value="ILS">ILS</option>
				  <option value="JPY">JPY</option>
				  <option value="MYR">MYR</option>
				  <option value="MXN">MXN</option>
				  <option value="NOK">NOK</option>
				  <option value="NZD">NZD</option>
				  <option value="PHP">PHP</option>
				  <option value="PLN">PLN</option>
				  <option value="GBP">GBP</option>
				  <option value="SGD">SGD</option>
				  <option value="SEK">SEK</option>
				  <option value="TWD">TWD</option>
				  <option value="THB">THB</option>
				  <option value="TRY">TRY</option>
				  <option value="USD">USD</option>
				</select>
				<input type="text" class="price-box__type form-control is-hidden" id="priceCat" value="day">
				<input type="text" class="price-box__type form-control" value="per day" readonly>

				<p class="msg err-msg err-msg--light is-hidden"> these fields are mandatory </p>
				<p class="msg invalid-msg invalid-msg--light is-hidden"> max price per day is 9999 </p>
			</div>
		</form>

		<button id="initialDataBtn" type"submit" class="btn btn--small pull-right"> next </button>
	</div>
</section>
