//bringing the packages in
const express = require("express")
const cors = require("cors")
const { getAllMovies, createMovies, deleteMovie, editMovie } = require("./controller")


//initializing new app with express
const app = express()

//middleware
app.use(express.json())
app.use(cors())

//get endpoint to get all movies
app.get('/api/movies', getAllMovies)

//post endpoint to create a new movie
app.post('/api/movies', createMovies)

//delete endpoint
app.delete("/api/movies/:id", deleteMovie)

//put endpoint to edit movies
app.put('/api/movies/:id', editMovie)

const SERVER_PORT = 4004
app.listen(SERVER_PORT, ()=> console.log(`Server is running on ${SERVER_PORT}`))

