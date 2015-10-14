# Javascript and the Browser (A.K.A. The "D.O.M.")

## For "Fun" - Code Challenge

- [FizzBuzz](http://c2.com/cgi/wiki?FizzBuzzTest)
- [Answers](https://gist.github.com/jaysonrowe/1592432)

## Adding Javascript to the browser

Javascript can be added to the browser via the `<script>` tag. The script tag _can_ be placed in both the `<head>` and the `<body>` tag, but is recommended (unless there is a specific reason) to load all of your scripts at the bottom of your `<body>` tag.

```html
<!-- Inline javascript code -->
<script>
  // I am javascript. Hear me mumble.
  doSometing()
</script>

<!-- External javascript code -->
<script src="my/javascript/file.js"></script>
```

## DOM

The _Document Object Model_ is the Javascript interface provided by the broweser to programmatically interact with the HTML on the webpage.

## Dom Manipulation

__document.querySelector__ and friends

Allows you to select DOM elements to manipulate or get data from. The elements can be selected the same was css selectors work. For example `document.querySelector(".foo")` will select the first element with the css class "foo".

__
Once you have selected a DOM element, there are several methods and properties that can be used on them, some of which are:

* `textContent` get the text from the element
* `getAttribute` get the value for a specific attribute

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

#### Resources
* [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
* [Document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
* [jQuery API](http://api.jquery.com)