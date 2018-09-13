const express = require('express');
const app = express(); 
const port = 3001; 
const bodyParser = require('body-parser');
const mc = require(__dirname+'/controllers/messages_controller');

app.use(bodyParser.json());
app.use(express.static(__dirname+'/../public/build'));


const baseURL = '/api/messages'; 
app.post(baseURL, mc.create);
app.get(baseURL, mc.read);
app.put(`${baseURL}/:idid`, mc.update);
app.delete(`${baseURL}/:idid`, mc.delete);

app.listen(port,()=>console.log(`Server listening at ${port}`));
