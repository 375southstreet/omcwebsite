/*
 * Version: 2.1
 */

// Notify Plugin - Code for the demo site of HtmlCoder
// You can delete the code below
//-----------------------------------------------
(function($) {

	"use strict";

	$(document).ready(function() {
		if (($(".main-navigation.onclick").length>0) && $(window).width() > 991 ){
			$.notify({
				// options
				message: 'The Dropdowns of the Main Menu, are now open with click on Parent Items. Click "Home" to checkout this behavior.'
			},{
				// settings
				type: 'info',
				delay: 10000,
				offset : {
					y: 150,
					x: 20
				}
			});
		};
		if (!($(".main-navigation.animated").length>0) && $(window).width() > 991 && $(".main-navigation").length>0){
			$.notify({
				// options
				message: 'The animations of main menu are disabled.'
			},{
				// settings
				type: 'info',
				delay: 10000,
				offset : {
					y: 150,
					x: 20
				}
			}); // End Notify Plugin - The above code (from line 14) is used for demonstration purposes only

		};

		var carouselContainer = $('.carousel');
		var slideInterval = 5000;

			function bannerHeadingAnimation(){
				$('.bannerHeading').hide()
				var caption = carouselContainer.find('.active').find('.bannerHeading').addClass('animated fadeInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
					function (){
					$(this).removeClass('animated fadeInRight')});
			caption.slideToggle();
			}

			function bannerCaptionLevel1Animation(){
				$('.bannerCaptionLevel1').hide();
				console.log($('.bannerCaptionLevel1').hide());
				console.log('First');
				var caption = carouselContainer.find('.active').find('.bannerCaptionLevel1').addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
					function (){
						$(this).removeClass('animated fadeInUp')
					});
					console.log('Second');
					console.log($('.bannerCaptionLevel1').hide());
					caption.slideToggle();
			}
			function bannerCaptionLevel2Animation(){
				$('.bannerCaptionLevel2').hide();
				$('.bannerCaptionLevel2-1').hide();
				var caption = carouselContainer.find('.active').find('.bannerCaptionLevel2').addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
					function (){
						$(this).removeClass('animated fadeInUp')
					});
				caption.slideToggle();
				var caption1 = carouselContainer.find('.active').find('.bannerCaptionLevel2-1').addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
					function (){
						$(this).removeClass('animated fadeInUp')
					});
				caption1.slideToggle();
			}
			function bannerCaptionLevel3Animation(){
				$('.bannerCaptionLevel3').hide();
				var caption = carouselContainer.find('.active').find('.bannerCaptionLevel3').addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
					function (){
					$(this).removeClass('animated fadeInUp')
			});
			caption.slideToggle();
			}
			function bannerCaptionLevel4Animation(){
				$('.bannerCaptionLevel4').hide();
				var caption = carouselContainer.find('.active').find('.bannerCaptionLevel4').addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
					function (){
					$(this).removeClass('animated fadeInUp')
			});
			caption.slideToggle();
			}
		carouselContainer.carousel({
		interval: slideInterval, cycle: true, pause: "hover"})
		.on('slide.bs.carousel slid.bs.carousel', bannerHeadingAnimation).trigger('slide.bs.carousel')
		.on('slide.bs.carousel slid.bs.carousel', bannerCaptionLevel1Animation).trigger('slide.bs.carousel')
		.on('slide.bs.carousel slid.bs.carousel', bannerCaptionLevel2Animation).trigger('slide.bs.carousel')
		.on('slide.bs.carousel slid.bs.carousel', bannerCaptionLevel3Animation).trigger('slide.bs.carousel');

	}); // End document ready

})(jQuery);
