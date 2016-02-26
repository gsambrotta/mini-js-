var nameList = [
	'gio',
	'anna',
	'chiara',
	'ella',
	'sarah',
	'sara'
];

function pickRandomName(nameList){
	return nameList[Math.floor(Math.random() * nameList.length)];
}

function luckyName(nameList) {
	var section = $('section');
	var currentSanta = $('#santaName').val();
    console.log('current name is', currentSanta);

    var randomName;
    do {
        randomName = pickRandomName(nameList); 
    } while(currentSanta === randomName);
    
    $('p').html(randomName);
    console.log('random name is', randomName);
    return;
}


$(document).ready(function(){
	$('section').on('click', '#go', function(){
		luckyName(nameList);
    });
});

