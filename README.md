******************************************************************************************************************

Built By :

Name :  Pawan R K

Phone : +91 9482234279

Mail: rkpawan321@gmail.com

LinkedIn : https://www.linkedin.com/in/pawan-rk-44479488/

RESUME : https://drive.google.com/file/d/16FciXGa7OJM8wwUXpdbRk9tw2_yiEhpW/view?usp=sharing

*******************************************************************************************************************

PROBLEM STATEMENT :  To develop a pseudo Front End Application which would let the users help list and
browse top Hacker News articles conveniently.

*******************************************************************************************************************

Hosted at : https://hacker-news-web-app.et.r.appspot.com

Github Links : https://github.com/rkpawan321/hacker-news-web-app

*******************************************************************************************************************

ARCHITECTURE

Language used : Javascript

Tech Stack: ReactJs

Libraries used:  Redux, Axios. Redux-persist, Lodash, MomentJs

Middleware used : Redux-Thunk

Design: CSS, Material Design, Media query

*******************************************************************************************************************

REASONS FOR CHOOSING ABOVE TECH STACK
1) React is a better stack for frontend web-app development because of its code versetality.
2) State management is easily achieved.
3) Redux is used for app store management. The data that needs to be persisted is stored local in session storage using Redux-persist library.
4) GET, POST Api Calls is achieved by Axios library.
5) All Time and Date related data is handled using MomentJS. This is because Moment JS has better options when it comes to time-zone.
6) Lodash library is employed to manipulate arrays and objects, as well as functions, strings easily. It also helps in code Maintainability .
7) Material UI solves most of the issues related to responsiveness of the web-app. Still Media queries is used to ensure the responsiveness in most of the handheld devices too.

*******************************************************************************************************************

Webapp features

This is a web-app which lets the users browse through top Hacker News articles.

1) Each News story is shown in a card which has information about story title, date and time of post, author and number of comments.

2) It also has a link button clicking on which opens the original news article in a new window (with target="_blank")

3) The user is given an option to sort the news by 4 ways.
 a) Most Recent News First.
 b) Old news first.
 c) Highest commented news first.
 d) Lowest commented news first.
 
 All these sorting is done at session storage level. This helps on avoiding unnecessary api calls.
 
4) It also has a feature by which user can search article by author name. To use this, click on the Search Float Button on the bottom-right of the screen.

5) The User Interface is made responsive enabling smooth functioning across both hand-held devices as well as desktop/laptop.
This is achieved using media query and Flex-Box CSS.

6) Infinite Loading is employed as the number of story records are large in number. Each time only 15 records are loaded.

6) For a better UI/UX experience, the web-app is build on DARK-MODE.

**********************************************************************************************************************

API REFERENCE

https://github.com/HackerNews/API

GET TOP STORIES : https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty


GET_STORY_BY_ID :  https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty


**************************************************************************************************************

LOCAL SETUP
Frontend
Requirements: NodeJS
1) Clone the repository
2) npm start

                     

**************************************************************************************************************






















This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
