var graphicDataUrl = 'templating/graphic-data.json';
var webDataUrl = 'templating/web-data.json';
var templateHtml = 'templating/templating.html';
var viewG = $('#view-graphic');
var viewW = $('#view-web');


$.getJSON( webDataUrl) 
	.then( function(data){
	$.get( templateHtml, function(template){

		template = Handlebars.compile(template);
		
		var example = template({ works: data });		
		viewW.html(example);

		openSinglePage();
		closeSinglePage();
	})
	})
	.fail( function(){
		console.log("Web data fail!!");
		viewW.append("<div class='spinner'> <img src='images/spinner.gif' /> </div>");
	});


$.getJSON( graphicDataUrl) 
	.then(function(data){
	$.get( templateHtml, function(template){

		template = Handlebars.compile(template);
		
		var example = template({ works: data });		
		viewG.html(example);

		openSinglePage();
		closeSinglePage();
	})
	})
	.fail( function(){
		console.log("Graphic data fail!!");
		viewG.append("<div class='spinner'> <img src='images/spinner.gif' /> </div>");
	});


function openSinglePage(){
	var singleContainer = $(".singleWork");
	var galleryContent = $(".galleryContent");

	galleryContent.on('click', '.thumble', function(event){
		var thumble = $(event.currentTarget);
		var thumbleIndex = thumble.index();

		thumble.parent().parent().find(".single")
			.addClass("hidden")
			.eq(thumbleIndex).removeClass("hidden")
			$("html, body").animate({scrollTop: thumble.parent().offset().top - 100}, 500);
		thumble.parent().fadeOut("fast");
	});
}

function closeSinglePage(){
	var singleContainer = $(".singleWork");
	var galleryContent = $(".galleryContent");

	singleContainer.on('click', '.single', function(event){
		var single = $(event.currentTarget);
		var singleIndex = single.index();

		single.parent().parent().find(".single")
			.addClass("hidden");
		single.parent().parent().parent().find(galleryContent)
			.fadeIn("slow")
			$("html, body").animate({scrollTop: single.parent().parent().find(".thumble").eq(singleIndex).offset().top - 150 }, 500);	
	});
}
