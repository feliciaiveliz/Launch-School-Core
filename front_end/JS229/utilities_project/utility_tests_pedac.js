// range
// if one argument, 0 to arg
  -- start counter at 0
  -- while counter <= arg
  -- push counter to result array
  -- return array
// if two arguments, arg1 to arg2 - 1
  -- start counter at arg1
  -- while counter < arg2
  -- push counter to result array
  -- return array
//

// lastIndexOf -- find last index of passed in value
  -- iterate backwards over array
  -- start index at -1 (if element doesn't exist)
  -- if current element is equal to value, save the index to index
  -- break out of for loop
  -- return index
//

// pluck - returns an array of two values
  -- [{ foo: "bar" }, { foo: "baz" }]
  -- create result to []
  -- if key is the same in both objects, return the values of both keys
  -- get array of keys of object1
  -- if object2 keys includes current key 
     -- add value of object1 key to result
     -- add value of object2 key to result
  -- return result
//

// keys - returns array of keys that are properties on 
  -- set result to []
  -- iterate over the passed in object1
  -- push the prop to result
//

// extend - modifies original object by adding properties of new objects
  -- first object is base object
  -- iterate over the rest of the objects passed in
  -- add the property key and value to base object
  -- return base object
// 

// pick - returns new object that takes a passed in property and puts it into new object
  -- create a new empty object
  -- put objects into array
  -- if key exists in first object, add the key and value to object2
  -- return new object
//

// omit - returns a new object with properties or undefined, omits any properties that include the passed in key
  -- create a new empty object
  -- iterate over the element object's keys
  -- if the current key is not included in keys array
     -- add the key/value pair to new object
  -- return new object

// has - returns true if property exist on object, false if it does not
  -- get current object's keys into array
  --  return true if passed in key exists in the object's keys array
  -- return false