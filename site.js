$('html').addClass('js').removeClass('no-js');
$('h3').hide();
$('a[href]').on('click', function(event) {
  window.open($(this).attr('href'), '_self');
  event.preventDefault();
});
$('button[href]').on('click', function(event) {
  window.open($(this).attr('href'), '_blank');
  event.preventDefault();
});
$('button[class]').click(function(event){
  $(this).hide();
  $('h3').show();
  });
$('abbr[title]').one('click', function() {
  var expansion = $(this).attr('title');
  var abbr = $(this).text();
  $(this).text(expansion + ' (' + abbr + ')');
  $(this).addClass('is-expanded');
});
