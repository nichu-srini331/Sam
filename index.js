const express = require('express')
const cors = require('cors');

const app = express();
const PORT = 4000

app.use(express.json());

app.use(cors({ origin: true }));

app.get('/home',(req,res)=>{

    res.send('Hello welcome');

})

app.listen(PORT,()=>{

    console.log("Welcome");
})

