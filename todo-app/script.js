window.todoApp = {};

todoApp.addItem = function(event){ 
	todoApp.list.append('<li class="item" id="item_' + localStorage.length + '"><form><input id="check" type="checkbox"></form><p class="textItem">' 
		+ todoApp.textInput.val()
		+ '</p><button class="deleteButton"><i class="icon-cancel"></i></button></li><div class="clear">');
	//find all form with class jqtransform and apply the plugin
    $("form").jqTransform({imgPath:'img/'});
    $("a.jqTransformCheckbox").click(todoApp.underlineItem);
	$('.deleteButton').click(todoApp.deleteItem);
	
	localStorage.setItem(localStorage.length, todoApp.textInput.val());
	todoApp.textInput.val("");

};

todoApp.deleteItem = function(event){
	var idItem = $(this).parent().attr('id'); 
	idItem = parseInt(idItem.replace("item_", "")); 
	$(this).parent().remove();
	localStorage.removeItem(idItem);
};

todoApp.underlineItem = function(event){
	var $textItem = $(event.target).parent().parent().parent().find(".textItem");
	if($(event.target).hasClass("jqTransformChecked")){
		$textItem.addClass("line");
	} else {
		$textItem.removeClass("line");
	}
};

todoApp.restoreItem = function (index, text) {
	// Add new LI element to list
	todoApp.list.append('<li class="item" id="item_' + index + '"><form><input id="check" type="checkbox"></form><p class="textItem">' 
		+ text
		+ '</p><button class="deleteButton"><i class="icon-cancel"></i></button></li><div class="clear">');
	$('.deleteButton').click(todoApp.deleteItem);
    //find all form with class jqtransform and apply the plugin
    $("form").jqTransform({imgPath:'img/'});
    $("a.jqTransformCheckbox").click(todoApp.underlineItem);

};

$(document).ready(function() {
	todoApp.textInput = $("#newItem"); 
	todoApp.list = $(".itemList");
	todoApp.items = $(".item");

	todoApp.addButton = $("#addButton");
	todoApp.addButton.click(todoApp.addItem);

	// when page loads, read all todo items from localStorage
	// populate DOM with todo items found in localStorage.getItem
	for (var i = 0; i < localStorage.length; i++) {
		var index = localStorage.key(i);
		var text =  localStorage.getItem(index);
		todoApp.restoreItem(index, text);
	}

});