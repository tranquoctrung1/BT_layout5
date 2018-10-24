// Main
console.log('FullStack Vietnam!')
$(document).ready(function(){
	$('.banner1 .owl-carousel').owlCarousel(
	{
		loop:true,
		margin:10,
		nav:false,
		dots: false,
		autoplay: true,
		autoplayHoverPause: true,
		autoplaySpeed: 2000,
		rtl: true,
		items: 1,
	}
	);
	$('.banner2 .owl-carousel').owlCarousel(
		{
			loop:true,
			margin:10,
			nav:false,
			dots: true,
			autoplay: true,
			autoplayHoverPause: true,
			autoplaySpeed: 2000,
			rtl: true,
			items: 1,
		}
		);
	$(".slider .owl-carousel").owlCarousel(
			{
			loop:true,
			margin:10,
			autoplay:true,
			rtl:true,
			autoplaySpeed: 2000,
			autoplayHoverPause:true,
			responsive:{
				0:{
					items:3,
					dots:true,
				},
				600:{
					items:4,
					dots:true,
				},
				1025:{
					items:5,
					dots: false,
					nav:true,
					navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
				}
			}
		});
});
