# Hive-Mind-API

Backend for Hive Mind

## Running locally

Run `yarn install` to install all dependencies

Add a .env file to the root of the project with the following settings

```
PORT = 3700
MONGO_DATABASE = "mongodb://127.0.0.1/hive-mind"
MORGAN_LOGGING = "dev"
```

Run `nodemon` from the root directory so that the server will restart when changes are made.

To manuall force a restart of nodemon type `rs`

## Todos

- [] Set up routes
  - [] Todos
  - [] Posts
  - [] Users
    - [] Sign up
    - [] Sign in
    - [] get user
    - [] get users
    - [] update user
- [] auth
- [] tests
- [] error handling
- [] logging
- [x] connect to database
  - [x] post data
  - [x] get data
- [x] prettier
  - [x] format existing files
- [x] dotenv
- [x] morgan
- [ ] Postman Testing
