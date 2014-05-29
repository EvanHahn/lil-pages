window.parse = function() {
  var a = parseInt($('#a').val());
  var b = parseInt($('#b').val());
  var o = ~(a & b);
  $('#output').html(o);
}

$.fn.ready(function() {
  $('#a').on('keyup', parse);
  $('#b').on('keyup', parse);
});
