## Hexidecimal

convert decimal to hex:

```javascript
(255).toString(16); // ff
```

convert hex to decimal:

```javascript
parseInt('ff', 16); // 255
```

## CSS Transitions

```html
.element {
    transition: [transition-property] [transition-duration] [transition-timing-function] [transition-delay];
}
```

```html
div {
  transition: background-color 0.5s ease;
  background-color: red;
}
div:hover {
  background-color: green;
}
```

## jQuery

#### Event Handling

`el.addEventListener('click', listener);`

In jQuery we can use the [`.on()`](http://api.jquery.com/on/) or break it down to using `.click()`, `.hover()` etc. (See below for more events)

Each of these events takes a callback and provides us access to the element we are working with.

```js
$('.box1 button').on('click', function () {
  // Statements go in here
  // Refer to the element we are working with $(this)
  $(this).removeClass('box'); // this removes the class of `box` from the element
});
```

#### Event Delegating

```js
$('.box1').on('click', 'button', function () {
  // Statements go in here
  // Refer to the element we are working with $(this)
  $(this).removeClass('box'); // this removes the class of `box` from the element
});
```

Same as before, only this time we are using one event listener instead of an even listener for every button. This also make the event work if new buttons get added later.


## Resources

* [jQuery API](http://api.jquery.com)