# React Mongo Express Node News App

To run project we can use `npm run dev` command
to add new post we can go to http://localhost:3000/newpost
First we start by creating new folder, open that folder and in our terminal we run:

`npm init`
and then

    npm i express body-parser mongoose concurrently

and after that

    npm i nodemon --save-dev

> **Express** is a minimal and flexible Node.js web application framework
> that provides a robust set of features for web and mobile
> applications.

> **Mongoose** provides a straight-forward, schema-based solution to model
> your application data. It includes built-in type casting, validation,
> query building, business logic hooks and more, out of the box.

> **Concurrently** can run multiple npm commands concurrently.

and as a **dev dependency** we've installed nodemon

> nodemon is a tool that helps develop node.js based applications by
> automatically restarting the node application when file changes in the
> directory are detected.

in package.json we add these npm scripts

    'start':'node server.js' //for production
    'server':'nodemon server.js' //for developement

we import `express, mongoose, body-parser` to our server.js file
create dB on mongoDB Atlas and create new file keys.js, where we will keep our keys during developement, all of wich will be moved to .env file for production
we connect to dB using mongoose and start server at port 5000.
we create News and Users model and Schema for DB
we create API routes and test them with Postman

we create additional folder called client where we run

    create-react-app

we edit proxy in package.json so we dont have to write the whole url in React.
we start working on React
we install and import **react-router-dom** to handle Pages and routes on WebApp

I've used React Fetch method to interact with the database.
All CSS in the app is basic and completely custom

**_Unfortuanatley due to time constraint this App is not finished, but hopefully you can see work done so far._**

**Todo list:**

- ~~create node server
  create dB
  connect to dB
  create news and users collections~~
- implement user authentication using JWT
- finish API -~~start react app
  implement react-router-dom
  implement news component
  -implement post news component(page)~~
- implement edit news component(page)
- implement Login page and authentication
- run unit tests
- implement header component for routing
