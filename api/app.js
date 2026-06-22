const express = require('express');
const app = express();
const port = 3000

const fs = require('node:fs')

app.get('/', (req, res) =>{
    res.status(200).json({
        "titulo" : "Easy Delivery API",
        "tema" : "Infraestrutura para um pequeno serviço de entregas",
        "aluno": "Kalyo Airan da Silva",
        "disciplina": "Cloud Computing",
        "versao" : "1.0",
        "status": "ok"
    })
});

app.get('/entregas', (req,res) =>{
    try{
        let data = require('./data/entregas.json')
        
        res.status(200).json(data)
    }catch (Erro){
        res.status(404).json({
            "status" : 404,
            "msg" : "Entregas não encontradas...",
            "erro" : Erro
        })
    }
});

app.get('/entregas/:id', (req, res) =>{
    try{
        let data = require('./data/entregas.json')    
        let entrega = data.find(item => item.id_entrega == req.params.id) || null

        if (entrega != null){
            res.status(200).json(entrega)
        }
        else{
            res.status(404).json({
                "status" : 404,
                "id_entrega" : req.params.id,
                "msg" : "Entrega não encontrada..."
            })
        }
    }catch (Erro){
        res.status(404).json({
            "status" : 404,
            "msg" : "Entregas não encontradas...",
            "erro" : Erro
        })
    }
});

app.get('/status', (req,res) => {
    res.status(200).json({
        "status" : "healty",
        "timestamp" : new Date().toISOString()
    })
})


app.listen(port, () => {
    console.log(`Easy Delivery API rodando na porta: ${port}`)
});