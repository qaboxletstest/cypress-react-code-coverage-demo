This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

`npx create-react-app cypress-react-code-coverage-demo --template cra-template-pwa`

## Instrument Application Code - https://www.npmjs.com/package/@cypress/instrument-cra
Little module for CRA applications to instrument code without ejecting react-scripts
`npm i -D @cypress/instrument-cra`
Then change your npm start script to require this module before starting the dev server

```
{
  "scripts": {
    "start": "react-scripts -r @cypress/instrument-cra start",
  }
}
```

This module assumes standard Create-React-App v3 JavaScript application with source files in the "src" folder.

When the app starts with yarn start, you should see the coverage information under window.__coverage__ information.

###### Exclude files
If you want to exclude files from coverage, for example src/serviceWorker.js, add an object named nyc to package.json following the nyc CLI configuration.

```
"nyc": {
    "exclude": "src/serviceWorker.js"
  }
```

### `exclude files from coverage using nyc setup not working for create-react-app application`

https://github.com/cypress-io/instrument-cra/issues/188

So, meanwhile please use the following command in the terminal of your project: - 

npx nyc report --reporter=lcov


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the Cypress test runner in the interactive watch mode.<br />

### `npm run cy:run`

Launches the tests in headless mode.<br />

## Save the code coverage collected during Cypress tests - https://www.npmjs.com/package/@cypress/code-coverage

`npm install -D @cypress/code-coverage`

Add to your cypress/support/index.js file
`import '@cypress/code-coverage/support'`

Register tasks in your cypress/plugins/index.js file
```
module.exports = (on, config) => {
  require('@cypress/code-coverage/task')(on, config)

  // add other tasks to be registered here

  // IMPORTANT to return the config object
  // with the any changed environment variables
  return config
}
```




