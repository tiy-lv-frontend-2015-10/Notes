## Review

* [You Might Not Need jQuery](http://youmightnotneedjquery.com/)
* [Zepto](http://zeptojs.com/)

## Install Party 

* [JSON Formatter](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en)

## Underscore.js

Underscore is a JavaScript library that provides a lot of functional programming that you would normally see in other languages (like Ruby or Python) and it does all of it without extending any of the built-in JavaScript objects.

Underscore.js is a cool little JavaScript library that brings a ton of functionality at a around 4kb.

> Also, you can checkout [Lodash](http://lodash.com) as an alternative. I'm fine no matter which one you choose.

### Underscore Functions

```js
// Some Data
var people = [
        {
                name: 'Tim',
                location: 'Atlanta'
        },
        {
                name: 'Jeff',
                location: 'Kansas City'
        },
        {
                name: 'Doug',
                location: 'Topeka'
        },
        {
                name: 'Bill',
                location: 'Ft. Myers'
        }
];

// Let's Iterate
_.each(people, function (p) {
        console.log(p);
});

// Let's Map a new array
var greetings = _.map(people, function (p) {
        return "Hi, my name is " + p.name;
});
console.log(greetings); // ["Hi, my name is Tim", "Hi, my name is Jeff", "Hi, my name is Doug", "Hi, my name is Bill"]

// Let's search through our array for one single object
var bill = _.findWhere(people, {name: "Bill"});
console.log(bill); // Object {name: "Bill", location: "Ft. Myers"}

// Let's `pluck` out a specific set of data
var locations = _.pluck(people, 'location');
console.log(locations); // ["Atlanta", "Kansas City", "Topeka", "Ft. Myers"]
```

### Underscore Templates

```html
<script type="text/template" id="item-template">
    <li class="item">
        Item Name: <%= name %>
    </li>
</script>
```

```js
    // Grab the template string.
    var templateString = $('#item-template').text();

    // Turn it into a template function.
    var renderTemplate = _.template(templateString);

    // Pass in an object. Return value is a string
    // with the bee stings replaced with object's properties
    var freshHTML = renderTemplate({name: 'Beer Mug'});

    // Inject the fresh html into the page.
    $('.some-container').append(freshHTML);
```