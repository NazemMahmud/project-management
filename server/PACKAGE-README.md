# Project Package README


## Dependencies
- @prisma/client: Provides the Prisma client to interact with the database.
- body-parser: Middleware for parsing incoming request bodies (e.g., JSON payloads).
- cors: Enables Cross-Origin Resource Sharing to handle requests from different origins. 
- dotenv: Loads environment variables from a .env file into process.env. 
- express: Web framework for building RESTful APIs and handling HTTP requests. 
- helmet: Secures the application by setting various HTTP headers. 
- morgan: HTTP request logger middleware for monitoring and debugging. 
- prisma: The Prisma ORM for database schema management and migrations.

## DevDependencies
- @types/cors: Type definitions for the cors package. 
- @types/express: Type definitions for the express package. 
- @types/morgan: Type definitions for the morgan package. 
- @types/node: Type definitions for Node.js core modules. 
- concurrently: Runs multiple commands concurrently in the terminal. 
- nodemon: Automatically restarts the server during development when file changes are detected. 
- rimraf: Cross-platform tool for removing files and directories. 
- ts-node: Executes TypeScript files without needing to compile them manually. 
- tsx: Executes TypeScript files directly with support for modern features. 
- typescript: TypeScript compiler for type-safe JavaScript code.

## Scripts
- test: Placeholder for tests; currently exits with an error message.
- build: Deletes the dist directory and compiles TypeScript files into JavaScript.
- start: Builds the project and starts the application using the compiled JavaScript files.
- dev: Runs the server in development mode with hot reloading for TypeScript and server restarts.
- seed: Executes the Prisma seed script to populate the database with initial data.