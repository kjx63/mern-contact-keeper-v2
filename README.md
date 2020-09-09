# Contact Keeper build with MERN full stack

## Step

1. Express server setup with initial routes

2. Connect MongoDB to our App

- Create Config/default.json for global variables

  - This global values is acceess from anywhere in this app.

- Create Config/db.js

  - use mongoose to connect to our database

3. Backend Users, Contacts & JWT
   Authentication

- Goal: Register a User
  - POST ('/api/users')
  - Send data to the server
    - `app.use(express.json({ extended: false }));`
  - Data Validator
    - express-validator: [Docs](https://express-validator.github.io/docs/)
