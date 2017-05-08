$(document).ready(function(){
	
	$('.image').click(function(){

		$('.overlay').slideDown('slow');

	});

		$('.overlay').click(function(){
			$('.overlay').slideUp('fast');

		});

	});