import express from 'express'
//os package is built in nodejs module
import os from 'os'

//create express application
const app = express()
//can be any port
const PORT = 3000

//creating routehandler for slash URL, it is a route URL
app.get("/", (req, res) => {
    //sends message to client with message below
    //using os package we retrieve hostname of the server
    const helloMessage = `VERSION 2: Hello from the ${os.hostname()}` //uses a different key "`" above tab
    console.log(helloMessage)
    res.send(helloMessage)
})

//Starts express web server
app.listen(PORT, () => {
    console.log(`Web server is listening at port ${PORT}`)
})