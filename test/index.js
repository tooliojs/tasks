const task = require('../src')

task.setConfig({
    entry: 'tasks.yml'
})

// console.log(task.new("asdasdasd"))
console.log(task.tasks())