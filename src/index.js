const Merge = require('../lib/Merge')

module.exports = {
    config: {
        cli: {
            title: 'todo'
        },
        error: {
            log: true,
            level: 0,
            prefix: ''
        }
    },
    setConfig: function(options) {
        console.log('settting config')
        console.log(Merge)
    },
    todo: []
}