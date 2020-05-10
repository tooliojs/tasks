require('dotenv').config()

module.exports = {
    config: require('./config').config,
    setConfig: require('./config').set,
    error: require('./error'),
    file: require('./file'),
    tasks: require('./tasks')
    // users: require('./users')
}