# Fullstack Application Boilerplate (create-react-app)

## Structure
- Server is ./server.js
- Server tests are in ./test
- Front End should be built in ./src
- Front End static assets can go in ./public
- Front End builds to ./build
- Knex db files are in ./db

## Run
- To start the server `npm run serve`
  - server will run on port 4000
  - Being served with Nodemon for hot refresh

- To start react app `npm start`
  - app will run on port 3000
  - "proxy" is set in package.json to port 4000
  - this includes watching SCSS

#### These ports are for development. When you deploy and the app is built the server will serve the bundle.js

- Test entire app: `npm run test`
- Test react app only with watcher: `npm run testreact`
- Test server only: `npm run testserver`
