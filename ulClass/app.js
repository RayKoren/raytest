var array = [];

var event = new CustomEvent('test');
var key = event.keyCode;

$('body').keyDown(function() {
  var key = test.keyCode;
  array.push(key);
  console.log(array);

   }, false);
