const express = require('express');
const app = express();
app.use(express.json());
app.get('/sendmail',(req,res)=>{
  res.send('hello world');
})

const port = process.env.PORT || 8000;

app.listen(port);
