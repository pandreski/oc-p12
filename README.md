# SportSee

SportSee is a dashboard based on React JS where the user can see its fitness progression. The data can be fetched from an external API or by local mocks.

This project is part of the Openclassrooms program "Javascript/React application developer" (project #12).

## Requirements

- Node 16.x
- Yarn 1.22+

### Used tools

- React 18
- React router
- CSS Modules (scss)
- Axios
- Recharts
- Eslint

## Installation steps (front-end)

1. Clone this project,
2. Duplicate `.env.example` file to `.env` (in the root directory),
3. Set the correct variables in the `.env` file (see sections below),
4. Install dependencies with `yarn install`,
5. Start the project with `yarn start`,
6. Open the app with the link given in your terminal.

## Installation steps (back-end)

Clone [this project](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard) and follow the steps in its README.

In the root directory, edit your `.env` file and set the correct port for `REACT_APP_BACKEND_PORT` variable.

## API or mocked data ?

You can choose the data source between the local mocks or the API provided by the back-end.

In the root directory, edit your `.env` file with one of the following declaration:

### Use API
```
REACT_APP_MOCKED_DATA="0"
```

### Use mocks
```
REACT_APP_MOCKED_DATA="1"
```

> 🚨 If your react app is already running, you might restart it after making a change in the `.env` file.

> ℹ️ Mocked data files are located in `/public/__mocks__/`.