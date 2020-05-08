require('dotenv').config()

module.exports = {
    config: require('./config'),
    setConfig: require('./config').set,
    error: require('./error'),
    file: require('./file'),
    new: require('./new'),
    update: require('./update'),
    delete: require('./delete'),
    query: require('./query')
}