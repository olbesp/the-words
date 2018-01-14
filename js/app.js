$(document).ready(function() {

  var getNextQuote = function() {
    $.ajax( {
      url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=',
      success: function(data) {
        var post = data.shift(); // The data is an array of posts. Grab the first one.

        $('.quote-box').fadeOut(200, function() {
          $('#quote-title').html(post.title);
          $('#quote-content').html(post.content);
          $(this).fadeIn(200);
        });

        // If the Source is available, use it. Otherwise hide it.
        if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
          $('#quote-source').html('Source:' + post.custom_meta.Source);
        } else {
          $('#quote-source').text('');
        }
      },
      cache: false
    });
  };

  getNextQuote();

  $('#btn-next-quote').on('click', function(e) {

    e.preventDefault();

    getNextQuote();
  });

  $('#tweetBtn').on('click', function() {
    var currentQuote = $('#quote-content').text();
    var currentAuthor = $('#quote-title').text();
    var tweet = 'https://twitter.com/intent/tweet?text=' + currentQuote + ' (' + currentAuthor + ')';
    $(this).attr('href', tweet);
  });

});
