const express = require('express');

const Conquista = require('../model/Conquista');

const router = express.Router();


router.post('/consquista/inserirConquista', (req, res) => {
    console.log(req.body);

    const { titulo, emblema, previa } = req.body;

    Conquista.create({
        titulo,
        emblema,
        previa
    }).then(

        res.status(200).json({'MSG':'Conquista adicionada :)'})
    );
});

router.get('/conquista/listarConquista', (req, res) => {

    Conquista.findAll()
            .then(
                (Conquista)=> {
                    res.send(Conquista);
                }
            );
});

router.get('/conquista/listarConquista/:idConquista', (req, res) => {

    let { idConquista } = req.params;
    
    Conquista.findByPk(idConquista)
             .then(
                 (Conquista)=> {
                     res.send(Conquista);
                 }
             );
});


router.delete('/conquista/excluirConquista/:idConquista', (req, res) =>{

    let { idConquista } = req.params;

    Conquista.destroy(
        {where: {idConquista}}
    ).then(

        ()=> {
            res.send('CONQUISTA DELETADA COM SUCESSO');
        }
    );
});


router.put('/conquista/alterarConquista', (req, res) => {

    let { idConquista, titulo, previa, emblema } = req.body;

    Conquista.update({
        titulo,
        previa,
        emblema
    },
    
    {where: {idConquista}}    
    
    ).then(

        ()=> {
            res.send('DADOS DE CONQUISTA ALTERADOS :)');
        }
    );
});

module.exports = router;