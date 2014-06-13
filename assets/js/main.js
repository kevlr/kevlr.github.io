$(document).ready(function(){
	
	prettyPrint();
	
	$('.to-components').on('click', function(e){
		e.preventDefault();
		$(this).closest('ul').find('li').removeClass('active');
		$(this).closest('li').addClass('active');
		$('body').addClass('components-menu-open');
	});
	
	$('.to-expand').on('click', function(e){
		e.stopPropagation();
		e.preventDefault();
		$(this).find('.nav-icon').toggleClass('expand-icon collapse-icon');
		$('body').toggleClass('menu-expanded');
	});
	
	$(document).on('click', '.menu-expanded', function(){
		$(this).removeClass('menu-expanded');
		$('.collapse-icon').toggleClass('expand-icon collapse-icon');
	});
	
	window.addEventListener('load', function() {
		new FastClick(document.body);
	}, false);
});