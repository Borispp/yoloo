var $overlay = $('#overlay');
var $body = $('body');

$('.openPopup').on('click', function (e) {
  e.preventDefault();
  closePopup();
  openPopup.call(this);
});

$('#overlay, .closePopup').on('click', function (e) {
  e.preventDefault();
  closePopup();
});

$('.-action').on('click', function (e) {
  if (e.target.className == 'popup -action') {
    closePopup();
  };
});

var openPopup = function () {
  var $this = $(this);
  var popupOpen = $this.attr('href');

  $(popupOpen).removeClass('-hidePopup');
  $overlay.removeClass('-hide');
  $body.addClass('popup_active');
}

var closePopup = function () {
  $('.-action').addClass('-hidePopup');
  $overlay.addClass('-hide');
  $body.removeClass('popup_active');
}

$('.openInfoPopup').on('click', function (e) {
  e.preventDefault();
  openInfoPopup.call(this);
});

var openInfoPopup = function (popupOpen) {
  var $this = $(this);
  var popupOpen = popupOpen || $this.attr('href');

  $(popupOpen).removeClass('-hidePopupTop');

  setTimeout(function () {
    $(popupOpen).addClass('-hidePopupTop');
  }, 2000);
}
