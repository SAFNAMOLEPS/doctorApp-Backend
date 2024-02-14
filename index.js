//import json server
const jsonServer = require('json-server')
//creating server app
const doctorServer = jsonServer.create()
//setup path for db.json
const router = jsonServer.router('db.json')
//return a middleware
const middleware = jsonServer.defaults()
//setup port
const port = 3001
//use server
doctorServer.use(middleware)
doctorServer.use(router)
//to run port
doctorServer.listen(port,()=>(
    console.log('Doctor server listening on port ',port)
))