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

program.parse(process.argv);