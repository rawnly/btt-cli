#!/usr/bin/env node

var path = require('path');
var fs = require('fs');
const os = require('os');

const chili = require('chili-js');
const mkdirp = require('mkdirp');
const touch = require('touch');
const chalk = require('chalk');
const meow = require('meow');

const cli = new meow(`
  Usage:
    bt [path]/<file>
`);

function cliFunc(action, flags) {
  const pth = action[0];
  const content = (action[1] != undefined) ? action[1] : '';
  const full_text = (action[2] != undefined) ? action.slice(1, action.length).join(' ') : false;

  const splitted = pth.split('/');
  const file = splitted[splitted.length - 1];
  const folder = splitted.slice(0, splitted.length - 1).join('/');
  const extension = getExtension(file);
  const file_exists = fs.existsSync(pth);

  if (file_exists) {
    console.log(`[${chalk.yellow(file)}] - This file exits. `);
  } else {
    mkdirp(folder, function (err) {
        if (err) {
          throw new Error(err);
        } else {

          if (full_text) {
            fs.writeFile(pth, `${comment(file)} \n ${full_text.toString()}`, (data, err) => {
              if (err) {
                throw new Error(err);
              }
            });
          } else {
            fs.writeFile(pth, `${comment(file)} \n ${content.toString()}`, (data, err) => {
              if (err) {
                throw new Error(err);
              }
            });
          }
        }
    });
  }
}


if (cli.input[0]) {
  cliFunc(cli.input, cli.flags)
} else {
  console.log('No path provided.');
}


function getExtension(name) {
  if (name != undefined && name != '') {
    if (name.split('.').length >= 2) {
      const extension = name.split('.')[name.split('.').length - 1];
      if (extension.toString().length !== 0) {
        return extension;
      } else {
        throw new Error('No file extension.');
        return false
      }
    }
    throw new Error('No file extension.');
    return false;
  } else {
    throw new Error('Undefined file name.');
    return false
  }
}


function comment(filename) {
  var extension = getExtension(filename);
  var txt = 'This file was created with "better_touch_files"';
  switch (extension) {
    case 'html':
    case 'md':
      return `<!-- ${txt} -->`
      break;
    case 'css':
    case 'php':
      return `/*\n * ${txt} \n*/`
      break;
    case 'js':
    case 'sass':
    case 'scss':
    case 'jade':
    case 'coffee':
      return `// ${txt}`
      break;
    case 'cson':
      return `# ${txt}`
      break;
  }
}
