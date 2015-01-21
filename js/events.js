// ================================= //															//====== Page Loader 

//var height = $('header').height();
$('header').css('margin-top', '-3.8em');

$(document).ready(function() {																	//======= wait till page loads ========//
																								//======= Show hide options 
	var data =  eval("[" + document.getElementById('hSchoolData').value + "]");
	
	var ColourValue = window[data[0].CssStyle];
	ColourValue.changeDOM = ubl.changeDOM.bind(ColourValue);									// bind the function from the ubl colour change			
	ColourValue.changeDOM();
	
	if(ColourValue == sports){ ColourValue.images()}											// Sports Value 
	
	setTimeout(function(){
		$('header').css('margin-top','0px')
		setTimeout(function(){
			$('#opening_load').addClass('scale_hide');	
		},1000);
		
		setTimeout(function(){
			$('.img_banner').cycle({															// initiate cycle
				fx:'fade', // Add effect here
				speed: 2000,
				timeout: 5000, // milliseconds = 2.5 seconds
			});
		},1000);
	},1600);

	var menu_lg		 = $("#menu_lg"),															//======= Slide Toggle ========//
		menu_help	 = $("#menu_help_lg"),
		menu_preview = $("#menu_preview"),
		menu_toggle  = $('.menu_lg_toggle'),
		menu_toggle_h= $('.menu_help_toggle'),
		nav_li		 = $('nav li');
	
	function slide_toggle(x,y) {																//======= menu Show Hide ========//
		y.click(function(){
			$('html, body').animate({scrollTop: 0},800);
			x.slideToggle();
		})
	}
	
	slide_toggle(menu_lg, menu_toggle);
	slide_toggle(menu_help, menu_toggle_h);
	
	$('.show_expand').click(function(){
		$(this).next(
			$('.show_area').slideDown()
		)
	});
	
	$('.show_collapse').click(function(){
		$('.show_area').slideUp();
	});
	
	$(window).scroll(function(){
		var y_position = $('html, body').scrollTop();
		
		if(y_position == 0 ){
			$('#to_top').addClass('hidden');
		} else {
			$('#to_top').removeClass('hidden');
		}
		
	});

	$('#to_top').click(function(){
		$('html, body').animate({scrollTop: 0},800);
		return false
	});
	
	var additional_info = {
		
			show : function($item){
				
				$('html, body').animate({scrollTop: 0},800);
				$('#additional_content .absolute_vert_center').removeClass('opacity_0');
				$('#additional_wrap').empty();
				
				var target = 'additional/' + $($item).attr('data-link') + '.html';
				var height = $(window).height() + 'px';
				
				$('#additional_wrap').load(target, function(){
					$('#additional_content').slideDown();
					$('#additional_content .absolute_vert_center').addClass('opacity_0');
				});
			},
			
			hide : function($item){
				var parent = $($item).parents('div');
				parent.slideUp(800);
				//$('html, body').animate({scrollTop: 0},800);
			}
	};
	
	$('.additional_link').click(function(event){
		event.preventDefault();
		additional_info.show(this);
	});
	
	$('.collapse').click(function(){
		additional_info.hide(this);
	});

});