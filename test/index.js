const tasks = require('../src')

tasks.setConfig({
    entry: 'tasks.json',
})

tasks.new()