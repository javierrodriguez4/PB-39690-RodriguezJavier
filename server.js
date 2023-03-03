const { response } = require("express");
const express = require("express");

const PORT = 8080;

const app = express();

app.get(`/`, (request, response) => {
    response.send(`API ALIVE! PORT: ${PORT}`)
});

app.listen(PORT, ()=>{
    console.log(`API RUNING PORT ${PORT}`)
});