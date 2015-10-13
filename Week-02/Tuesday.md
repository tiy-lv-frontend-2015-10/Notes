# Javascript Cont'd

### Callbacks

A __callback__ is a function that is passed as an argument to another function. Generally this is used as a way to specify a piece of code to run at a later time.

```javascript
function myCallback(data) {
  console.log("got data: " + data);
}

function usingItNow (callback) {
  callback('this is the data');
}

usingItNow(myCallback);
```

However, this code and be shorted to:

```javascript
function usingItNow (function(){
  console.log("got data: " + data);
})

usingItNow(myCallback);
```

Noticed how the function was passed directly as the argument. Also notice how the function was not given a name. This is called an _anonymous_ function.

### Objects

In Javascript, there are primitives, like `string`, `number`, `boolean`, `null`, and `undefined`. And then there are objects. Every data type in Javascript falls into these 2 categories.

The term `objects` is a **liberal** term. There are many types of objects, all of which descend from the base `Object`.

Objects can be created by using the `new` keyword: `new Object()`.

Objects can have variables and functions attached to them, which are referred to as properties and methods respectively.

```javascript
var myObject = new Object();
myObject.firstName = "Michael";
console.log(myObject.firstName); // Michael
```

__Literals__

One of the most common ways objects are express are through `object literals` and are expressed using a 'literal' syntax. For example, you can create the previous example using the literal syntax like so:

```javascript
var myObject = {firstName: "Michael"};
console.log(myObject); // Michael
```

It can be shortened even further to:

```javascript
console.log({firstName:"Michael"}.firstName); // Michael
```

Object literals are often used for storing key/value pairs.

__Array__
Arrays are a special type of object for storing lists

An array can be create like so:

```javascript
var myArray = new Array(1,2,3);
```

However, like the base object, they are usually created using a literal:

```javascript
var myArray = [1,2,3];
```

#### Functional Programming

There are several functional methods that can be performed on arrays to do very useful things.

Each functional method on Array will iterate through all of the values on the array and invoke a function for each value. However, the end purpose is different for each method.

__forEach__

the `forEach` method is the most generic of them all. It justs invokes a function _for each_ value with no specific purpose.

For example, to `console.log` every value in the array:

```javascript
[1,2,3].forEach(function(value){
  console.log(value);
});
```

__filter__

the `filter` method is used for _filtering_ an array down to a specific subset of values. The function is as a test to check each value if it meets a criteria to be included in the result or not.

For example to filter an array of words to just long words:

```javascript
["to", "information", "the"].filter(function(word) {
  return word.length > 4;
});
```

__map__

the `map` method is used to `mapping` or transforming each value in the array. The function take the origin value, performs a transformation and returns the new value.

For example to double every number in an array:

```javascript
[1,2,3].map(function(value) {
  return value * 2;
});
```

__reduce__

the `reduce` method can be harder to wrap your head around. It is used to transform the entire array of values into a single value. It can be used for many different situations but the easiest to understand is to sum an array of values:

```javascript
[1,2,3].reduce(function(a, b) {
  return a + b;
});
```



### Resources

* [function expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)
* [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
* [Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Literals)
* [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)