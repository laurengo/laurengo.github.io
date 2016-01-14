$(document).ready(function () {
	
	$(function(){$("#slide-toggle-visit").on("click",function(){$("#slide-toggle-visit-details").slideToggle()});
	
	$("#slide-toggle-read").on("click",function(){
			console.log('this function is being called');
			$("#read-more").toggle();
			$("#slide-toggle-read-details").slideToggle();
		})
	});

	$(function(){$("#readMore").on()})
		$("#entry").submit(function (event){
			event.preventDefault();
			
		})
})
