$(document).ready(function() {

  $('#tweet-text').on("keyup", function() {
    const counter = $('.counter');
    const textLength = $('#tweet-text').val().length;
    $('.counter').val(140 - textLength);

    counter.val() <= 0 ? counter.css('color', 'red') : counter.css('color', '#545149');
  });
});