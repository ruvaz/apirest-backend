require('dotenv').config();
const express = require('express');
var cors = require('cors')
const {dbConnection} = require('./database/config');

const app = express();
const path = require('path');
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
dbConnection();


app.get('/api/hello', (req, res) => res.json({body:'Hello World!'}))
app.use('/api/news', require('./routes/news'));
app.use('/api/users', require('./routes/users'));

app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'public/index.html') );
});

app.listen(process.env.PORT, () => {
    console.info('Servidor corriendo en puerto ' + process.env.PORT);
});
