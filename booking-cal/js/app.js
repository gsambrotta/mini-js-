$(document).ready(function($){
	$.session.clear();

	// Vars
	app.section = $('#placeholder');
	app.nextBtn = $('#initialDataBtn');

	// functions
	loadTempInitData();
});

var app = {};
