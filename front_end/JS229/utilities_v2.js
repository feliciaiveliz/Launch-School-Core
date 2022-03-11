(function() {

  let findObjs = function(element, properties, multiple) {
    let match = multiple ? [] : undefined;

    element.some(object => {
      let allMatch = true;

      for (let prop in properties) {
        if (!(prop in object) || object[prop] !== properties[prop]) {
          allMatch = false;
        }
      }

      if (allMatch) {
        if (multiple) {
          match.push(object);
        } else {
          match = object;
          return true;
        }
      }
    });

    return match;
  };

  let _ = function(element) {
    u = {
      first() {
        return element[0];
      },

      last() {
        return element[element.length  - 1];
      },

      without(...values) {
        let result = [];
        element.forEach(element => {
          if (!values.includes(element)) {
            result.push(element);
          }
        });

        return result;
      },

      lastIndexOf(value) {
        let index = -1;

        let size = element.length - 1; 
        for (let i = size; i >= 0; i -= 1) {
          if (element[i] === value) {
            index = i;
            break;
          }
        }

        return index;
      },

      sample(value) {
        let result = [];
        let copy = element.slice(0);
        get = function() {
          let index = Math.floor(Math.random() * copy.length);
          let element = copy[index];
          copy.splice(index, 1);
          return element;
        };

        if (!value) { return get(); }

        while (value) {
          result.push(get());
          value -= 1;
        }

        return result;
      },

      findWhere(properties) {
        return findObjs(element, properties, false);
      },

      where(properties) {
        return findObjs(element, properties, true);
      },

      pluck(key) {
        let result = [];
        
        element.forEach(object => {
          if (object[key]) {
            result.push(object[key]); 
          }
        });

        return result;
      },

      keys() {
        let result = [];

        for (let prop in element) {
          result.push(prop);
        }

        return result;
      },

      values() {
        let result = [];

        for (let prop in element) {
          result.push(element[prop]);
        }

        return result;
      },

      pick(...keys) {
        let result = {};
        keys.forEach(key => {
          if (element[key]) {
            result[key] = element[key];
          }
        });

        return result;
      },

      omit(...keys) {
        let result = {};

        Object.keys(element).forEach(key => {
          if (!keys.includes(key)) {
            result[key] = element[key];
          }
        });

        return result;
      },

      has(key) {
        return (Object.keys(element).includes(key) ? true : false);
        // or return {}.hasOwnProperty.call(element, prop);
      }
    };

    (["isElement", "isArray", "isObject", "isFunction", "isBoolean", "isString", "isNumber"]).forEach(method => {
      u[method] = function() { _[method].call(u, element); };
    });

    return u;
  };

  _.range = function(...values) {
    let result = [];
    if (values.length === 1) {
      let counter = 0;
      while(counter < values[0]) {
        result.push(counter);
        counter += 1;
      }
    } else {
      let start = values[0];
      let end = values[values.length - 1];
      while (start < end) {
        result.push(start);
        start += 1;
      }
    }

    return result;
  };

  _.extend = function(...objects) {
    let baseObject = objects.shift();

    objects.forEach(object => {
      let keys = Object.keys(object);
      keys.forEach(key => {
        baseObject[key] = object[key];
      });
    });

    return baseObject;
  };

  _.isElement = function(obj) {
    return obj && obj.nodeType === 1;
  };
  
  _.isArray = Array.isArray || function(obj) {
    return toString.call(obj) === "[object Array]";
  };
  
  _.isObject = !Array.isArray || function(obj) {
    return !!obj && (typeof obj === 'object' || typeof obj === 'function');
  };
  
  _.isFunction = function(obj) {
    return typeof obj === 'function';
  };
  
  (["Boolean", "String", "Number"]).forEach(method => {
    _["is" + method] = function(obj) {
      return toString.call(obj) === "[object " + method + "]";
    }
  });
  
  window._ = _;
})();

