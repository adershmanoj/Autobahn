var controller = new ScrollMagic.Controller();

$(function () { // wait for document ready

	$('#dashboard .question .answer').click(function(){
		var option = $(this).data('answer');
        console.log(option);
		$.post("send.php", {answer: option}, 'JSON')
        .done(function(data) {
            var obj = JSON.parse(data);
            if(obj.result){
				$('#dashboard .question .answer').hide();
				$('#dashboard .question .success_text').show();
            }

    	});
	});

	//OTHER JS


	if($(window).width() > 1024){
		$('.section.info.normal .billboard').hover(function(){

			

			if($(this).hasClass('bounce')){
				$(this).removeClass('bounce');
			}else{
				$(this).addClass('bounce');
			}
		},function(){

			if($(this).parent().find('.info-box').hasClass('shown'))
			{
				$(this).parent().find('.info-box').removeClass('shown');
				$(this).parent().find('.right-box').removeClass('hide'); 
			}

			if($(this).hasClass('bounce')){
				$(this).removeClass('bounce');
			}else{
				$(this).addClass('bounce');
			}
		});
		$('.section.s12 .info_trigger').hover(function(){
 
				$(this).parent().find('.text_final').removeClass('shown'); 
				$(this).parent().find($(this).data('trigger')).addClass('shown');

		},function(){
				$(this).parent().find($(this).data('trigger')).removeClass('shown');
		});
	}else{
		$('.section.info.normal .billboard').click(function(){

			if($(this).parent().find('.info-box').hasClass('shown'))
			{
				$(this).parent().find('.info-box').removeClass('shown');
				$(this).parent().find('.right-box').removeClass('hide');
			}else{

				$(this).parent().find('.info-box').addClass('shown');
				$(this).parent().find('.right-box').addClass('hide'); 
			}

			if($(this).hasClass('bounce')){
				$(this).removeClass('bounce');
			}else{
				$(this).addClass('bounce');
			}
		});

		$('.section.s12 .info_trigger').click(function(){

			if($(this).parent().find($(this).data('trigger')).hasClass('shown'))
			{
				$(this).parent().find($(this).data('trigger')).removeClass('shown');
			}else{

				$(this).parent().find('.text_final').removeClass('shown'); 
				$(this).parent().find($(this).data('trigger')).addClass('shown');
			}

		});
	}

	

	

	var moving = 0;
	$('.goTo').click(function(){
		if(!moving){
            var where = $(this).data('where');
            moving = 1;
            $('html, body').animate({scrollTop: $(where).offset().top}, 500);
            setTimeout(function(){
                    moving = 0;
                    }, 550);
          }
	});

	$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        break;

        case 38: // up
        	if(!moving && !$('.section.active').hasClass('cover')){
	            
	            moving = 1;
	            $('html, body').animate({scrollTop: $('.section.active').prev('.section').offset().top}, 500);
	            setTimeout(function(){
	                    moving = 0;
	                    }, 550);
	          }
        break;

        case 39: // right
        break;

        case 40: // down
        	if(!moving && !$('.section.active').hasClass('s13')){
	            
	            moving = 1;
	            $('html, body').animate({scrollTop: $('.section.active').next('.section').offset().top}, 500);
	            setTimeout(function(){
	                    moving = 0;
	                    }, 550);
	          }
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

	$('#dashboard .prev_button').click(function(){
		if(!moving && !$('.section.active').hasClass('cover')){
	            
	        moving = 1;
	        $('html, body').animate({scrollTop: $('.section.active').prev('.section').offset().top}, 500);
	        setTimeout(function(){
	                moving = 0;
	                }, 550);
	      }
	});

	$('#dashboard .next_button').click(function(){
		if(!moving && !$('.section.active').hasClass('s13')){
	            
            moving = 1;
            $('html, body').animate({scrollTop: $('.section.active').next('.section').offset().top}, 500);
            setTimeout(function(){
                    moving = 0;
                    }, 550);
          }
	});
	
	// SKY AND MIRROR SCENES
	new ScrollMagic.Scene({triggerElement: ".section.cover", duration: "100%"})
					.setClassToggle("#sky .sky-00", "active") // add class toggle
					//.addIndicators() 
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: ".section.s01.a", duration: "200%"})
					.setClassToggle("#sky .sky-01", "active") // add class toggle
					.on("enter",function(){
						$('#mirror img').attr('src','img/01/mirror.png');
					}) // add class toggle
					//.addIndicators() 
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: ".section.s02.b", duration: "200%"})
					.setClassToggle("#sky .sky-02", "active") // add class toggle
					.on("enter",function(){
						$('#mirror img').attr('src','img/02/mirror.png');
					}) // add class toggle
					//.addIndicators() 
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: ".section.s03.b", duration: "200%"})
					.setClassToggle("#sky .sky-03", "active") // add class toggle
					.on("enter",function(){
						$('#mirror img').attr('src','img/03/mirror.png');
					}) // add class toggle
					//.addIndicators() 
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: ".section.s04.b", duration: "200%"})
					.setClassToggle("#sky .sky-04", "active") // add class toggle
					.on("enter",function(){
						$('#mirror img').attr('src','img/04/mirror.png');
					}) // add class toggle
					//.addIndicators() 
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: ".section.s05.b", duration: "200%"})
					.setClassToggle("#sky .sky-05", "active") // add class toggle
					.on("enter",function(){
						$('#mirror img').attr('src','img/05/mirror.png');
					}) // add class toggle
					//.addIndicators() 
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: ".section.s06.b", duration: "200%"})
					.setClassToggle("#sky .sky-06", "active") // add class toggle
					.on("enter",function(){
						$('#mirror img').attr('src','img/06/mirror.png');
					}) // add class toggle
					//.addIndicators() 
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: ".section.s07.a", duration: "200%"})
					.setClassToggle("#sky .sky-07", "active") // add class toggle
					.on("enter",function(){
						$('#mirror img').attr('src','img/07/mirror.png');
					}) // add class toggle
					//.addIndicators() 
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: ".section.s08.a", duration: "200%"})
					.setClassToggle("#sky .sky-08", "active") // add class toggle
					.on("enter",function(){
						$('#mirror img').attr('src','img/08/mirror.png');
					}) // add class toggle
					//.addIndicators() 
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: ".section.s09.a", duration: "200%"})
					.setClassToggle("#sky .sky-09", "active") // add class toggle
					.on("enter",function(){
						$('#mirror img').attr('src','img/09/mirror.png');
					}) // add class toggle
					//.addIndicators() 
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: ".section.s10.a", duration: "200%"})
					.setClassToggle("#sky .sky-10", "active") // add class toggle
					.on("enter",function(){
						$('#mirror img').attr('src','img/10/mirror.png');
					}) // add class toggle
					//.addIndicators() 
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: ".section.s11.a", duration: "300%"})
					.setClassToggle("#sky .sky-11", "active") // add class toggle
					//.addIndicators() 
					.addTo(controller);

	// DASHBOARD SCENES
	new ScrollMagic.Scene({triggerElement: ".section.s01.a", duration: "2000%"})
					.setClassToggle("#dashboard", "active") // add class toggle
					//.addIndicators() 
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: ".section.s11.a", duration: "230%", triggerHook:0.1})
					.setClassToggle("#dashboard", "final") // add class toggle
					//.addIndicators() 
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: ".section.s12.a", duration: "100%"})
					.setClassToggle("#dashboard", "active") // add class toggle
					//.addIndicators() 
					.addTo(controller);

	/*new ScrollMagic.Scene({triggerElement: ".section.s12.a", duration: "200%"})
					.setClassToggle("#dashboard", "final") // add class toggle
					//.addIndicators() 
					.addTo(controller);*/

	// MIRROR SCENE
	new ScrollMagic.Scene({triggerElement: ".section.s01.a", duration: "2000%"})
					.setClassToggle("#mirror", "active") // add class toggle
					//.addIndicators() 
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: ".section.s01.a", duration: "2000%"})
					.setClassToggle("#road .road_lines", "roadlines") // add class toggle
					//.addIndicators() 
					.addTo(controller);

	// WIPERS A SCENES	
	new ScrollMagic.Scene({triggerElement: ".section.cover", duration: "100%"})
					.setClassToggle(".section.cover", "active") // add class toggle
					//.addIndicators() 
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: ".section.s01.a", duration: "100%"})
					.setClassToggle(".section.s01.a", "active") // add class toggle
					.on("enter",function(){
						if(!$('#dashboard .wipers').hasClass('wipe')){
							$('#dashboard .wipers').addClass('wipe');
							setTimeout(function(){$('#dashboard .wipers').removeClass('wipe');},2000);
						}
					}) // add class toggle
					//.addIndicators() 
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: ".section.s02.a", duration: "100%"})
					.setClassToggle(".section.s02.a", "active") // add class toggle
					.on("enter",function(){
						if(!$('#dashboard .wipers').hasClass('wipe')){
							$('#dashboard .wipers').addClass('wipe');
							setTimeout(function(){$('#dashboard .wipers').removeClass('wipe');},2000);
						}
					}) // add class toggle
					//.addIndicators() 
					.addTo(controller);		
	new ScrollMagic.Scene({triggerElement: ".section.s03.a", duration: "100%"})
					.setClassToggle(".section.s03.a", "active") // add class toggle
					.on("enter",function(){
						if(!$('#dashboard .wipers').hasClass('wipe')){
							$('#dashboard .wipers').addClass('wipe');
							setTimeout(function(){$('#dashboard .wipers').removeClass('wipe');},2000);
						}
					}) // add class toggle
					//.addIndicators() 
					.addTo(controller);	
	new ScrollMagic.Scene({triggerElement: ".section.s04.a", duration: "100%"})
					.setClassToggle(".section.s04.a", "active") // add class toggle
					.on("enter",function(){
						if(!$('#dashboard .wipers').hasClass('wipe')){
							$('#dashboard .wipers').addClass('wipe');
							setTimeout(function(){$('#dashboard .wipers').removeClass('wipe');},2000);
						}
					}) // add class toggle
					//.addIndicators() 
					.addTo(controller);	
	new ScrollMagic.Scene({triggerElement: ".section.s05.a", duration: "100%"})
					.setClassToggle(".section.s05.a", "active") // add class toggle
					.on("enter",function(){
						if(!$('#dashboard .wipers').hasClass('wipe')){
							$('#dashboard .wipers').addClass('wipe');
							setTimeout(function(){$('#dashboard .wipers').removeClass('wipe');},2000);
						}
					}) // add class toggle
					//.addIndicators() 
					.addTo(controller);	
	new ScrollMagic.Scene({triggerElement: ".section.s06.a", duration: "100%"})
					.setClassToggle(".section.s06.a", "active") // add class toggle
					.on("enter",function(){
						if(!$('#dashboard .wipers').hasClass('wipe')){
							$('#dashboard .wipers').addClass('wipe');
							setTimeout(function(){$('#dashboard .wipers').removeClass('wipe');},2000);
						}
					}) // add class toggle
					//.addIndicators() 
					.addTo(controller);	
	new ScrollMagic.Scene({triggerElement: ".section.s07.a", duration: "100%"})
					.setClassToggle(".section.s07.a", "active") // add class toggle
					.on("enter",function(){
						if(!$('#dashboard .wipers').hasClass('wipe')){
							$('#dashboard .wipers').addClass('wipe');
							setTimeout(function(){$('#dashboard .wipers').removeClass('wipe');},2000);
						}
					}) // add class toggle
					//.addIndicators() 
					.addTo(controller);	
	new ScrollMagic.Scene({triggerElement: ".section.s08.a", duration: "100%"})
					.setClassToggle(".section.s08.a", "active") // add class toggle
					.on("enter",function(){
						if(!$('#dashboard .wipers').hasClass('wipe')){
							$('#dashboard .wipers').addClass('wipe');
							setTimeout(function(){$('#dashboard .wipers').removeClass('wipe');},2000);
						}
					}) // add class toggle
					//.addIndicators() 
					.addTo(controller);	
	new ScrollMagic.Scene({triggerElement: ".section.s09.a", duration: "100%"})
					.setClassToggle(".section.s09.a", "active") // add class toggle
					.on("enter",function(){
						if(!$('#dashboard .wipers').hasClass('wipe')){
							$('#dashboard .wipers').addClass('wipe');
							setTimeout(function(){$('#dashboard .wipers').removeClass('wipe');},2000);
						}
					}) // add class toggle
					//.addIndicators() 
					.addTo(controller);	
	new ScrollMagic.Scene({triggerElement: ".section.s10.a", duration: "100%"})
					.setClassToggle(".section.s10.a", "active") // add class toggle
					.on("enter",function(){
						if(!$('#dashboard .wipers').hasClass('wipe')){
							$('#dashboard .wipers').addClass('wipe');
							setTimeout(function(){$('#dashboard .wipers').removeClass('wipe');},2000);
						}
					}) // add class toggle
					//.addIndicators() 
					.addTo(controller);	

	new ScrollMagic.Scene({triggerElement: ".section.s11.a", duration: "100%"})
					.setClassToggle(".section.s11.a", "active") // add class toggle
					//.addIndicators() 
					.addTo(controller);	

	new ScrollMagic.Scene({triggerElement: ".section.s12.a", duration: "100%"})
					.setClassToggle(".section.s12.a", "active") // add class toggle
					//.addIndicators() 
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: ".section.s12.a", duration: "200%"})
					.setClassToggle("#road", "final") // add class toggle
					//.addIndicators() 
					.addTo(controller);		
	new ScrollMagic.Scene({triggerElement: ".section.s13.a", duration: "100%"})
					.setClassToggle(".section.s13.a", "active") // add class toggle
					//.addIndicators() 
					.addTo(controller);

	// SECTION B SCENES
	new ScrollMagic.Scene({triggerElement: ".section.s01.b", duration: "100%"})
					.setClassToggle(".section.s01.b", "active") // add class toggle
					//.addIndicators() 
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: ".section.s02.b", duration: "100%"})
					.setClassToggle(".section.s02.b", "active") // add class toggle
					//.addIndicators() 
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: ".section.s03.b", duration: "100%"})
					.setClassToggle(".section.s03.b", "active") // add class toggle
					//.addIndicators() 
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: ".section.s04.b", duration: "100%"})
					.setClassToggle(".section.s04.b", "active") // add class toggle
					//.addIndicators() 
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: ".section.s05.b", duration: "100%"})
					.setClassToggle(".section.s05.b", "active") // add class toggle
					//.addIndicators() 
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: ".section.s06.b", duration: "100%"})
					.setClassToggle(".section.s06.b", "active") // add class toggle
					//.addIndicators() 
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: ".section.s07.b", duration: "100%"})
					.setClassToggle(".section.s07.b", "active") // add class toggle
					//.addIndicators() 
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: ".section.s08.b", duration: "100%"})
					.setClassToggle(".section.s08.b", "active") // add class toggle
					//.addIndicators() 
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: ".section.s09.b", duration: "100%"})
					.setClassToggle(".section.s09.b", "active") // add class toggle
					//.addIndicators() 
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: ".section.s10.b", duration: "100%"})
					.setClassToggle(".section.s10.b", "active") // add class toggle
					//.addIndicators() 
					.addTo(controller);	

	//NEDDLE SCENES

	// SECTION B SCENES
	new ScrollMagic.Scene({triggerElement: ".section.s01.a", duration: "200%"})
					.setClassToggle("#dashboard .needle", "s01") // add class toggle
					//.addIndicators() 
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: ".section.s02.a", duration: "200%"})
					.setClassToggle("#dashboard .needle", "s02") // add class toggle
					//.addIndicators() 
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: ".section.s03.a", duration: "200%"})
					.setClassToggle("#dashboard .needle", "s03") // add class toggle
					//.addIndicators() 
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: ".section.s04.a", duration: "200%"})
					.setClassToggle("#dashboard .needle", "s04") // add class toggle
					//.addIndicators() 
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: ".section.s05.a", duration: "200%"})
					.setClassToggle("#dashboard .needle", "s05") // add class toggle
					//.addIndicators() 
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: ".section.s06.a", duration: "200%"})
					.setClassToggle("#dashboard .needle", "s06") // add class toggle
					//.addIndicators() 
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: ".section.s07.a", duration: "200%"})
					.setClassToggle("#dashboard .needle", "s07") // add class toggle
					//.addIndicators() 
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: ".section.s08.a", duration: "200%"})
					.setClassToggle("#dashboard .needle", "s08") // add class toggle
					//.addIndicators() 
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: ".section.s09.a", duration: "200%"})
					.setClassToggle("#dashboard .needle", "s09") // add class toggle
					//.addIndicators() 
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: ".section.s10.a", duration: "200%"})
					.setClassToggle("#dashboard .needle", "s10") // add class toggle
					//.addIndicators() 
					.addTo(controller);		


	// SEND		
});
