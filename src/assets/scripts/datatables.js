$(document).ready(function () {
  var initDataTables = function ($sorting) {
		return $sorting.DataTable({
			paging: false,
			searching: false,
			lengthChange: false,
			info: false,
			pagingType: "simple_numbers",
			iDisplayLength: 3,
			"order": [[0, "asc"]],
			'aoColumnDefs': [
				{
					'bSortable': false,
					'aTargets': ['nosort']
				}
			]
		});
	}

	// Table Loading

	var tableLoading = function (options) {

		if (options.$this) {
			options.$this.after('<div class="cssload-loader"><div class="cssload-side"></div><div class="cssload-side"></div><div class="cssload-side"></div><div class="cssload-side"></div><div class="cssload-side"></div><div class="cssload-side"></div><div class="cssload-side"></div><div class="cssload-side"></div></div>');
			options.$this.hide();
		}

		setTimeout(function () {
			$.ajax({
		    method: 'get',
		    crossDomain: true,
		    type: 'POST',
		    dataType: "json",
		    url: options.url,
		    success: function(response) {

					if (options.$this) {
						options.$this.next().remove();
						options.$this.remove();
					}

					var responseObj = [];

					for (var i = 0; i < response.length; i++) {
						var j = 0;
						responseObj[i] = [];
						for (var variable in response[i]) {
							if (response[i].hasOwnProperty(variable)) {
								responseObj[i][j] = [];
								responseObj[i][j][0] = response[i][variable][0];
								responseObj[i][j][1] = response[i][variable][1];
								j++;
							}
						}
					}

					for (var i = 0; i < responseObj.length; i++) {

						var responseObjData = [];
						for (var k = 0; k < responseObj[i].length; k++) {
							responseObjData.push(responseObj[i][k][0]);
						}

						var index = sortingTable.row.add(responseObjData).draw(false).index();


						$(sortingTable.row(index).node()).find('td').each(function (key, el) {
							$(el).attr('data-order', responseObj[i][key][1]);
              $(el).wrapInner('<span></span>')
						});
					}
		    },
		    error: function(response) {
		      return console.log('Error');
		    }
		  });
		}, 2500)
	}

	if($(".sorting_table").length > 0) {
		var sortingTable = initDataTables($(".sorting_table"));

    $('.sorting_table').each(function (i, el) {
      tableLoading({url: $(el).data('url'), '$this': $('#table_start')})
    })
	}

	$('.table_block--expand_link').on('click', function (e) {
		e.preventDefault();
		var tr = '';
		var $this = $(this);

		var options = {
			'url': $this.data('url'),
			'$this': $this
		};

		tableLoading(options);
	});
});
