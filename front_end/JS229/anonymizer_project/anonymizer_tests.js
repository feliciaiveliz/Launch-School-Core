let $ol = document.querySelector("ol");

function outputResult(message) {
  let $li = document.createElement("li");
  $li.innerText = message;
  $ol.appendChild($li);
  return $li;
}

function test(message, assertion) {
  let $msg = outputResult(message),
      passed = false;

  try {
    passed = assertion();
  }
  catch (e) {
    passed = false;
  }
  $msg.setAttribute("class", passed ? "pass" : "fail");
}

// fooBar object
(function() {
  let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');

  test("firstName is defined", function() {
    return typeof fooBar.firstName !== undefined;
  });

  test("firstName returns the firstName function", function() {
    return typeof fooBar.firstName === 'function';
  })
  
  test("firstName function returns 'foo'", function() {
    return fooBar.firstName('123456') === 'foo';
  });

  test("lastName is defined", function() {
    return typeof fooBar.lastName !== undefined;
  });

  test("lastName function returns 'bar'", function() {
    return fooBar.lastName('123456') === 'bar';
  });
  
  test("displayName property is defined", function() {
    return typeof fooBar.displayName !== undefined;
  });
  
  test("displayName a 16-character name", function() {
    return fooBar.displayName.length === 16;
  })
})();

// bazQux object
(function() {
  let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
  test("firstName returns 'baz'", function() {
    return bazQux.firstName('123456') === 'baz';
  })

  test("lastName returns 'qux'", function() {
    return bazQux.lastName('123456') === 'qux';
  })
})();
