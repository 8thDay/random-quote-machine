$(document).ready(function(){
  
  var quoteText, quoteAuthor;

  function getQuote() {
    var url = "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?";
    $.getJSON(url, function(quoteData) {
      quoteText = quoteData.quoteText;
      quoteAuthor = quoteData.quoteAuthor;
      if (quoteAuthor == "") {
        quoteAuthor = "Unknown";
      }
      $("#quote>p").html(quoteText);
      $("#author>p").html(quoteAuthor);
    });
  };
  
  getQuote();
  
  $("#tweetQuote").on("click", function(){
    window.open("https://twitter.com/intent/tweet?text=" + quoteText + " - " + quoteAuthor);
  });

  $("#getNewQuote").on("click", function(){
    getQuote();
  });
  
});

