const express = require('express');

const app = express();
app.use(express.static('public'));

app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'public/index.html') );
});

app.listen(process.env.PORT, () => {
    console.info('Servidor corriendo en puerto ' + process.env.PORT);
});
