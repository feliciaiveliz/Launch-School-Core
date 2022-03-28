let obj = {
  a: 'hello',
  b: 'world',
  foo() {            // method on 'obj'
    function bar() { // inner function 
      console.log(this.a + ' ' + this.b);
    }

    bar(); // calling bar function as function without explicit execution context in global object -- javascript binds the global object to the function 
  },
};

obj.foo(); // undefined undefined

// fix with 'self' or 'that'

let obj = {
  a: 'hello',
  b: 'world',
  foo() {
    let that = this;

    function bar() { // using lexical scope, bar has access to 'that', which holds the context its needs to be called on line 27
      console.log(that.a + ' ' + that.b);
    }

    bar();
  }
};

obj.foo(); // hello world

// fix with 'bind'

let obj = {
  a: 'hello',
  b: 'world',
  foo() {
    let bar = function() {
      console.log(this.a + ' ' + this.b);
    }.bind(this);
    
    bar();
  },
};

console.log(obj.foo()); // hello world

// fix with call 

let obj = {
  a: 'hello',
  b: 'world',
  foo() {
    bar() {
      console.log(this.a + ' ' + this.b);
    }

    bar.call(obj);
  },
};

console.log(obj.foo()); // hello world

// fix with arrow function 

let obj = {
  a: 'hello',
  b: 'world',
  foo() {
    let bar = () => {
      console.log(this.a + ' ' + this.b);
    }

    bar();
  },
};

console.log(obj.foo()); // hello world