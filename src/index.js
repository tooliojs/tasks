require('dotenv').config()

module.exports = {
    config: require('./config').config,
    setConfig: require('./config').set,
    none: require('./none'),
    error: require('./error'),
    file: require('./file'),
    tasks: require('./tasks'),
    taskSchema: require('./tasks/schema'),
    new: require('./new')
}