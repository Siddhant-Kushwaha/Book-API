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


#### Local database was used in the assignment, you have to either use local database or connect your own mongoDB database
#### You have to create a .env File in the root directory of the project and enter the values for :
##### JWT_SEC : yoursecretmessagehere  -> this is the secret for JWT signing and verifying process
##### PASS_SEC : yoursecretmessagehere -> this is the secret for crypto-js to encrypt and decrypt the password
