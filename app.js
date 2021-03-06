const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const route = require('./routes/banking.route');

const app = express();

const port = process.env.PORT||3000;
require('dotenv').config();

var corsOption = {
    origin:"http://localhost:8081"
}

app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(logger('dev'));

// router

app.use('/api',route)


// Home Page
app.get('/',(req,res)=>{
    res.json({
        message:"Welcome to the banking Application"
    })
})

// Listening to the port
app.listen(port, ()=>{
    console.log(`Server is up and running on ${port}`);
})

// Database Connection

const db = require('./models');
const { mongoURL } = require('./models');
const router = require('./routes/banking.route');

db.mongoose.connect(db.mongoURL,{

    // to pass the data into url
    useNewUrlParser : true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log('Databse connection established');
})
.catch((error) => {
    console.log(error);

    // this process is realted to machine and server and not related to Database
    process.exit();
})