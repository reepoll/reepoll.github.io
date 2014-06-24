$(function(){
	var $logoImage = $(".logo");
	var $navBar = $("nav");

	$logoImage.animate({
		opacity: 0.25,
		
		}, 3000
	);

	$navBar.animate(
		{
			bottom: 25
		}, 1000
	);
});