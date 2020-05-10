const fs = require('fs')
const yaml = require('js-yaml')

function query(data, param) {
    console.log('querying')
    console.log(data)
    console.log(param)

    return 0
}

module.exports = function(q=null) {
    try{
        let data
        if(this.file().endsWith('ml')) data = yaml.safeLoad(fs.readFileSync(this.file(), 'utf8'))
        else data = require(this.file())
        if(q === null) return data
        else return query(data, q)
    }
    catch(err) {
        console.log(err)
    }
}