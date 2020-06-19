const renderTweets = function(tweets) {
  for (let tweet of tweets) {
    $('.tweets-list').prepend(createTweetElement(tweet));
  }
};

const createTweetElement = function(tweet) {
  let $tweet = `
  <article class="tweet-container">
    <header class="tweet-header">
      <div>
        <img src="${tweet.user.avatars}" alt="https://i.imgur.com/5fUVPRP.png">
        <h3 class="tweet-username">${tweet.user.name}</h3>
      </div>
      <span class="handle">${tweet.user.handle}</span>
    </header>
      <p class="word-wrap">${escape(tweet.content.text)}</p>
      <hr>
    <footer class="tweet-footer">
      <p class="date-posted">${Math.round(((Date.now() - tweet.created_at) / 1000 / 60 / 60 / 24) * 10) / 10} Days Ago</p>
      <span class="action-icons">
        <i class="fa fa-flag" aria-hidden="true"></i>
        <i class="fa fa-retweet" aria-hidden="true"></i>
        <i class="fa fa-heart" aria-hidden="true"></i>
      </span>
    </footer>
  </article>`;

  return $tweet;
};

const fetchTweets = function() {
  $.ajax({
    url: `/tweets`,
    method: 'GET'
  }).then(function(response) {
    $('.tweets-list').empty();
    renderTweets(response);
  });
};

const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

$(document).ready(function() {
  fetchTweets();

  $('.new-tweet-form').on('submit', (event) => {
    event.preventDefault();

    const textLength = $('#tweet-text').val().length;

    if (textLength > 140) {
      $('.error').text("Tweet too long! It's a tweet not a tweeeeet!").slideDown(1000);
    } else if (textLength <= 0 || textLength === null) {
      $('.error').text("You need a tweet first before you can tweet something!").slideDown(1000);
    } else {
      $.post('/tweets', $('.new-tweet-form').serialize())
        .then(function(response) {
          $('#tweet-text').val('');
          $('.counter').val(140).css('color', '#545149');
          $('.error').slideUp(1000);
          fetchTweets();
        });
    }
  });
});