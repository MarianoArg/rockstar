# Rockstar Coders code challenge
![Captura de Pantalla 2021-05-11 a la(s) 17 52 29 copia](https://user-images.githubusercontent.com/10810691/117884180-b2c9e300-b282-11eb-94c3-f28fd2a0d2ea.jpg)

## Live Demo
[Rockstar Challenge Live Demo](https://rockstar.marianoarg.dev/)

## Intro
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Other tools used are:  
[React Query](https://react-query.tanstack.com/) for fetching, caching and revalidating data.  
[Typescript](https://www.typescriptlang.org/)  
[TailwindCSS](https://tailwindcss.com/) for styling.  

## Running the project

After cloning the repo, run

### `yarn install`
Install the dependencies for running the project, you can also use npm with
```
npm install
```

**Important**: Using the `.env.example` add your API keys from https://www.themoviedb.org/ and the rest of environment variables to your own `.env` file.


### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Deployment
The app is configured to automatically be deployed using [Vercel](https://vercel.com/).


## Improvements
As this was a challenge developed in a short period of time, several improvements were left behind, like a better UI with loading and error indicators, probably adding a debounce on the search, adding pagination, better responsiveness for mobile, adding tests, etc.  
