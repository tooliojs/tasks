const tasks = require('../src')

tasks.setConfig({
    entry: 'tasks.json',
})

console.log(tasks.new())