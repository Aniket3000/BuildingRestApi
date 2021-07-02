// const bodyParser = require('body-parser');
const express = require('express');
const app = express();
// const port = 3000;
const dotenv = require('dotenv');
dotenv.config();
// const bodyParser = require('body-parser');
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

const proglangsRouter = require('./routes/prog_langs');

app.get('/',(req,res) => {
    res.json({'message':'ok'});
    // console.log(`App listening at: http://localhost:${process.env.PORT}`);
});

app.use('/prog-langs',proglangsRouter);

// Error handler middleware
app.use((err,req,res,next) => {
    const statusCode = err.statusCode;
    console.error(err.message,err.stack);
    res.status(statusCode).json({'message':err.message});

    return ;
})


app.listen(process.env.PORT,()=>{
    console.log(`App listening at: http://localhost:${process.env.PORT}`);
});