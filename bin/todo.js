#!/usr/bin/env node

const path = require('path')

console.log(path.join(__dirname))

// const chalk = require('chalk')
// const yargs = require('yargs')
// const task = require('../src')

// try {
//     yargs.scriptName(chalk[task.config.cli.color]('todo'))
//     yargs.usage('$0 <cmd> [args]')
//     yargs.version(task.config.cli.version)
//     yargs.command('ls', 'list tasks', 
//         (yargs) => {}, 
//         (argv) => {
//             console.log('listing all tasks')
//         }
//     )
//     yargs.demandCommand(1, 'You need at least one command before moving on.')
//     yargs.strictCommands(true)
//     yargs.recommendCommands(true)
//     yargs.help(true)
//     yargs.argv
// }
// catch(err) { task.error(err) }