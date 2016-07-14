'use strict';

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

var openPopup = function openPopup() {
  var $this = $(this);
  var popupOpen = $this.attr('href');

  $(popupOpen).removeClass('-hidePopup');
  $overlay.removeClass('-hide');
  $body.addClass('popup_active');
  if (!$('#secretcode').hasClass('-hidePopup')) {
    $('#userSecretCode').focus();
  }
};

var closePopup = function closePopup() {
  $('.-action').addClass('-hidePopup');
  $('.imagePopup').removeClass('-show');
  $overlay.addClass('-hide');
  $body.removeClass('popup_active');
};

$('.openInfoPopup').on('click', function (e) {
  e.preventDefault();
  openInfoPopup.call(this);
});

var openInfoPopup = function openInfoPopup(popupOpen) {
  var $this = $(this);
  var popupOpen = popupOpen || $this.attr('href');

  $(popupOpen).removeClass('-hidePopupTop');

  setTimeout(function () {
    $(popupOpen).addClass('-hidePopupTop');
  }, 2000);
};

$('[data-image]').on('click', function (e) {
  e.preventDefault();

  var imageUrl = $(this).data('image');

  $('.imagePopup img').attr('src', imageUrl);
  $('.imagePopup').addClass('-show');
  $overlay.removeClass('-hide');
  $body.addClass('popup_active');
});

$('.imagePopup .close').on('click', function (e) {
  e.preventDefault();
  closePopup();
});

$('[href="#login"]').on('click', function (e) {
  $('#userPhoneNumber').focus();
});

// if(!$('#secretcode').hasClass('-hidePopup')) {
//   $('#userSecretCode').focus()
// }