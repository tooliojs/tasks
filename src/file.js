const fs = require('fs')
const path = require('path')
const validExtension = ['.js', '.yml', '.yaml', '.json']

module.exports = function() {
    match = false
    taskPath = path.resolve(this.config.entry)

    if(!fs.existsSync(taskPath)) this.error('Valid Entry Required')
    else {
        for(i = 0; i < validExtension.length; i++) { if(taskPath.endsWith(validExtension[i])) { match = taskPath; break }}
        if(!match) this.error('Valid Entry Extension Required')
    }

    return match
}