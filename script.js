// $(document).ready(function(){
	
// 	$('#title').click(function(){

// 		$('.overlay').slideDown('slow');

// 	});

// 		$('.overlay').click(function(){
// 			$('.overlay').slideUp('fast');

// 		});

// 	});


$(document).ready(function(){
  
  $('#title').click(function(){

    $('.overlay').slideDown('slow', function(){
      $('.overlay').css({
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center'
      })
    });

  });

    $('.overlay').click(function(){
      $('.overlay').slideUp('fast');

    });

  });



$(function(){
   $('#how').on('focus mouseenter', function(){
    $(this).parent().css("background", "url(closet5.jpg) no-repeat");
   });
});

$(function(){
   $('#how2').on('focus mouseenter', function(){
    $(this).parent().css("background", "url(closet1.jpg) no-repeat");
   });
});
	
$(function(){
   $('#how3').on('focus mouseenter', function(){
    $(this).parent().css("background", "url(closet2.jpg) no-repeat");
   });
});
	
$(function(){
   $('#how4').on('focus mouseenter', function(){
    $(this).parent().css("background", "url(closet3.jpg) no-repeat");
   });
});

$(function(){
   $('#how5').on('focus mouseenter', function(){
    $(this).parent().css("background", "url(closet4.jpg) no-repeat");
   });
});


$(function(){
   $('.row').click(function(){
    $("h3").css("backgroundColor", "rgba(128,128,128,.5)");
   });
});

	