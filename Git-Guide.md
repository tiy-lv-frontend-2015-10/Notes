# Git 101

## TLDR

> Once you complete the setup below, these are the steps you will take.

* `git add .`
* `git commit -m "my commit message"`
* `git push origin <branch>` (replace with branch you want push)

## Let's Create A New Project

1. Open Terminal
2. Navigate `cd ...` to your project folder
3. Create a new project folder `mkdir new-project`
4. Change into that folder `cd new-project`
5. Initialize Git so this project will be tracked `git init`
6. Add your `.gitignore` file and add `.DS_Store` to it
7. Add your files to staging `git add .`
8. Make your first commit `git commit` and add a nice message like "Initial Commit"
9. Git as usual

## Let's Pull a Live (on Github) Project Down

1. Find the repo and copy the `SSH` link.
  - It will usually look like this `git@github.com:USER/REPO.git`
2. Open your terminal and navigate to your Projects folder
3. Run `git clone <SSH URL>`
4. This will create a folder and copy the contents to your machine.
5. Navigate into that folder `cd <folder name>`
6. Git as usual

## Github Pages

Github Pages is a free service offered by Github. This has nothing really to do with native `git` but is something nice that the rad peeps at Github gave to us. It's fairly simple, just create a branch called `gh-pages` and push it go Github and boom you are done. The only real caveat is that you need to make sure there is an `index.html` in your root of your project otherwise it will not be able to serve anything. There are some exceptions to this, but this is generally the case with serving static content.

> Pro Tip: Once Github Pages is no longer enough, you might want to look at [Divshot](http://divshot.com) or [Heroku](http://heroku.com).

##### Let's talk steps

1. Open any static site in your terminal
2. Create a `gh-pages` branch: `git branch gh-pages`
3. Push to Github: `git push origin gh-pages`

Note that if you make changes to your master (or other) branch and want those reflected in your live site, then follow these steps.

1. Checkout your `gh-pages` branch: `git checkout gh-pages`
2. Merge in your branch of choice: `git merge <branch name>`
3. Then push to Github: `git push origin gh-pages`

## Things to Remember

1. Every project needs a `Readme.md` file
2. Commit early and often
3. Always back up your code before you leave your machine and after any large feature
4. While you'll see `origin` used in the `push` and `pull` commands, at some point you'll likely have other remotes like `heroku` etc.

## Resources

* [Git (without the deep shit)](http://rogerdudler.github.io/git-guide/) - Beginner
* [Git for Beginners](http://www.sitepoint.com/git-for-beginners/) - Beginner/Intermediate
* [Hackers Guide to Git](http://wildlyinaccurate.com/a-hackers-guide-to-git/) - Advanced