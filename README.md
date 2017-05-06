# BTT CLI 
 
![img](https://placehold.it/1920x1080?text=Screenshot)
> Better "touch" command.

## Installation
To install **btt-cli** be sure to have installed **npm** or **yarn**.
```bash
  $ node --version
```

If no errors let's install **btt-cli** with the following comand:

```bash
  $ npm install btt-cli --global
  
  # or "shorter flags"
  $ npm i -g btt-cli
  
  # or with YARN 
  $ yarn global add btt-cli
```

## How  
```bash
  $ btt [path]/<filename> [...content]
```

## Why ?
> Why use **btt-cli** instead the traditional `touch filename` or the classic `echo > filename`?

Because **btt** provides to create the path if it doesn't exitst yet and it **doesn't overwrite** files.


<br><br>

**Example**:
```bash
  $ touch myCoolProject/www/index.html
  # Now if the path 'myCoolProject/www' doesn't exists "touch" will return error.
  
  $ echo >> myCoolProject/www/index.html "<h1>Title</h1>"
  # This will return the same error 
```

<br><br>

But here comes _this commandline_, **btt** will create the path and with btt you can also write into files as like `echo`, is like a mix of `echo` and `mdkir -p` commands.

<br><br>

**Example with btt:**
```bash
  $ btt myCoolProject/www/index.html "<h1> Title </h1>"
  
  # You can also write without “”
  
  $ btt Note/myFirstNote.txt Hey, this is my note!
  # This will write a file with 
  # the phrase "Hey, this is my note!".
```

## Platforms
This `commandline` should work over all platforms but unfortunately right now i can't test it over all them.
### Tested on
  - [x] macOS Sierra [10.12.13] 
  - [ ] Linux systems
  - [ ] Windows systems

<br><br>
<br><br>


<p align="center">Written in <span class="emoji emoji-heart">❤️</span> with <a href="https://nodejs.org/en/"><code>NodeJS</code></a> &amp; <a href="https://github.com/atom/atom"><code>Atom Text Editor</code></a> by <a href="https://rawnly.com">@Rawnly</a></p>
