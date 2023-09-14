# Description

In this project, I worked with technologies that were new to me, including Next.js. They created both challenges and exciting learning opportunities. Setting up a Redux store was a new experience for me and I wish I had more experience in that aspect. I ran into some obstacles while setting up the project and creating the reducers, which forced me to spend time refining the logic and thinking about the most efficient implementation strategy. In the end, I decided to build the calculation logic into the components, preferring to use actions mostly to store pre-calculated data. This approach felt more intuitive to me, especially with the Redux Toolkit where I organized the store into two separate slices. Looking ahead, I'm interested in implementing local storage for the cartSlice, with the help of redux-persist.


## Running locally in development mode

To get started, just clone the repository and run `npm install && npm run dev`:

    npm install
    npm run dev

## Building and deploying in production

If you wanted to run this site in production, you should install modules then build the site with `npm run build` and run it with `npm start`:

    npm install
    npm run build
    npm start

