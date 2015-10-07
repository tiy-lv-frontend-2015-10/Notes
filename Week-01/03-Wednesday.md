
# Intro to Positioning and Command Line 101

## You wanted zsh - here it is :D
Run this command in your terminal:
`sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"`

## What is the terminal?

A program that allows you to inter text commands to interact with the unix shell

## What is a unix shell?

A unix shell is a scripting language that allows interacting with the underlying unix based operating system

## How do the commands work?

A command is the name of a file to execute. You specify the file and any flags or arguments.


## What files? (commands)

When you run a command, the shell looks for an executable file in the system path. For now you can think of the system path as just a list of locations on your computer that your shell looks for scripts to run.

## What about those flags or arguments?

Commands can have flags or arguments. The syntax is always to seperate the command, flags, and arguments by a space.

An argument is any value that you pass to a command.

A flag is a specific argument (from a list of available flags) that the command is expecting. Flags generally start with one or two dashes. Two dashes for a long form flag like `--version` and 1 for a short form flag like `-v`.

There is one other type of argument and that is the named argument. This is a command that accepts many different types of arguments and uses a flag to specify what argument you are setting followed by the actual argument.

## How do those paths work?

* / means the "root" or "parent" of your computer file system (an absolute path always starts with /)
* . means the current folder
* .. means the parent directory
* files and folders are seperated with /
* paths with spaces will need to be escaped or wrapped in quotes -- why is this?

-----

## Github Pages

* Github pages are a nifty feature that github offers to allow you to view your files online for free without the need of a host. Just push up your project to a gh-pages branch, and you're good to go.
* How to create that branch:
    - navigate in your terminal to the project directory `cd ~/TIY-Projects/myProject` (replace myProject with whatever the name of your project is)
    - create a new branch called gh-pages: `git checkout -b gh-pages`
    - push the gh-pages branch to github: `git push origin gh-pages`

-----

## Box Model

Every element on the page is a box. Every box can be styled with a border, background, etc. There are 4 parts to the box:

* Content
* Padding
* Border
* Margin

By default when you set the `width` of an element, you are specifing the width of the content portion of the box only. Any padding, border, and margin will be added to the width. For example, if you had a div with the styles:

```css
{
  width: 100px;
  border: 1px solid red;
  padding: 10px;
}
```

The full width of the entire box would be `122px` because it has the border and margin on each side of the content:

| Margin | Border | Padding | Content | Padding | Border | Margin |
|--------|--------|---------|---------|---------|--------|--------|
| 0 | 1px | 10px | 100px | 10px | 1px | 0 |

0 + 1 + 10 + 100 + 10 + 1 + 0 = 122

*Protip* - You can view the box model pertaining to any element in the chrome development tools by right clicking on that element, selecting `Inspect Element`, and clicking on `Computed` located in the right panel.


#### Box Sizing

You can change the way __width__ works on boxes using the `box-sizing` css property. The default value for this is `content-box` which works as described above where the width property only applies to the content of the box. The other possible values are:

* `padding-box` the __width__ property is applied to the content plus the padding
* `border-box` the __width__ property is applied to the content, padding and border


## Positioning

[CSS Positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/position)

* `position:relative;`
* `position:absolute;`

Introduction of `top`, `right`, `bottom`, `left` and `z-index`

## Floating

* `float: left;`
* `float: right;`
* `float: none'`

[Clearfix Hack](http://learnlayout.com/clearfix.html)
[Floating boxes](http://s.codepen.io/jisaacks/debug/myOpLJ)


## Links / Resources

* [HTML Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes)
* [CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/Selectors)
* [CSS Z-INDEX](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Understanding_z_index/The_stacking_context)
* [Learn Layout](http://learnlayout.com/)
* [Try Git](https://try.github.io/levels/1/challenges/1)
* [Git Manual](http://git-scm.com/doc)