$('.-search').on('focus', function (e) {
	$(this).val('')
	$(this).parent().find('.icon').html('')
	$(this).closest('.searchCountries').removeClass('-with_flag')

	var _this = this;
	$(this).next().find('li').removeClass('active');
	searchCountries(this);
	setTimeout(function () {
		$(_this).next().removeClass('-hide');
	}, 150);

}).on('keyup', function (e) {
	var $list = $(this).next();
	var $listLiActive = $list.find('li.active');

	if (e.which == '38') {
		if ($listLiActive.length != 0) {
			var $curentLi = $list.find('li.active');

			var $allLi = $list.find('.visibleLink');
			var count;

			$allLi.each(function (i, el) {
				if ($(el).hasClass('active')) {
					count = i;
				}
			});

			$curentLi.removeClass('active');
			$($allLi[count-1]).addClass('active');
			var count = 0;
		}
	}

	if (e.which == '40') {
		if ($listLiActive.length == 0) {
			$($list.find('.visibleLink')[0]).addClass('active');
		} else {
			var $curentLi = $list.find('li.active');

			var $allLi = $list.find('.visibleLink');
			var count;

			$allLi.each(function (i, el) {
				if ($(el).hasClass('active')) {
					count = i;
				}
			});

			$curentLi.removeClass('active');
			$($allLi[count+1]).addClass('active');
			var count = 0;
		}
	}

	if (e.which == '13') {
		var val = $(this).next().find('.active').data('val');
		if (val) {

			var flag = $(this).next().find('.active').find('.flag');
			$(this).parent().find('label .icon').html($(flag).clone());
			$(this).closest('.searchCountries').addClass('-with_flag')

			$(this).val(val);
			$(this).blur();
		}

		var data = $(this).next().find('.active').data('rates');
		var $result = $(this).next().next();
	}
}).on('blur', function () {
	var _this = this;

	setTimeout(function () {
		$(_this).next().addClass('-hide');
		$(_this).next().find('li').removeClass('active');
	}, 200);
});

$('.searchCountries.-rates .-search').on('keyup', function (e) {
	if (e.which == '13') {
		var data = $(this).next().find('.active').data('rates');
		var $result = $(this).next().next();
		setSearchCountriesResult(data, $result)
	}
});


$('.searchCountries form').submit(function (e) {
	e.preventDefault();
});

// $('.-activeInput li').on('click', function () {
$('.searchCountries li').on('click', function () {
	var flag = $(this).find('.flag');
	$(this).closest('.searchCountries').addClass('-with_flag')
	$(this).parent().prev().prev().find('.icon').html($(flag).clone());

	$(this).parent().prev().val($(this).data('val'));
});

$('.searchCountries.-rates li').on('click', function () {
	var data = $(this).data('rates');
	var $result = $(this).parent().next();

	setSearchCountriesResult(data, $result)
});

var setSearchCountriesResult = function (data, $result) {
	$result.find('.searchCountries--phone p').html(data.land);
	$result.find('.searchCountries--mobile p').html(data.mob);
	$result.find('h2').html(data.country);
	$result.find('img').attr('src', './assets/images/content/planets/'+data.image+'.png');
}

var searchCountries = function (_this) {
	var filter = $(_this).val().replace('+',''), count = 0, unvis = 0;
	var commonCount = $(_this).next().find('li').length;

	$(_this).next().find('li').each(function(){
		var $this = $(this);

		if ($this.data('val').search(new RegExp(escape(filter), "i")) < 0) {
			$(this).fadeOut(150);
			$this.removeClass('visibleLink');
			unvis++;
		} else {
			$(this).show();
			$this.addClass('visibleLink');
			count++;
		}
	});

	if (unvis == commonCount) {
		$(_this).next().addClass('-empty');
	} else {
		$(_this).next().removeClass('-empty');
	}
}
$('.-searchCountries').keyup(function () { searchCountries(this); });

$('.searchCountries--rates').on('click', function () {
	$(this).next().val('');

	if ($(this).nextAll().eq(1).hasClass('-hide')) {
		$(this).next().focus();
	} else {
		$(this).next().blur();
	}
});
