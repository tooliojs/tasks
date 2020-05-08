require('dotenv').config()

module.exports = {
    config: require('./config').config,
    setConfig: require('./config').set,
    error: require('./error'),
    file: require('./file'),
    users: require('./users'),
    new: require('./new'),
    update: require('./update'),
    delete: require('./delete'),
    query: require('./query')
}