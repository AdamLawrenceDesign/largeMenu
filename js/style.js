
	var ubl = { 
		colours:[{ prm : '#00578a', sec : '#0099bc', lt : 'rgba(192, 222, 237, 0.6)', op : '#ffbb00'}],			// #c0deed
		changeDOM:function(){
			$('.prm').css('background-color', this.colours[0].prm);												// blue style default
			$('.sec').css('background-color',  this.colours[0].sec);   				// Sec
			$('.prm_lt').css('background-color', this.colours[0].lt);						// lt
			$('.button_dk').css('background-color',  this.colours[0].op);					// op
			$('.links_line_left li a').css('border-left-color', this.colours[0].op);		// lt
			$('.links_line_right li a').css('border-right-color',  this.colours[0].op);		// lt
			$('blockquote p').css('border-color', this.colours[0].sec)
			$('a:hover').css('color', this.colours[0].op);
		}
	};
	
	var ubk = { colours: [{ prm : '#292f33', sec : '#ffa800', lt : 'rgba(209, 214, 215, 0.6)', op : '#ffa800' }]}; 	//	// 'rgba(209, 214, 215, 0.6)' //#c0deed  ///rgba(192, 222, 237, 0.6)
	var ucb = { colours: [{ prm : '#4f2d82', sec : '#ffc425', lt : 'rgba(192, 222, 237, 0.6)', op : '#ffc425' }]}; 		// #c0deed  ///rgba(192, 222, 237, 0.6)
	var ubm = { colours: [{ prm : '#006bb1', sec : '#0099bc', lt : 'rgba(192, 222, 237, 0.6)', op : '#f6b200' }]}; 		// #c0deed  ///rgba(192, 222, 237, 0.6)
	var udo = { colours: [{ prm : '#017051', sec : '#017051', lt : 'rgba(161, 178, 187, 0.6)', op : '#9c1b3a' }]};		// #e4c2c2
	var ugr = { colours: [{ prm : '#005c2f', sec : '#00894b', lt : 'rgba(192, 222, 237, 0.6)', op : '#00894b' }]};	//	// #f69211
	var ugo = { colours: [{ prm : '#fcb600', sec : '#ffa800', lt : 'rgba(209, 214, 215, 0.6)', op : '#ffa800' }]};	//				//	#d1d6d7
	var uma = { colours: [{ prm : '#711a3f', sec : '#6caddf', lt : 'rgba(192, 222, 237, 0.6)', op : '#6caddf' }]};	//				// 'rgba(209, 214, 215, 0.6)'
	var umn = { colours: [{ prm : '#6f2f40', sec : '#ffa800', lt : 'rgba(192, 222, 237, 0.6)', op : '#d59693' }]};					//	'rgba(255, 233, 192, 0.6)'	ffe9c0
	var una = { colours: [{ prm : '#002b5c', sec : '#6caddf', lt : 'rgba(192, 222, 237, 0.6)', op : '#6caddf' }]};	//				//
	var une = { colours: [{ prm : '#292f33', sec : '#ffa800', lt : 'rgba(192, 222, 237, 0.6)', op : '#ffa800' }]};					//
	var upl = { colours: [{ prm : '#b62e2e', sec : '#ffa800', lt : 'rgba(192, 222, 237, 0.6)', op : '#6caddf' }]};					//  6caddf #c0deed #d59693
	var upu = { colours: [{ prm : '#753b92', sec : '#6caddf', lt : 'rgba(193, 223, 237, 0.6)', op : '#6caddf' }]};	//				//
	var ute = { colours: [{ prm : '#3ca3ac', sec : '#6caddf', lt : 'rgba(193, 223, 237, 0.6)', op : '#6caddf' }]};	//				//
	var ure = { colours: [{ prm : '#c41425', sec : '#07778b', lt : 'rgba(192, 222, 237, 0.6)', op : '#6caddf' }]}; 	//		// #c0deed  ///rgba(192, 222, 237, 0.6)
	
	var sports = { 
		
			colours: [{ prm : '#292f33', sec : '#ffa800', lt : 'rgba(0, 0, 0, 0.1)', op : '#ffa800' }],
			images: function(){
				$('header').removeClass('pattern').addClass('pattern_sports');
				$('.title_nav').removeClass('pattern').addClass('pattern_sports');
				$('.img_banner').empty().append("<img class=\"full\" src=\"img/sports/sports_hands.jpg\" alt=\"\" />");
				$('body').css('background-image','url(img/sports/bg_crowd.jpg)');
				$('.sports_fff').addClass('txt_fff').css('text-shadow','0 1px 1px rgba(0,0,0,.8)');
				$('.sports_fff h2').css('color','#f9f9f9');
			}			
		
		};


$(document).ready(function() {																	//======= wait till page loads ========//
	
	// ====================================================== // 								// 			Make Links Work
	
	function CreateLinks(){
		var url = window.location.href,
			urlLength = url.length,
			SicCode = url.search("aspx") + 4,	
			encryt = url.substr(SicCode,urlLength);
		
		$('.index').attr( 'href' , 'index.aspx' + encryt );
		$('.downloads').attr( 'href' , 'downloads.aspx' + encryt );
		$('.group_img').attr( 'href' , 'group_img.aspx' + encryt );
		$('.packages').attr( 'href' , 'packages.aspx' + encryt );
		$('.gift_items').attr( 'href' , 'gift_items.aspx' + encryt );
		$('.payment').attr( 'href' , 'payment.aspx' + encryt );
		$('.thank_you').attr( 'href' , 'thank_you.aspx' + encryt );
		$('.cart').attr( 'href' , 'cart.aspx' + encryt );
		$('.contact_us').attr( 'href' , 'contact_us.aspx' + encryt );
		
	};
	
	CreateLinks();

});

$(window).load(function() {
	
	// ====================================================== // 								// 			Colour Values
	
	var data =  eval("[" + document.getElementById('hSchoolData').value + "]");
	
	// ====================================================== // 								// 			Create Style
	
	var style = {
					schoolData :  data,
					bannerImages : eval("[" + document.getElementById('hBannerImages').value + "]"),
					portrait  :  eval("[" + document.getElementById('hFirstImgPortrait').value + "]"), 
					group : eval("[" + document.getElementById('hFirstImgGroup').value + "]"),
					
					// ==================================== // 									// 		Student Name	
						
					studentDetails : function(){
						
						var name_given = this.portrait[0].FirstName.replace('?','\''),
							name_surname = this.portrait[0].LastName.replace('?','\''),
							name_full = name_given + " " + name_surname,
							img_latest = "https://advancedimage.com.au/lifebuyimages//" + this.portrait[0].DstImage,
							photo_year = this.portrait[0].YearPhoto;
						
						$('.name_full').html(name_full);
						$('.name_given').html(name_given);
						$('.img_latest').attr('src',img_latest);
						$('.img_latest_year').html(this.portrait[0].YearPhoto);
						$('title').html(name_full + ' | My Photos' );
						
						if(typeof this.group[0] === 'undefined'){
							$('.group_img').parent().addClass('hidden');
						};
										
						
					},
					
					// ==================================== // 									// 		School Details	
					
					schoolDetails : function(){
												
							var logoPathway = "https://advancedimage.com.au/lifebuyimages/" + this.schoolData[0].ClientID + "/Assets/PublicPortal/Logo.png",
								name_school = this.schoolData[0].WebName.replace('?','\'');
								
							$('.school_logo').attr('src',logoPathway);
							$('.school_name').html(name_school);
							
							var link = document.createElement('link');
							link.type = 'image/x-icon';
							link.rel = 'shortcut icon';
							link.href = logoPathway;
							document.getElementsByTagName('head')[0].appendChild(link);							
							
					},
					
					// ==================================== // 									// 		School Details	
					
					banner : function(){
						
							var img_banner = "https://advancedimage.com.au/lifebuyimages/" + this.schoolData[0].ClientID + "/Assets/PublicPortal/" + this.bannerImages[0]; //[0].img_0;							

							var objCount=0;
							for(_obj in this.bannerImages[0]){ objCount++};
							
							for( var i = 0; i < objCount ; i = i + 1){		// Hide div's
								var image = this.bannerImages[0][i];
									
								if( image != ''){
									var bannerPathway = "https://advancedimage.com.au/lifebuyimages/" + this.schoolData[0].ClientID + "/Assets/PublicPortal/" + image   ;
									var imageObject = "<img class=\"full border_ntl \" src=\"" + bannerPathway + "\"" + " alt=\"\" style=\"padding:.2em\" />";
									$('.img_banner').append(imageObject);
								}
								
							}
							
							if ($('.img_banner').html() == ''){
								$('.img_banner').append("<img class=\"full\" src=\"img/generic_banner.png\" alt=\"\" />");
							};
							
					}
					
		
	};
	
	style.studentDetails();
	style.schoolDetails();
	style.banner();
	
	
	// ====================================================== // 											//======  Sibilings
	
	var sibling = {
					data  :  eval("[" + document.getElementById('hFirstImgPortrait').value + "]"),
					
					// ==================================== // 												// 	Change page
					
					update : function() {
						var isSibling = this.data[0].ImageIsPortrait,
							LastName = this.data[0].LastName;
						
						if(isSibling == 'False'){
							$('.group_img').parent().addClass('hidden');
							$('aside h3').html(LastName + ' Family');

							$('.main_wrapper h2').html('Our Photos');
							$('.name_full').html('The ' + LastName + ' Family');
							$('title').html(LastName + ' Family | Photo Portal');
							$('.name_given').html('The ' + LastName + ' Family')

						};
						
					}
	
	};
	
	sibling.update();
	
	
});

