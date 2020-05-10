const fs = require('fs')
const yaml = require('js-yaml')
const isArray = require('../../lib/IsArray')
const isObject = require('../../lib/IsObject')
const chalk = require('chalk')

function query(data, param) {
    console.log('querying feature coming soon...')
    return 0
}

module.exports = function(q=null) {
    try {
        let data
        let failed
        let final = {
            failed: true,
            data: []
        }

        if(this.file().endsWith('ml')) data = yaml.safeLoad(fs.readFileSync(this.file(), 'utf8'))
        else data = require(this.file())

        if(data) {
            if(isArray(data)) {
                if(data.length && data[0] !== null) {
                    data.forEach(function(task) { if(!isObject(task)) failed = true })
                    if(failed) this.error('Valid Entry Data Required:object')
                    else {
                        let _this = this
                        for(let i = 0; i < data.length; i++) {
                            let key = Object.keys(data[i])[0]
                            const { error } = _this.taskSchema.validate(data[i][key])
                            final.failed = true
                            final.data = []
                            if(error) {
                                final.failed = true
                                final.data.push(error.details[0].message)
                            }
                            else {
                                final.failed = false
                                final.data.push(data)
                            }
                        }

                        if(final.failed) {
                            console.log(chalk.red('TASK:ERROR'), final.data[0])
                            process.exit()
                        }
                        else {
                            if(q === null) return final.data[0]
                            else query(final.data[0], q)
                        }
                    }
                } else this.none()
            } else this.error('Valid Entry Data Required:array')
        } else this.none()
    }
    catch(err) {
        console.log(err)
    }
}