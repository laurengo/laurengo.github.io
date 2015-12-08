// Great job on this!  The functionality works well and your code is clean.  Good naming of variables and functions!

$(document).ready(function () {

	var total = 0

	// Add 10 Event
	$('#a10').click(add10)
	
	function add10 () {
		total = total + 10 
		$('#out').text(total)
	}

	//Add 20 Event
	$('#a20').click(add20)
	
	function add20 () {
		total = total + 20
		$('#out').text(total)
	}

	//Add 30 Event
	$('#a30').click(add30)

	function add30 () {
		total = total + 30
		$('#out').text(total)
	}

	//Make Red Event
	$('#red').click(red)

	function red () {
		$("#out").css('background-color', 'red')
	}

	//Make Blue Event
	$('#blue').click(blue)

	function blue () {
		$("#out").css('background-color', 'blue')
	}

	//Sub 30 Event
	$('#n30').click(sub30)

	function sub30 () {
		total = total - 30
		$('#out').text(total)
	}

	//Sub 20 Event
	$('#n20').click(sub20)

	function sub20 () {
		total = total - 20
		$('#out').text(total)
	}

	//Sub 10 Event
	$('#n10').click(sub10)

	function sub10 () {
		total = total - 10
		$('#out').text(total)
	}
})