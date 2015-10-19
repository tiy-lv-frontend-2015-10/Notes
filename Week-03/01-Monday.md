### `if` Statements Reviews

> Make sure to use them right

```js
if ( expression ) {
  // Truthy Statements
} else {
  // Falsy Statements
}

if (statement || statement || statement && statement) {
  // Only if one of the first three
  // AND the last statement are truthy
}
```


### Ternary

> The conditional (ternary) operator is the only JavaScript operator that takes three operands. This operator is frequently used as a shortcut for the if statement.

```js
// Ternary
// condition ? expr1 : expr2
var iscool = (5 > 1) ? true : false;
```


## Review Arrays & Iterations

### Start with an array

```js
var names = ['tim', 'sean', 'greg', 'bill', 'julie', 'sam', 'linda'];
```

Each one of the following iterations will spit out each name as it loops through them.

### forEach

```js
names.forEach( function (name) {
  console.log(name);
});
```

### for ... in

Iterates over the properties of an object, in arbitrary order.

For each property, statements can be executed.

```js
for (var i in names) {
  console.log(names[i]);
}
```

### for loop

Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement executed in the loop.

```js
for (var i = 0; i < names.length; i++) {
  console.log(names[i]);
}
```

### while loop

Creates a loop that executes a specified statement as long as the test condition evaluates to truthy. The condition is evaluated before executing the statement.

```js
var x = 0;
while ( x < names.length ) {
  console.log(names[x]);
  i++;
}
```

## Window Timers

* [Docs HERE](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers)

```js
// window.setInterval() usae
var intervalID = window.setInterval(animate, 500);
window.clearInterval(intervalID);
```


## jQuery

Simple Review of DOM API

```js
document.querySelectorAll('a');

document.getElementByID('container');

document.getElementsByClassName('page_title');
```

> jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.


* DOM Traversal and Manipulation
* Event Handling
* Ajax


#### Namespacing

`$` or `jQuery` - [`noConflict()`](https://api.jquery.com/jquery.noconflict/)

#### Grabbing elements in the DOM

```html
<div class="box box1"></div>
<div class="box box2"></div>
```

```js
$('.box'); // Grabs both boxes
$('.box1'); // Grabs just the first box
```

#### Chaining

```js
$('.box').html('Hello World').addClass('animated').css('margin-left, 25px');
```

#### Methods for editing attributes & content

* `addClass()`
* `removeClass()`
* `toggleClass()`
* `html()`
* `text()`

#### Event Handling

`el.addEventListener('click', listener);`

In jQuery we can use the [`.on()`](http://api.jquery.com/on/) or break it down to using `.click()`, `.hover()` etc. (See below for more events)

Each of these events takes a callback and provides us access to the element we are working with.

```js
$('.box1').on('click', function () {
  // Statements go in here
  // Refer to the element we are working with $(this)
  $(this).removeClass('box'); // this removes the class of `box` from the element
});
```

## Resources

* [jQuery API](http://api.jquery.com)