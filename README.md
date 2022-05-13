# Book-API
### Clone the Repository and run "npm i" in the terminal ( in the correct path ) to download all dependencies.
### run "node index.js" to start the API

## Routes 
#### POST /api/users/auth/login -> login route
#### POST /api/users/auth/register -> register route
#### GET /api/books/ -> get all books when authenticated
#### PUT /api/books/:id -> update a book
#### DELETE /api/books/:id -> delete a book
#### GET /api/books/:id -> get a book

### All routes related to books are protected and you need to pass accessToken recieved on login, in header as "Bearer "+accessToken form and key will be token.
### Therefore token : tokenValueRecievedFromLogin will be sent with every request
