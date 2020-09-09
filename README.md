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

- Register a User with

  - name
  - email
  - password [hashed]
    - bcryptjs [Docs](https://www.npmjs.com/package/bcryptjs)

- When a user is registered, respond with a special token [Doc](https://jwt.io/)
  - we need to get the token sent to the front-end to access to the protected routes
- Login User and respond with jsonwebtoken returned

- Auth Middleware & Protected Routes

  - middleware that will allows us to send us the token within a header when we want to access to the protected routes
  - get token from the req.hdear
  - decode the token to get an id that is stored as a user'id

- Get all users Contacts

  - @route Get api/contacts
  - Find a user by user ID from Contact Model that matches the decoded token with id attached.

- Add Contacts

  - @route Post api/contacts

- Update Contact

  - @route put api/contacts/:id

- Delete Contact
  - @route delete api/contacts/:id

4. Client Side Setup & Contacts UI

- npx create-react app and Set up Concurrently
- install dependencies
  - react-router-dom
  - axios
  - react-transition-group
  - uuidv4
- Modify App.css
- Add FontAwesome
- Add Navbar Component
  - Navbar.defaultProps
- React Router
  - package: react-router-dom
