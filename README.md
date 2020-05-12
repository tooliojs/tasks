# @toolio/tasks

**The project manager that lives in your project.**

[![CircleCI](https://circleci.com/gh/tooliojs/tasks.svg?style=shield)](https://circleci.com/gh/tooliojs/tasks)
[![npm (scoped)](https://img.shields.io/npm/v/@toolio/tasks)](https://www.npmjs.com/package/@toolio/tasks)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/tooliojs/tasks/blob/master/LICENSE.md)
[![Chat](https://img.shields.io/badge/chat-on%20discord-blue.svg)](https://discord.gg/UuNhTFN)

## Install
```
npm install @toolio/tasks -g
```

## Usage
<!-- Create a `.env` file in the root directory of your project and
supply a `TOOLIO_AGENT`.
```
TOOLIO_AGENT="your_alias"
``` -->

Create a file called `tasks.yml` in the root directory of your project
and fill it with at least 1 task.
```yaml
- Cleaner Error Messages:
    description: >
      It is a long established fact that a reader will 
      be distracted by the readable content of a page 
      when looking at its layout. 
    tags: [new]
    agent: arakilian0
```

```
$ todo ls
```


## Documentation

Coming soon...

## License

MIT License

Copyright (c) 2020 Toolio.js

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.