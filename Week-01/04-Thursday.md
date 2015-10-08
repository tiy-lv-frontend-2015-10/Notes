## Review Day

> Make sure to check out the Git/Github guide in the Notes folder

## CSS Reset

- [Meyer Reset](http://meyerweb.com/eric/tools/css/reset/)

> CSS Reset, written by Eric Meyer, will **RESET ALL STYLES** to basically 0 to allow you to style all of the elements the way you choose.

- [Normalize](http://necolas.github.io/normalize.css/)

> Normalize.css makes browsers render all elements more consistently and in line with modern standards. It precisely targets only the styles that need normalizing.

## Forms

Forms are how a user inputs data into a web page. There are many different form elements for getting different types of inputs from the user. All form elements must be wrapped inside of a `form` element. The form element has several attributes but the 2 most common are:

* __action__ this is where the data will be sent when the form is submitted. _defaults to the current page_
* __method__ this is the type of request that is made, we will cover the different types when we cover REST

There are many types of inputs that can be used in forms to get information from the user, the most primitive is the text input:

```html
<input type="text" name="username" placeholder="Enter Your Username">
```
The attributes are:

* __type__ this is the type of input. Other common types are _hidden_, _password_, _submit_, and there are many others.
* __name__ this is what the piece of data is refered to by the program that recieves the form data after it is submitted.
* __placeholder__ this is an optional placeholder message to show in the text field if it is empty.


## Google Fonts

This is an easy way for you to add custom fonts to a webpage. You can't normally just set the font to any arbitrary font you desire. This is because in order for the font to show up on the users device, they must have that font installed on their machine, unless the stylesheet specifies where the font can be loaded from. That is precisely what Google fonts do.

You generally want to use the embeded `<link>` way if possible over the `@import` statement. This is because if you use the embeded version, both stylesheets can be downloaded simultaneously. If you use the `@import` method they will have to be downloaded sequencially. Lets assume you have your main stylesheet `main.css` and you are trying to import `fonts.css` and each one takes 5 seconds to load.

If you embed them individually they will download at the same time:

| Downloading simultaneously |
|----------------------------|
| 5 seconds to load main.css |
| 5 seconds to load fonts.css |

__5 seconds total__


If you embed the main.css and then the fonts.css gets imported from within it, they must download one after another:

| Downloading consecutively ||
|----------------------------|-----------------------------|
| 5 seconds to load main.css | 5 seconds to load fonts.css |

__10 seconds total__