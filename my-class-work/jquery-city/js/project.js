$(document).ready(function () {

	$('.thumb').click(function () {
		var imgSrc = $(this).attr('src')
		$('#bigimage').attr('src', imgSrc)
	})
})


//$('#first').click(function () {
//  $('#bigimage').attr('src', 'img/1.jpg')
//})

//$('#second').click(function () {
 // $('#bigimage').attr('src', 'img/2.jpg')
//})

//$('#third').click(function () {
  //$('#bigimage').attr('src', 'img/3.jpg')
//})

//$('#fourth').click(function () {
  //$('#bigimage').attr('src', 'img/4.jpg')
//})

