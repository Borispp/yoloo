'use strict';

$(document).ready(function () {
	if ($('.select').length > 0) {
		$('.select').select2({
			minimumResultsForSearch: -1
		});
	}

	var $aside = $('.aside');
	var $land = $('#land');
	var windowHeight = $(window).height();

	if ($land.length > 0) {
		var landHeight = $land.height();
		var landPosition = $land.offset().top;
	}

	var contentPosition = $('.-universe').height();

	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		var mobile = true;
	} else {
		setTimeout(function () {
			$('.hand_yoloo').addClass('-position');
			$('.main_description').addClass('-transform');

			setTimeout(function () {
				$('.hand_yoloo').addClass('-transform');
			}, 400);
		}, 900);

		window.onscroll = function () {
			var scrolled = window.pageYOffset || document.documentElement.scrollTop;

			// Universe History block
			if (scrolled > 187) {
				$aside.addClass('-top');
			}
			if (scrolled < 187) {
				$aside.removeClass('-top');
			}

			if (scrolled > contentPosition - 600) {
				$aside.addClass('-bottom');
			} else {
				$aside.removeClass('-bottom');
			}

			if (scrolled > 1000) {
				$('#land').addClass('-transform');
			} else {
				$('#land').removeClass('-transform');
			}
		};

		// document.addEventListener('touchmove', function() {
		// 		if(window.pageYOffset > 100) {
		// 		console.log(this.scrollTop());
		// 			$('.-searchCountries').addClass('fixed-input');
		// 			$('.searchCountries--icon').addClass('fixed-icon');
		// 		} else {
		// 			$('.-searchCountries').removeClass('fixed-input');
		// 			$('.searchCountries--icon').removeClass('fixed-icon');
		// 		}
		// });
	}
});