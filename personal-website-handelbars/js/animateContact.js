$(document).ready(function() {
	var frontHello = $(".front.hello");
	var contentHello = $(".contentContact.hello");
	var frontForm = $(".front.form");
	var contentForm = $(".contentContact.form");

	// Contact Page Icons
	$(frontHello).click(function(event) {
		event.preventDefault();
		if( $(this).hasClass("isClose")){
				$(contentHello).animate({width: "600px"}, 200);
				$(this).removeClass("isClose");
		} else {
			$(contentHello).animate({width: "0px"}, 200);
			$(this).addClass("isClose");
		}
		return false;
	}); 
	$(frontForm).click(function(event) {
		event.preventDefault();
		if( $(this).hasClass("isClose")){
				$(frontForm).animate({left: "145px"}, 200);
				$(contentForm).animate({left: "448px"}, 200);
				$(contentForm).animate({width: "600px"}, 200);
				$(frontHello).hide();
				$(this).removeClass("isClose");
		} else {
			$(frontForm).animate({left: "739px"}, 200);
			$(contentForm).animate({left: "985px"}, 200);
			$(contentForm).animate({width: "0px"}, 200);
			$(this).addClass("isClose");
			$(frontHello).show();
		}
		return false;
	});

	$(".close").click(function(event) {
		$(frontForm).animate({left: "807px"}, 200);
		$(contentForm).animate({left: "985px"}, 200);
		$(".contentContact").animate({width: "0px"}, 200);
		$(this).addClass("isClose");
		$(frontHello).show();
	});
}); 
 		