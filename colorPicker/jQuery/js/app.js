
window.colorApp = {}; 

colorApp.hex = function(event){
	colorApp.newRgbColor = "Rgba("+colorApp.red.val()+", "+colorApp.green.val()+", "+colorApp.blue.val()+", "+colorApp.alpha.val()+")"; 
	$("p").html(colorApp.newRgbColor);
};

colorApp.addItem = function(event){
		$(colorApp.list).append('<option value="'+ colorApp.newRgbColor +'">' + colorApp.name.val() + '</option>');
		$(form).trigger("reset");
		$(name).focus();
		$("p").html('Rgba(0,0,0,0)');
};

colorApp.displaySelectedColor = function(event){
	colorApp.listSelected = $("#listColors option:selected");
	colorApp.selectedColorName = $(colorApp.listSelected).text();
	colorApp.newRgbColor= $(colorApp.listSelected).val();
	$('span').html('Your color is: <b style="color:'+ colorApp.newRgbColor + '">'+ colorApp.selectedColorName + '</b>');
};

$(document).ready(function() {
	colorApp.form = $('#form');
	colorApp.name = $('#name');
	colorApp.red = $('#red');
	colorApp.green = $('#green');
	colorApp.blue = $('#blue');
	colorApp.alpha = $('#alpha');
	colorApp.list = $('#listColors');
	colorApp.input = $('input');
	colorApp.input.change(colorApp.hex);
	colorApp.save = $('#save');
	colorApp.save.click(colorApp.addItem);
	colorApp.list.change(colorApp.displaySelectedColor);
	
});