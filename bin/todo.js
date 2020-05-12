#!/usr/bin/env node

const chalk = require('chalk')
const yargs = require('yargs')
const task = require('../src')
const version = require('../package.json').version

try {
    yargs.scriptName(chalk[task.config.cliColor]('todo'))
    yargs.usage('$0 <cmd> [args]')
    yargs.version('CLI: v' + version)
    yargs.command('ls', 'List all tasks.', 
        (yargs) => {}, 
        (argv) => {
            if(task.tasks().length) {
                for(let i = 0; i < task.tasks().length; i++) {
                    if(i !== task.tasks().length - 1) {
                        for(_task in task.tasks()[i]) {
                            console.log(chalk.underline.bold[task.config.cliColor](_task))
                            task.tasks()[i][_task].description.split('\n').forEach(function(line) { if(line !== '') console.log('Description: '+line) })
                            console.log('Agent: '+task.tasks()[i][_task].agent)
                            console.log('Tags: '+task.tasks()[i][_task].tags)
                        }
                        console.log()
                    }
                    else {
                        for(_task in task.tasks()[i]) {
                            console.log(chalk.underline.bold[task.config.cliColor](_task))
                            task.tasks()[i][_task].description.split('\n').forEach(function(line) { if(line !== '') console.log('Description: '+line) })
                            console.log('Agent: '+task.tasks()[i][_task].agent)
                            console.log('Tags: '+task.tasks()[i][_task].tags)
                        }
                    }
                }
            }
        }
    )
    yargs.command('new [task]', 'Create a new task.', 
        (yargs) => {},
        (argv) => {
            task.new(argv.task)
        }
    )
    yargs.demandCommand(1, 'You need at least one command before moving on.')
    yargs.strictCommands(true)
    yargs.recommendCommands(true)
    yargs.help(true)
    yargs.argv
}
catch(err) { 
    try { task.error(err) }
    catch(errs) { console.log(errs) }
}