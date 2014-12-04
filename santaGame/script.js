var nameList = [
	'gio',
	'anna',
	'chiara',
	'ella',
	'sarah',
	'sara'
];

$(document).ready(function(){
	window.randomName = pickRandomName(nameList);
	luckyName(randomName, nameList);
});

var luckyName = function(randomName){
	var section = $('section');
	$('section').on('click', '#go', function(){
		var currentSanta = $('#santaName').val();
		console.log(currentSanta);

		if( currentSanta != randomName){
			$('p').html(randomName);
		
		} else {
			//pick up another random name
			randomName = pickRandomName(nameList);
            console.log(randomName);
			$('p').text(randomName);
		}
		return;
	});
};

var pickRandomName = function(randomName){
	var randomNameString = nameList[Math.floor(Math.random() * nameList.length)];
	return randomNameString;
};
