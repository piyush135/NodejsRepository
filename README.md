# Node.js
An event-driven, non-blocking I/O model based JS runtime

## Link to join the meeting
[Click here to join the Zoom meeting]( https://zoom.us/j/415010715)

## Link to video recordings
- [Day 1 | Oct 15]()
- [Day 2 | Oct 16]()
- [Day 3 | Oct 17]()

## What is Node.js?
- An event-driven, non-blocking I/O model based JS runtime
- Event-driven
    - Callbacks are executed when events occur.
    - The event loop is an underlying construct hidden away from the developer (just like in the browser)
    - Single-threaded unlike most other server-side frameworks
        - Simple to code
        - No fear of deadlock (no locks)
    - Has a natively implemented HTTP library
        - efficient
        - supports streaming
        - This makes Node.js a good candidate for building the backend for web apps
- Non-blocking
    - All I/O is done in non-blocking manner
    - This means all API calls are handled asynchronously (callbacks passed to API calls) - some APIs may have a synchronous version though
    - Call results in an appropriate event getting added to the event queue
    - When the event fires, it triggers execution of the callback
- Uses Google's V8 JS engine as the one to execute JavaScript
- Maintained by the Node.js Foundation
- Why is it popular?
    - Full-stack JS
    - Non-blocking event-driven model makes it fast in many situations
    - Single-threaded makes it simple to work with

## Table of Contents
- Getting Started
    * About Node
    * Downloading and Installing Node
    * Creating a simple web server - Introduction Node.js and the node CLI tool
    * Node packages, Semver, and npm registry
    * Introduction to package.json and npm CLI tool
    * Using nodemon
    * Global objects in Node

- How Node works
    * Blocking vs Non-blocking I/O
    * Writing asynchronous code
    * The event loop, timers and process.nextTick()

- Modules and Using the Module System
    * Overview of Built-in modules
    * Using built-in modules
    * Creating your own modules and using them

- Events and Streams
    * Events and EventEmitter
    * Creating your own EventEmitter classes
    * Readable and Writable Streams
    * Using pipes to join streams

- Working with the Local System
    * Global properties related to the local system
    * Working with the Node.js process - the process object
    * Working with files - the fs, path modules
    * Handling binary data - the buffer module
    * The OS Module

- Building Web Applications
    * Making HTTP requests - the http module
    * Building a web server
    * The url and querystring modules
    * Brief introduction to Mongo DB
    * CRUD operations using Mongo DB
    * Using Mongo DB in Node applications

- Popular Third-party Node Modules
    * Parsing parts of HTTP requests using body-parser and cookie-parser
    * Building web application using Express
    * Templating using Pug (formerly Jade)
    * Managing DB schemas, validation and CRUD operations in Mongo DB using Mongoose
    * Sequencing asynchronous operations using async.js
    * Logging using Morgan and chalk
    * Some other popular modules

## Two major version available
- v8.9.1 LTS + npm v?
    - Non-breaking changes on updates - assures that existing code works
    - Gets bug fixes
    - Gets security updates
    - Maintained till December 2019
- v10.12.0 + npm v?
    - Latest

## References
- [Node.js site](https://nodejs.org/en/)
- [GitHub repo for Node.js](https://github.com/nodejs/)
- [Most depended npm modules](https://www.npmjs.com/browse/depended)
- [Digital Transformation using Node.js - A Forrester Report](https://reprints.forrester.com/#/assets/2/796/RES135952/reports)
- [nodeschool.io](https://nodeschool.io/)
- [Node University](https://node.university/)
- [Node.js education references](https://github.com/nodejs/education/blob/master/getting-started-learning-nodejs.md)
- [Chrome Node.js inspector](https://chrome.google.com/webstore/detail/nim-node-inspector-manage/gnhhdgbaldcilmgcpfddgdbkhjohddkj)
- [Awesome Node.js packages](https://github.com/sindresorhus/awesome-nodejs)
- [Awesome npm resources and tips](https://github.com/sindresorhus/awesome-npm)
- [JS feature support in Node.js versions](http://node.green/)
- [The Modern JavaScript Tutorial](https://javascript.info/) - Excellent one-stop-shop having detailed explanation of JS features
- [Promises vs Callbacks - an article](https://rileygelwicks.gitbooks.io/you-dont-know-js/content/async%20&%20performance/ch2.html)
- [DefinitelyTyped website - repo for type definition files](http://definitelytyped.org/)
- [To search for any TypeScript type definition file](https://microsoft.github.io/TypeSearch/)