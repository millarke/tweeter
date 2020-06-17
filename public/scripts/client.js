/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];

const renderTweets = function(tweets) {
  // loops through tweets

  for (let tweet of tweets) {
    $('.tweets-list').append(createTweetElement(tweet));
  }
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
};

const createTweetElement = function(tweet) {
  // let d = new Date()
  // let datePosted = tweet.created_at - d.getTime();

  // console.log(datePosted)

  
  let $tweet = `
  <article class="tweet-container">
  <header class="tweet-header">
    <div>
      <img src="${tweet.user.avatars}" alt="https://i.imgur.com/5fUVPRP.png">
      <h3 class="tweet-username">${tweet.user.name}</h3>
    </div>
    <span class="handle">${tweet.user.handle}</span>
  </header>
    <p>${tweet.content.text}</p>
    <hr>
  <footer class="tweet-footer">
    <p>${tweet.created_at}</p>
    <span class="action-icons">
      <i class="fa fa-flag" aria-hidden="true"></i>
      <i class="fa fa-retweet" aria-hidden="true"></i>
      <i class="fa fa-heart" aria-hidden="true"></i>
    </span>
  </footer>
</article>`;

  // let result = $tweet.addClass('test-class');

  return $tweet;
};


$(document).ready(function() {
  renderTweets(data);
});


// <article class="tweet-container">
//   <header class="tweet-header">
//     <div>
//       <img src="https://i.imgur.com/73hZDYK.png" alt="https://i.imgur.com/5fUVPRP.png">
//       <h3 class="tweet-username">Newton</h3>
//     </div>
//     <span class="handle">@SirIsaac</span>
//   </header>
//     <p>If I have seen further it is by standing on the shoulders of giants</p>
//     <hr>
//   <footer class="tweet-footer">
//     <p>10 days ago</p>
//     <span class="action-icons">
//       <i class="fa fa-flag" aria-hidden="true"></i>
//       <i class="fa fa-retweet" aria-hidden="true"></i>
//       <i class="fa fa-heart" aria-hidden="true"></i>
//     </span>
//   </footer>
// </article>