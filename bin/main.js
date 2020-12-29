#!/usr/bin/env node
const program = require('commander');

program.version(require('../package.json').version);

program.command('init <name>').description('init project').action(name => {
    console.log('init ' + name)
    require('../lib/init')(name);
})

program.command('refresh').description('refresh').action(() => {
    require('../lib/refresh')()
})

program.command('create <name>').description('Pull the basic warehouse according to the type.').action(name => {
    require('../lib/create')(name)
})

program.parse(process.argv);