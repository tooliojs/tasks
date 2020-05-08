require('dotenv').config()

module.exports = {
    config: require('./config'),
    setConfig: require('./config').set,
    error: require('./error'),
    ls: require('./ls'),
    new: require('./new'),
    delete: require('./delete')
}