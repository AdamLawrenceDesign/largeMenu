	
$(window).load(function() {

	// ====================================================== // 											//======  Portraits
	
	var portraits = {
					// schoolData :   eval("[" + document.getElementById('hSchoolData').value + "]"),
					data  :  eval("[" + document.getElementById('hPortraitData').value + "]"), 
					
					// ============================== //													//====== Function
					
					list : function(){
						
						for(var i  = 0; i < this.data.length; i++){
							
							var PortraitLink = 'https://advancedimage.com.au/lifebuyimages//' + this.data[i].DstImage;
							var li = $('.template_portrait').clone();
							
							li.removeClass('template_portrait hidden');
							li.find('img').attr('src',PortraitLink);
							li.find('h4').html(this.data[i].YearPhoto);
							
							$('#portrait_images').append('\n\r');
							$('#portrait_images').append(li);
							
						}
						
						var spacer = document.createElement('div');
						spacer.setAttribute('class','stretch');
						$('#portrait_images').append(spacer);
						
					},
				
					//=================================================// 									 Watermarking Images 
											
					Watermark : function(){
							var overlay = document.createElement('img');
							
							function setAttributes(el, attrs){
								for(var key in attrs){
									el.setAttribute(key, attrs[key]);
								}
							}
							
							setAttributes(overlay, {'src':'img/overlay.png','alt':'','class':'overlay'});
							$(overlay).css({'top': '35%','left': '25%', 'margin': '0','width':'50%','pointer-events':'none'});
							
							$('#portrait_images').children('li').append(overlay);

					},
				
					//=================================================// 									 //===== Label 
											
					Label : function(){
						
							var CurrentCost = parseInt(this.data[0].Cost);
							var icon = document.createElement('img');
							$(icon).css({'top': '0','left': '0', 'margin': '0','width':'60%','position':'absolute','z-index':'10','pointer-events':'none'});
							
							switch (CurrentCost){
								
								case 20 :
									$(icon).attr('src','img/icons/new_image.png');
								break;
									
								case 0 :
									$(icon).attr('src','img/icons/free_image.png');
								break;
								
							};
							
							$('#portrait_images li:first').append(icon);
							
					},
					
					// ==================================== // 									// 		Portrait Banner
					
					banner : function(){
							
							for(var i  = 0; i < this.data.length; i++){
								
								var path = 'https://advancedimage.com.au/lifebuyimages//' + this.data[i].DstImage;
								var img = document.createElement('img');//.attr('src',path); // .addClass('full border_ntl');
								$(img).addClass('full border_ntl').attr('src',path);
								//$img.addClass('full border_ntl').attr('src',path);
								//var imageObject = "<img class=\"full border_ntl \" src=\"" + bannerPathway + "\"" + " alt=\"\" style=\"padding:.2em\" />";
								$('.portrait_banner').append(img);

							}
	
							
					},
					
					//=================================================// 									 Watermarking Images 
											
					overlay : function(el){
						var overlay = document.createElement('img');
						
						function setAttributes(el, attrs){
							for(var key in attrs){
								el.setAttribute(key, attrs[key]);
							}
						}
						
						setAttributes(overlay, {'src':'img/overlay.png','alt':'','class':'overlay'});
						$(overlay).css({'top': '50%','left': '25%', 'margin': '0','width':'50%','pointer-events':'none','z-index':'10'});
						$(el).prepend(overlay);
					},
					
					
					
	}
	
	// ====================================================== // 											//======  Groups
	
	var groups = {
					data  :  eval("[" + document.getElementById('hGroupData').value + "]"), 

					// ============================== //													//====== Function
					
					list : function(){
						
						var strLength = this.data.length;
						var currentYear = new Date().getFullYear();
						
						for(var i  = 0; i < strLength; i++){															// this.data.length
							
							if( i <= 5 ){
								var GroupLink = 'https://advancedimage.com.au/lifebuyimages//' + this.data[i].ClientID + '/' + this.data[i].SubFolder + '/' + this.data[i].fileName ;
								var li = $('.template_group').clone();
								
								li.removeClass('template_group hidden');
								li.find('img').attr('src', GroupLink);
								
								var list_date = this.data[i].dateOfPhotography,
									date = list_date.substr(list_date.length - 4);
												
								li.find('span').html(date);
								
								$('#group_images').append('\n\r');
								$('#group_images').append(li);
								
								if(date == currentYear){
									var icon = document.createElement('img');
									$(icon).css({'top': '0','left': '0', 'margin': '0','width':'40%','position':'absolute','z-index':'10','pointer-events':'none'});
									$(icon).attr('src','img/icons/new_image.png');
									$(li).append(icon);
								};
								
							};
							
						}
						
						var spacer = document.createElement('div');
						spacer.setAttribute('class','stretch');
						$('#portrait_images').append(spacer);
						
					}
	}
	
	portraits.list();
	portraits.Watermark();
	portraits.banner();
	portraits.Label();
	portraits.overlay('.watermark');
	groups.list();
	
	$('.portrait_banner').cycle({															// initiate cycle
		fx:'fade', 			// Add effect here
		speed: 2000,
		timeout: 5000, 		// milliseconds = 2.5 seconds
	}).css('z-index','5');
	
	
});
