const Merge = require('../lib/Merge')

module.exports.config = {
    entry: 'tasks.yml',
    agent: process.env.TOOLIO_AGENT,
    cliColor: 'magenta',
    error: {
        log: true,
        level: 0,
        prefix: 'todo:error',
        style: {
            none: false,
            color: {
                all: false,
                prefix: 'red',
                message: false
            },
            bold: {
                all: true,
                prefix: false,
                message: false
            }
        },
        message: {
            'Valid Error Message Required': 'invalid error message given to .error()',
            'Valid Entry Required': '"entry" file does not exists',
            'Valid Entry Extension Required': '"entry" file extension is not valid',
            'Valid Entry Data Required:array': '"entry" file should be an array of tasks',
            'Valid Entry Data Required:object': '"tasks" need to be of type object',
            'Valid New Title Required': 'new() expects a string but got undefined',
            'setConfig(option) Required': 'you tried calling "setConfig()" without any options',
            'TypeError: chalk[task.config.cliColor] is not a function': 'invalid color given to option "cli.color"',
            'TypeError: chalk[style.all] is not a function': 'invalid color given to option "error.style.color.all"',
            'TypeError: chalk[style.prefix] is not a function': 'invalid color given to option "error.style.color.prefix"',
            'TypeError: chalk[style.message] is not a function': 'invalid color given to option "error.style.color.message"'
        }
    }
}

module.exports.set = function(options) {
    if(!options) this.error('setConfig(option) Required')
    this.config = Merge(this.config, options)
    delete options
}