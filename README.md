# Apps by Host

This project was made as a code challenge.
In this system, we can see a list of apps listed by hosts and soted by the APDEX value.
For this project, I use js, React and Redux.

## Project Structure

# Project structure explained

```bash
└── src
    ├── actions (trigger all the services and dispatch reduxies)
    ├── components (react components)
    ├── container (connect redux store with components)
    ├── fixtures (mocks and sample data)
    └── store (reducers state machine)
```

## Getting Started

### Prerequisites

- node >= v14.15.0

### Installing

use `npm install` or `yarn install` to install all the dependencies.

## Running the tests

`npm test` will start all the tests,
if you wanna start just one of them
use, npm or yarn and past the relative path of the test.

```
npm test src/components/CardComponent/CardComponent.test.js
```

## Running front-end in development env

```
npm start
```

## NEXT STEPS

- make unitary tests for all components
- improve responsivity
