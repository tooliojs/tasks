require('dotenv').config()

const Style = require('../lib/Style')
const Merge = require('../lib/Merge')

module.exports = {
    config: {
        entry: 'tasks.js',
        director: '',
        agent: process.env.TOOLIO_AGENT,
        activeAgents: [],
        cli: {
            color: 'magenta',
            version: require('../package.json').version
        },
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
                'setConfigs(option) Required': 'you tried calling "setConfig()" without any options',
                'TypeError: chalk[task.config.cli.color] is not a function': 'invalid color given to option "cli.color"',
                'TypeError: chalk[style.all] is not a function': 'invalid color given to option "error.style.color.all"',
                'TypeError: chalk[style.prefix] is not a function': 'invalid color given to option "error.style.color.prefix"',
                'TypeError: chalk[style.message] is not a function': 'invalid color given to option "error.style.color.message"'
            }
        }
    },
    error: function(message) {
        if(this.config.error.log === true) {
            match = false
            err = message.toString()
            carePackage = {
                prefix: this.config.error.prefix,
                message: this.config.error.message['Valid Error Message Required']
            }
            for(const prop in this.config.error.message) {
                if(err === prop) match = this.config.error.message[prop]
            }
            if(match === false) console.log(Style(this, carePackage))
            else { carePackage.message = match; console.log(Style(this, carePackage)) }
            if(this.config.error.level === 0) process.exit()
            delete err
            delete match
            delete carePackage
            delete message
        }
        else if(this.config.error.level === 0) process.exit()
    },
    setConfig: function(options) {
        if(!options) this.error('setConfigs(option) Required')
        this.config = require('../../lib/Merge')(this.config, options)
        delete options
    }
}