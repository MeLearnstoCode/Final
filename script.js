$(document).ready(function(){
	
	$('.image').hover(function(){

		$('.overlay').slideDown('slow');

	});

		$('.overlay').click(function(){
			$('.overlay').slideUp('fast');

		});

	});