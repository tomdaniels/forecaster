# Forecaster

A simple app to show you a 3 day forecast for the city of your choosing..

## Getting Started

In the root directory of the project please install all dependancies and start the web server to view & play with the app. After you extract the files and open your terminal in the root directory you are ready to get started: 

```bash
npm install && npm run start
```

or if you prefer yarn: 

```bash
yarn install && yarn start
```

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your static single page app is ready to be deployed!

### Asides

- pre tag as error handler: the `location-api` could reinstate the commented out code to actually throw an error if the api fails, and our lovely designers could create a real fallback component to allow the user to retry. In the interest of time and practicality I decided returning `undefined` in this case is (hopefully) good enough

- loader test file: my test description of course wouldn't be that silly in production apps, though without a real design it seemed fitting to inject some personality instead ;)
