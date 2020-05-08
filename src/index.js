require('dotenv').config()

module.exports = {
    config: require('./config'),
    setConfig: require('./config').set,
    error: require('./error'),
    query: require('./query'),
    list: require('./list'),
    new: require('./new'),
    delete: require('./delete')
}