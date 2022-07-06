const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mysql = require('mysql');
const path = require('path');


// -----------------------------
dotenv.config()
app = express()


app.use(express.static(path.resolve(__dirname,'public')));
app.use(express.json());

// ----------Constants----------

PORT = process.env.PORT || 5678;

// -----------------------------
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password123#',
    database:'candy'
})



// -----------Routes------------

app.get('/', (req,res)=>{
        res.sendFile('index.html') //route for dummy ui to test everything
    })


app.post('/login', (req,res)=>{
    //add user
    })

app.post('/register',(req,res)=>{
    //register user
})


app.route('/users')
    .get((req,res)=>{
        //send all users data    
})
    .post((req,res)=>{
        //get 1 user id and return its data
})

app.post('/deleteuser',(req,res)=>{
    //deleteuser
})


// -----------------------------

app.listen(PORT , console.log(`port is running on ${PORT}`))