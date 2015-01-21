$(function(){

/***********************************************
	
	Function:	Large Menu with Header with hamburger
	Author: 	Adam Lawrence
	Contact: 	adam@adamlawrencedesign.com	
	
*************************************************/

function toTop(position, speed)
{
	$('html, body').animate(
	{
			scrollTop: position
	}, speed);
};

/************************************/

function Menu(obj, contentWrap, content, hide, speed)
{
	this.obj = obj;
	this.contentWrap = contentWrap;
	this.content = content;
	this.hide = hide;
	this.speed = speed;
	
	this.trigger = function()
	{
		contentWrap.hide();
		this.objClick();
	};
	
	this.objClick = function()
	{	
		obj.on('click',function()
		{
			contentWrap.load(content, function()
			{
				contentWrap.show(speed);
			});
		});
		this.collapse();
	};
	
	this.collapse = function()
	{	
		contentWrap.on('click', 'a', function(event)
		{
			var check = $(this).attr('class');
			if(check == 'close'){
				contentWrap.hide(speed);
				toTop(0,400);
				return false;
			}
		});
	};
	
};

/************************************/

function menuCall(obj, contentWrap, content, hide, speed)
{
	var instance = new Menu(obj, contentWrap, content, hide, speed);
	return instance;
}
	
var mainMenu = menuCall($('.menuShow'), $('menu'), 'additional/menu.html', $('.menu'),	600);	
mainMenu.trigger();

/************************************/

});
