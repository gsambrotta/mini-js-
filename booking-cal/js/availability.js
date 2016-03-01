
function loadTempCal() {
	// Develop Mode
	/*
	var p = '<input type="text" value="50"/>';
	var c = '<input type="text" value="€"/>';
	app.price = $(p);
	app.currency = $(c);
	app.price.val();
	app.currency.val();
	*/
	// End Dev Mode

	// vars
	app.price = $('#price');
  app.currency = $('#priceCurrency');
  app.priceCat = $('#priceCat');

	var availabilityData = {
		price: app.price.val(),
		currency: app.currency.val(),
	};

	$.get('partials/availability.php', function(template) {
    var rendered = Mustache.render(template, availabilityData);
    $(app.section).html(rendered);

    // Functions
    isDigit();
    showTab();
    cal();

  });
}


function cal() {
	// Vars
  app.price = app.price.val();
  app.currency = app.currency.val();
  var cal = $('#calendar');
  var todayFormatted =  moment().format("YYYY-MM-DD") + "T00:00:00";
  var todayEndFormatted =  moment().format("YYYY-MM-DD") + "T23:59:00";
  var tmwFormatted =  moment(todayFormatted).add(1, 'days').format("YYYY-MM-DD") + "T23:59:00";
  var eventTitle = app.price + ' ' + app.currency;
  var endMonth = moment().endOf('month').add(1, 'days'); // First day of next month
  var endMonthFormatted = moment(endMonth).format("YYYY-MM-DD");
  var eventFrom = $('.eventFrom');
  var eventTo = $('.eventTo');
  var priceField = $('#priceDisplay');
  var priceCat = $('#priceCatDisplay');


  $(cal).fullCalendar({
  	contentHeight: 550,
		header: {
			left: 'prev,next today',
			center: '',
			right: 'title'
		},

		editable: true,
    eventOverlap: false,
		selectable: true,
		selectHelper: true,
		selectOverlap: false,

		events: [
      {
        title: eventTitle,
        start: todayFormatted,
        end: todayEndFormatted,
        price: app.price,
        from: todayFormatted,
        to: tmwFormatted,
        periodicity: $(priceCat).val()
      }
    ],

		select: function(start, end, jsEvent) {
			var check = start._d.toJSON().slice(0,10);
			var today = new Date().toJSON().slice(0,10);
			if(check > today ){

				app.eventUpdated = {
					title: eventTitle,
					start: start,
					end: end,
					price: app.price,
				  from: start,
				  to: end,
					periodicity: $(priceCat).val(),
					fromSelect: true
				};

				$(cal).fullCalendar('renderEvent', app.eventUpdated, true);
				$(cal).fullCalendar('unselect');
			}
		},

		eventResize: function(event, delta, revertFunc){
			app.eventUpdated = {
					title: eventTitle,
					start: event.start,
					end: event.end,
					price: app.price,
				  from: event.start,
				  to: event.end,
					periodicity: $(priceCat).val(),
					fromSelect: true
				};

				$(cal).fullCalendar('removeEvents', event._id);
				$(cal).fullCalendar('renderEvent', app.eventUpdated, true);
		},

		eventDrop: function(event, delta, revertFunc) {
			app.eventUpdated = {
					title: eventTitle,
					start: event.start,
					end: event.end,
					price: app.price,
				  from: event.start,
				  to: event.end,
					periodicity: $(priceCat).val(),
					fromSelect: true
				};

				$(cal).fullCalendar('removeEvents', event._id);
				$(cal).fullCalendar('renderEvent', app.eventUpdated, true);
  	},

		eventAfterRender: function(event, element){
        if(event.fromSelect){
          event.fromSelect = false; //(as to not trigger on rerender)
          element.click();
        }
    },

		eventClick: function(event, jsEvent) {
			$('.explanation-box').addClass('is-hidden');
			$('.booking-box').removeClass('is-hidden');

			// Update datepicker
			$(eventFrom).datepicker('setValue', event.start);
			$(eventTo).datepicker('setValue', moment(event.to).subtract(1, 'day'));
			var title = event.title;
			var digitTitle = title.replace(/\D/g,'');
			$(priceField).val(digitTitle);
			$(priceCat).val(event.periodicity);

			var startDay = moment(event.start);
			var endDay = moment(event.end);
			var diffDays = endDay.diff(startDay, 'days');

			if( diffDays >= 7 ){
				$("[value=week]").removeAttr('disabled');

			} else {
				$("[value=week]").attr('disabled');
				$(priceCat).val('day');
				event.periodicity =  $(priceCat).val('day');
				$(priceField).val(app.price);
				event.title = app.price + ' ' + app.currency;
			}

			app.eventUpdated = {
				id: "_fc" + Math.floor((Math.random() * (500 - 100)) + 100),
				title: eventTitle,
				start: event.start,
				end: event.end,
				_start: event.start,
				_end: event.end,
				price: app.price,
				from: event.start,
				to: event.end,
				periodicity: $(priceCat).val()
			};

			// Update Cal evt when datepicker change
			$(eventFrom).datepicker().on('changeDate', function(jsEvent){
				if (event.start >= app.eventUpdated.start ) {
					app.eventUpdated.start = moment(jsEvent.date).format("YYYY-MM-DD");
					var evtEndF = moment(event.end).format("YYYY-MM-DD");
					var evtUpdatedEndF = moment(app.eventUpdated.end).format("YYYY-MM-DD");

					if(evtEndF == evtUpdatedEndF) {
						event.start = app.eventUpdated.start;
						$(cal).fullCalendar('updateEvent', event);
					}
				}
	    });

	    $(eventTo).datepicker().on('changeDate', function(jsEvent){
				app.eventUpdated.end = moment(jsEvent.date).format("YYYY-MM-DD");
				var evtStartF = moment(event.start).format("YYYY-MM-DD");
				var evtUpdatedStartF = moment(app.eventUpdated.start).format("YYYY-MM-DD");

				if(evtStartF == evtUpdatedStartF) {
					event.end = app.eventUpdated.end;
					$(cal).fullCalendar('updateEvent', event);
				}
	    });

	    // Update Title when price field change
	    $(priceField).on('focusout', function(jsEvent){

				var evtStartF = moment(event.start).format("YYYY-MM-DD");
				var evtUpdatedStartF = moment(app.eventUpdated.start).format("YYYY-MM-DD");

				if(evtStartF == evtUpdatedStartF) {
					app.eventUpdated.title = priceField.val() + ' ' + app.currency;
					event.title = app.eventUpdated.title;
					app.eventUpdated.price = priceField.val();
					event.price = app.eventUpdated.price;
					$(cal).fullCalendar('updateEvent', event);
				}
	    });

	    // Price Category
	    $(priceCat).change(function(jsEvent){
	    	var evtStartF = moment(event.start).format("YYYY-MM-DD");
				var evtUpdatedStartF = moment(app.eventUpdated.start).format("YYYY-MM-DD");

		    if(evtStartF == evtUpdatedStartF) {
		    	var priceDay = event.price;

		    	// Night
		    	if( $(priceCat).val() == 'day'){
		    		event.price = priceDay;
		    		$(priceField).val(event.price);
		    		event.title = priceDay + ' ' + app.currency;
		    		event.periodicity =  $(priceCat).val();
		    		$(cal).fullCalendar('updateEvent', event);

					// Week
					} else if ($(priceCat).val() == 'week'){
						var week = priceDay * 7;
						$(priceField).val(week);
						event.title = week + ' ' + app.currency;
			    	event.periodicity =  $(priceCat).val();
						$(cal).fullCalendar('updateEvent', event);

					// Total
			    } else if( $(priceCat).val() == 'total' ) {
			    	var startDay = moment(event.start);
						var endDay = moment(event.end);
						var diffDays = endDay.diff(startDay, 'days');
			    	if( diffDays == 0){
				    	var diffDays = 1;
				    }

			    	var total = priceDay * diffDays;
			    	$(priceField).val(total);
			    	event.title = total + ' ' + app.currency;
			    	event.periodicity =  $(priceCat).val();
						$(cal).fullCalendar('updateEvent', event);
			    }

			  }
			});

			// Cancel button
			$('#btn-cancel-event').unbind('click').on('click', function(jsEvt){
				$(cal).fullCalendar('removeEvents', event._id);
				$('.booking-box').addClass('is-hidden');
			});
			$(cal).fullCalendar('updateEvent', event);
		}, // End event update

		eventConstraint: {
			start: moment().format('YYYY-MM-DD'),
			end: '2100-01-01'
		}
  });

	// Close Booking-Box
	$('#btn-hide-box').on('click', function(){
		$('.booking-box').addClass('is-hidden');
	});

	// Add price to all day cell
  $('.fc-day').html('<span>' + eventTitle + '</span>');


  $('#scheduleBtn').on('click', function(){
  	// Alert to show what would be sendedn to the database
  	// if we would be connected to one
  	// Done with createSchedules() function
  	var html = '';
  	html += 'These are the value sended to the database:';
  	html += '\n';
  	$('#calendar').fullCalendar('clientEvents', function( event ) {

  		html += event.title + ' ' + ' from: ' + moment(event.from).format("DD/MM/YYYY") + ' to: ' + moment(event.to).format("DD/MM/YYYY");
  		html += '\n';

  	})
  	alert(html);
		createSchedules();
	});
}


// Connect with backend
// -----------------------
function createSchedules(){
	$('#calendar').fullCalendar('clientEvents', function( event ) {

		$.post( "/backend/schedule/insert", {
			price: event.price,
			from: moment(event.from).format("DD/MM/YYYY") + ' ' + "00:00",
			to: moment(event.to).format("DD/MM/YYYY") + ' ' + "23:59",
			periodicity: event.periodicity,
			max_nr_bookings: 1
		});
	});

}


