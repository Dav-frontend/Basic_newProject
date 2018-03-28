$(document).ready(function(){

	// responsive nav
	var responsiveNav = $('#toggle-nav');
	var navBar = $('.nav-bar');

	responsiveNav.on('click',function(e){
		e.preventDefault();
		console.log(navBar);
		navBar.toggleClass('active')
	});

	// pseudo active
	if($('#docs').length){
		var sidenav = $('ul.side-nav').find('a');
		var url = window.location.pathname.split( '/' );
		var url = url[url.length-1];

		sidenav.each(function(i,e){
			var active = $(e).attr('href');

			if(active === url){
				$(e).parent('li').addClass('active');
				return false;
			}
		});
	}

});

hljs.configure({tabReplace: '  '});
hljs.initHighlightingOnLoad();


$(document).ready(function() {
	var owl = $('.owl-carousel');
	owl.owlCarousel({
		loop: true,
		margin: 10,
		navRewind: false,
		autoplay: true,
		autoplayTimeout: 2000,
		responsive: {
			0: {
				items: 1
			},
			400:{
					items:2
			},
			600: {
				items: 3
			},
			1000: {
				items: 6
			}
		}
	})
})
