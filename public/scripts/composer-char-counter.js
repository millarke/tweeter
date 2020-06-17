$(document).ready(function() {
  // --- our code goes here ---
  console.log("yes page loaded good");


  $('#tweet-text').on("keyup", function() {
    const counter = $('.counter');
    const textLength = $('#tweet-text').val().length;
    $('.counter').val(140 - textLength);
    // if (counter.val() <= 0) {
    //   counter.addClass('red');
    // } else {
    //   counter.removeClass('red');
    // }

    // if (counter.val() <= 0) {
    //   counter.css('color', 'red');
    // } else {
    //   counter.css('color', '#545149');
    // }

    counter.val() <= 0 ? counter.css('color', 'red') : counter.css('color', '#545149');
  });

// .css jqueary can add new html to a property add new html


  // // need to detect keypresses
  // document.addEventListener("keypress", (event) => {
  //   console.log(event);
  // });

  // // need to update the char counter as textbox if interacted with
  // const form = document.getElementsByClassName("form", function(event) {
  //   console.log("hello world!")
  // });



  //



});