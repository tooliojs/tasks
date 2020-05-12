const fs = require('fs')

module.exports = function(title) {
    if(!title) this.error('Valid New Title Required')
    else {
        console.log('new task feature coming soon...')
    }
}