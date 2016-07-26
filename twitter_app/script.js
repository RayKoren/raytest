$(document).ready(function() {
var searchTerms;
​
  SC.initialize({
    client_id: '318481f7ce895908bcf4ac4a98688627'
  });
​
  $('form').submit(function(event) {
    event.preventDefault();
    searchTerms = $('#searchTerms').val();
    $('#results').prepend('<h4>Results for ' + searchTerms + ':</h4>');
​
    SC.get('/tracks', {
      q: searchTerms,
      license: 'cc-by-sa'
    }).then(function(tracks) {
      console.log(tracks);
​
      for (let i = 0; i < tracks.length; i++) {
        $('ol').append('<li><a href=' + tracks[i].permalink_url + '>' + tracks[i].title + '</a></li>');
      }
    });
​
  });
​
});
