# GithHub Searcher

## Preface
The project was built according to the requrements and it also contains additional features:

1. Clean design
2. Sidebar with overlay
3. Modal with the preview of the repository's README.md file
4. Responsiveness

## Requirements

### Instructions
Create a simple application that allows a user to search for GitHub repos. The application should accept a text value and a dropdown of possible programming languages. Using this input, the application should search the GitHub API for relevant repos matching the search term and the selected programming language and display the search results. Additionally, a user should be able to sort the search results by name and by date the project was created.

### Specifications
* The project should be written as a React app.
* Any private information should not be included in your submission. However, any private information your application may need should be easily configurable via properties or an environment file.
* You are expected to submit production quality code.

### Submission
You have one week to email a link to your code submission. However, you should only need around 4 hours if you’re already familiar with React. We recommend uploading your code to Dropbox (or something similar) to share your code. The code should be submitted as a .zip with instructions in a README to build and run the project.


### GitHub API Documentation
* https://developer.github.com/v3
> Without authentication, the rate limit is 60 requests per hour, however the propper OAuth2 authentication should be done on server, which makes this task out of scope for this assignment.


## Timeline
* Sunday, October 28th - Prototyping of the architecture, creation of the layout (2 hrs)
* Monday, October 29th - Creation of the components, mocking the request (2 hrs)
* Monday, October 30th - Finished app, polished responsiveness (2 hrs)
* Monday, November 2nd - QA and Documentation (1 hr)

## Overview of the Architecture

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) using Yarn. You can find the most recent version of the Create React App guide [here](https://facebook.github.io/create-react-app/docs/).

### State Management
This project was built with React and [Redux](https://redux.js.org), using the redux-flavored FLUX architecture. State of the app is separated into 3 parts: `search`, `repositories` and `sort` (To decrease the memory consumption, the part related to the modal preview of the repository's README.md file doesn't use the redux store). Each part has the corresponding reduser and those reducers has been combined into one by the default redux mechanism, provided by the `combineReducers` function. To perform the interaction with GitHub and it's API, the app has `services` with combination of the `redux-thunk` package that helps with handling of asynchronous actions.

### Components
Most of the components are functional and purely presentational. App has 2 class-based components:
1. `App`, where the component lifecycle method is used to connect the React app with the external sidebar.
2. `ReposList`, where `this.state` is used to manage the state of the Modal

### Styles
The app is styled using `SCSS` and `Emotion` (CSS-in-JS library used by react-select & react-modal). While usage of a single approach is more preferable, this could be improved in future. The layout was built using `CSS grid`, the most modern approach availible at the moment.

## Development Instruction

### Prerequisites

1. Node.js v10+
> Information on how to install Node.js can be found [here](https://nodejs.org/en/download/).

2. Yarn
> While Yarn is not a requirement, it is highly recommended, because this project has only `yarn.lock` file and doesn't have `package-lock.json`, which npm expects by default. Information on how to install Yarn can be found [here](https://yarnpkg.com/lang/en/docs/install/).

### Dependencies
To run the development environment, you have to install the dependencies first.

```sh
yarn install
```

or

```sh
npm i # not recommended
```

### Environment
This project depends on a single environmental variable called `REACT_APP_USER_AGENT` and it follows the `.env` convention. To properly setup the environment for this project:

1. Create the `.env` file in the root of the project
2. Place REACT_APP_USER_AGENT="Name_of_the_APP"

> The contents of the `.env` file will be automatically loaded to the app by the `dotenv` package and it will be globally accessible through the `process.env`, e.g., `const userAgent = process.env.REACT_APP_USER_AGENT`. If one needs to create more variables in future, the `REACT_APP_` prefix should always be used, more on that [here](https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables)

The app also respects `NODE_PATH` and uses `NODE_PATH=./src` to simplify the imports of app's modules.


### Running the project for development
```sh
yarn start
```

or

```sh
npm start
```
After running this command, new browser window/tab will be automatically opened with this address: `http://localhost:3000/`
> The delay with styles only appears while using the development environment and it is related to the compilation of SCSS. It doesn't exists in production build.

### Building the project
```sh
yarn build
```

or

```sh
npm run build
```

The folder named `build` should appear in the root of the project. For the convenience, we also have a simple script named `run_build.sh` in the root of the project, and this script builds the project and serves the build on `http://0.0.0.0:8000`.

```sh
#!/usr/bin/env bash

# This script builds the app and serves it on 0.0.0.0:8000
# @NB: requires Python3 to be installed

yarn build && cd build && python3 -m http.server
```

## Future improvements

* Caching similar requests
* Pagination (or lazy loading)
* Backend (required to perform tasks like authentication)
* Include private repositories
* Unit tests
* E2E tests