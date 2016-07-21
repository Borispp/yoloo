'use strict';

// Tooltip
$('.tooltip .closePopup').on('click', function (e) {
	e.preventDefault();
	$(this).closest('.tooltip').addClass('-hideTooltip');
});

$('[data-tooltip]').on('click', function (e) {
	e.preventDefault();
	var $this = $(this);
	setTimeout(function () {
		$($this.data('tooltip')).removeClass('-hideTooltip');
	}, 4);
});

$('body').on('click', function (e) {
	$('.tooltip').addClass('-hideTooltip');
});

// Alphabet
$('.countriesCatalog--alphabet a').on('click', function (e) {
	e.preventDefault();
	var letter = $(this).attr('href');

	$('.countriesCatalog--list ul').addClass('-fade');
	$(letter).removeClass('-fade');
});

// Animated scroll
var $page = $('html,body'),
    $body = $('body');
var scrollToPage = function scrollToPage(target) {
	var y;
	y = 0;
	if (target && $(target).length) {
		y = $(target).offset().top;
	}
	$page.animate({
		scrollTop: y
	}, 'slow', 'swing');
};
$('.scrollto').on('click', function (e) {
	e.preventDefault();
	return scrollToPage($(this).attr('href'));
});

// Autocomplete
var largeInputCheck = function largeInputCheck(val) {
	if (val) {
		$(this).next().addClass('-non_empty');
	} else {
		$(this).next().removeClass('-non_empty');
	}
};

$('.input_large input, .input_large textarea').each(function (i, el) {
	var val = $(el).val();
	largeInputCheck.call(el, val);
});

$('.input_large input, .input_large textarea').on('blur', function () {
	var val = $(this).val();
	$(this).parent().removeClass('-focus');
	largeInputCheck.call(this, val);
}).on('focus', function () {
	$(this).parent().addClass('-focus');
});

$('.autocomplete .input').on('autocompleteopen', function (event, ui) {
	var lp, position, tp;
	// console.log($(this).width());
	// $('.ui-autocomplete.ui-widget-content').css({'width' : $(this).width()+4+'px'});

	// $(this).addClass('m-open');

	position = parseInt($('.ui-autocomplete').css('top'));
	// lp = position.left - 50;

	$('.ui-autocomplete').css({
		top: position - 2 + 'px'
	});
});

// Questions
$('.question--menu h2 a').on('click', function (e) {
	e.preventDefault();

	if (!$(this).closest('li').find('ul').is(':visible')) {
		$('.question--menu li').removeClass('-active');
		$('.question--menu li ul').slideUp(200);
		$(this).closest('li').find('ul').slideDown(200);
		$('.question--menu li').removeClass('-active');
		$(this).closest('li').addClass('-active');
	}
});

$('.openQuestion').on('click', function (e) {
	var open = $(this).attr('href');
	$('.openQuestion').removeClass('-active');
	$(this).addClass('-active');

	$('.question--content').addClass('-hide');
	$(open).removeClass('-hide');
});

// User menu editable
$('.user_info--name').on('click', function (e) {
	$(this).find('span').addClass('-hide');
	$(this).find('h2 input').removeClass('-hide').val($(this).find('span').html()).focus();
	$('.user_menu--save').removeClass('-hide');
});

$('.user_info--email').on('click', function (e) {
	$(this).find('span').addClass('-hide');
	$(this).find('input').removeClass('-hide').val($(this).find('span').html()).focus();
	$('.user_menu--save').removeClass('-hide');
});

// Footer menu at mobiles
$('.footer--menu--items h3').on('click', function (e) {
	$('.footer--menu--items h3').removeClass('-active');
	$(this).addClass('-active');
});

// Mobile menu
$('.menu_mobile1').on('click', function (e) {
	e.preventDefault();
	var id = $(this).attr('href');

	$(id).removeClass('-mobile_hide_popup');
	$('body').addClass('popup_active');
});

$('.mobile_menu_popup .close').on('click', function (e) {
	e.preventDefault();
	$('.mobile_menu_popup').addClass('-mobile_hide_popup');
	$('body').removeClass('popup_active');
});

$('.closeBack').on('click', function (e) {
	e.preventDefault();
	$(this).closest('.mobile_menu_popup').addClass('-mobile_hide_popup');
});

$('.rates--countries--link').on('click', function (e) {
	e.preventDefault();
	$('.popup_price').removeClass('-opened');
	$('.popup_price').addClass('-closed');

	$(this).next().addClass('-opened');
	$(this).next().removeClass('-closed');
});

$('body').on('click', function (e) {

	if (!$(e.target).hasClass('rates--countries--link')) {
		$('.popup_price').removeClass('-opened');
		$('.popup_price').addClass('-closed');
	}
});

$('.popup_price').on('click', function (e) {
	e.stopPropagation();
});

$('input[name="payment_type"]').on('change', function () {
	if ($(this).attr('id') == 'credit_card') {
		$('.get_credit--card').removeClass('-hide');
	} else {
		$('.get_credit--card').addClass('-hide');
	}
});

$('.support--list h3').on('click', function (e) {
	var opened = $(this).parent().hasClass('-opened');

	$('.support--item').removeClass('-opened');

	if (!opened) {
		$(this).parent().addClass('-opened');
	}
});

$('.rates--data .closeRate').on('click', function (e) {
	e.preventDefault();
	// $(this).parent().addClass('-hide')
	$(this).parent().slideUp();
});