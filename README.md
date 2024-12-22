# Node.js HTTP Server Port Already in Use

This repository demonstrates a common error in Node.js where an HTTP server fails to start because the specified port is already in use.  The `bug.js` file contains the problematic code, while `bugSolution.js` provides a solution.

## Problem

The `bug.js` file attempts to create an HTTP server that listens on port 8080. If another process (such as another Node.js application or a different service) is already using this port, the `server.listen(8080)` call will throw an error, preventing the server from starting.

## Solution

The `bugSolution.js` file addresses this issue by using the `server.on('error', ...)` event listener to gracefully handle the error. If the port is unavailable, it will log an informative message and then exit the process.  It also implements basic error handling and logging.

## How to run

1. Clone this repository.
2. Navigate to the repository directory.
3. Run `node bug.js` (this should fail if port 8080 is in use)
4. Run `node bugSolution.js` (this will handle the port conflict gracefully)