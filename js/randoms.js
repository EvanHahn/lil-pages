function randomInteger() {
  var arr = new Uint32Array(1);
  crypto.getRandomValues(arr);
  return arr[0];
}

function randomPassword() {
  var SIZE = 40;
  var arr = new Uint8Array(SIZE);
  crypto.getRandomValues(arr);
  var result = "";
  for (var i = 0; i < SIZE; i ++) {
    var code = (arr[i] % 94) + 33;
    result += String.fromCharCode(code);
  }
  return result;
}

function go() {
  $("#number").text(randomInteger());
  $("#password").text(randomPassword());
}

$("#reset").on("click", go);
go();
