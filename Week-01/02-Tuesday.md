## TLDR - Your Simple Guide to Git

1. Open Terminal
2. Navigate `cd ...` to your project folder
3. Create a new project folder `mkdir new-project`
4. Change into that folder `cd new-project`
5. Initialize Git so this project will be tracked `git init`
6. Add your `.gitignore` file and add `.DS_Store` to it
7. Add your files to staging `git add .`
8. Make your first commit `git commit` and add a nice message like "Initial Commit"

At this point, you can [see here](#working-with-an-existing-project) if you want to push to Github (which you should).

Once you set that up, your flow will be as follows:

* `git add .`
* `git commit -m "my commit message"`
* `git push origin <branch>` (replace with branch name)

##### Things to Remember

1. Every project gets a `Readme.md` file
2. Commit early and often
3. Always back up your code before you leave your machine and after any large feature


# Review of Terminal

```sh
# make a directory
$ mkdir <directory-name>

# move into a directory
$ cd <directory-name>

# list the contents of a directory
$ ls

# the symbol for the parent directory is ..
$ cd .. # this moves up a directory

# See the current directory
$ pwd
```

## Git Commands

#### Creating a repository on your computer
This creates a git repository in the current directory.

```sh
git init
```

#### Adding files to the staging area

To see the current status of your directory and repository:

```sh
$ git status
```

To add a single file to be tracked

```sh
$ git add filename.extension
```

To track *all* files. You can do this by adding the current directory.

```sh
$ git add .
```

#### Checking the status again, and do this often
```sh
$ git status
```

#### Committing files
Now that you have files in the staging area, you can save a snapshot of the staging area using a commit.

This will open up your default `git` editor. Which is most likely Sublime. You'll want to make sure to save your commit message and exit sublime before you go back to your terminal so it can close the commit session

```sh
$ git commit 
```

#### Ignore Certain Files 

If you want to ignore a specific file, create a `.gitignore` file and add any files you want to ignore. Ah'hem ... I'm looking at you `.DS_Store`.

## Github Intro

  * Everything needs a `Readme.md` file
  * Everything needs a `.gititnore` file (and should probably include `.DS_Store`

> Remember, every repo should have a readme.md file.

> Also, the readme.md file __should__ explain what this project is, and how to use it if neccessary

## Working with an EXISTING Project

1. Create a new repo on Github.com
2. Navigate into your project folder
3. Add the remote origin from the gh project to your local project

        ```sh
        # Make sure to copy the correct SSH url
        $ git add remote origin git@github.com:tiy-atlanta-js/Notes.git
        ```

## Creating a NEW Project

1. Create a new repo on Github.com
2. Clone that down to your project directory on your computer

        ```sh
        # Make sure to copy the correct SSH url
        $ git clone git@github.com:tiy-atlanta-js/Notes.git
        ```

3. Navigate into that folder