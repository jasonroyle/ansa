#!/usr/bin/env node

import * as Colors from 'colors/safe';
import * as FS from 'fs-extra';
import * as Yargs from 'yargs';

var argv = Yargs
.usage('Usage: $0 <command>')
.demand(1)
.help()
.command('init <project>', 'Initiate an Ansa project', {}, (argv) => {

  // Type definition workaround
  var copyOptions: any = {
    errorOnExist: true,
    overwrite: false
  };

  // Copy the project skeleton
  var projectPath = `${process.cwd()}/${argv.project}`;
  FS.copy(`${__dirname}/../../../skeleton`, projectPath, copyOptions, (err) => {
    if (err) console.error(Colors.red(`${err.message}`));
    else console.log(Colors.green(`Ansa project initiated at ${projectPath}.`));
  });
})
.argv;
