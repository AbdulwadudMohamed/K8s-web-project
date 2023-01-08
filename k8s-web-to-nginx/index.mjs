import express from 'express'
import fetch from 'node-fetch'
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
    const helloMessage = `Hello from the ${os.hostname()}` //uses a different key "`" above tab
    console.log(helloMessage)
    res.send(helloMessage)
})

//adding additional endpoint nginx with routehandler async function
    //because I am connecting to another server simulating connection between different deployments
app.get("/nginx", async (req, res) => {
    //service will be called nginx (using static name is better than using cluster IP but that is dynamic)
    const url = 'http://nginx' 
    //fetch is used to get body from nginx server
    const response = await fetch(url);
    const body = await response.text();
    //return body to client
    res.send(body)
})
//objective of this endpoint is to proxy request to the nginx server and return result reposnse to the client 

//Starts express web server
app.listen(PORT, () => {
    console.log(`Web server is listening at port ${PORT}`)
})