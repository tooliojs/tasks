Use `setConfig()` to overwrite default configs.

```js
const todo = require('@toolio/tasks')

console.log(todo.config)
todo.setConfig({
    entry: 'tasks.json'
})
console.log(todo.config)
```