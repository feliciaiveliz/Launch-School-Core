var $ol = document.querySelector("ol");

function outputResult(message) {
  var $li = document.createElement("li");
  $li.innerText = message;
  $ol.appendChild($li);
  return $li;
}

function test(message, assertion) {
  var $msg = outputResult(message),
      passed = false;

  try {
    passed = assertion();
  }
  catch (e) {
    passed = false;
  }
  $msg.setAttribute("class", passed ? "pass" : "fail");
}

test("create is defined", function() {
  return typeof create !== undefined;
});

test("update is defined", function() {
  return typeof update !== undefined;
});

test("delete is defined", function() {
  return typeof deleteItem !== undefined;
});

test("items is defined", function() {
  return typeof items !== undefined;
});

test("inStock is defined", function() {
  return typeof inStock !== undefined;
});

test("itemsInCategory is defined", function() {
  return typeof itemsInCategory !== undefined;
});

