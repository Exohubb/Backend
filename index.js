require('dotenv').config()

const express = require('express')

const app = express()


app.get('/',(req,res) => {
    res.send('hellloooo')
})


app.get('/logs',(req,res) => {
    res.send('its log in route')
})



app.listen(process.env.PORT, () => {
    console.log("listling on port 3000")
})