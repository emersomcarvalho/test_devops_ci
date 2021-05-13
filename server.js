const express = require('express');

const app = express();


app.get('/', (req, res) => {

    res.json('Rota padrão: OK!');

});

app.get('/api', (req, res) => {

    res.status(200).json({ message:'Teste Devops - Emersom'});

});

app.use(function (req, res, next) {

    res.status(400).json({ message_erro: 'Erro no parâmetro' });

});


app.listen(3000, () => console.log('Server Running at port 3000')); 