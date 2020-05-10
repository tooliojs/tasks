const chalk = require('chalk')

module.exports = function() {
    console.log(`Hey ${chalk.bold(this.config.agent)}, I can\'t list undefined tasks.`)
    console.log(`Try creating some tasks in ${chalk.bold(this.config.entry)} to get started.`)
    console.log(`If it doesn't exist, you should probably create it.`)
    process.exit()
}