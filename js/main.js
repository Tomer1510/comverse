$(document).ready(function(){

	$("#open_mobile_menu").click(function(){
		$('.mobile_menu').slideToggle();
	});

	$("#slideshow_controls .slideshow_dot").click(do_slideshow);

	function do_slideshow() {
		var total = 5;
		// support click event handling on one of the li's
		var current = (!! $(this).data('nth'))?$(this).data('nth'):$("#slideshow_controls .slideshow_dot.selected").data('nth')+1;
		if (current > total)
			current = 1;
		$("#slideshow_controls .slideshow_dot.selected").toggleClass('selected');
		$("#slideshow_controls .slideshow_dot[data-nth="+current+"]").toggleClass('selected');
		$("#main-content > section:nth-child(1)").attr('data-slideshow', current);

		clearTimeout(slideshow);
		slideshow = setTimeout(do_slideshow, 2500);
	}

	var slideshow = setTimeout(do_slideshow, 2500);
});