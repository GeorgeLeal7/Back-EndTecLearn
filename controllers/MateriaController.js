const express = require('express');

const Materia = require('../model/Materia');

const router = express.Router();


router.post('/materia/inserirMateria', (req,res) =>{
    console.log(req.body);

    const { materiaNome } = req.body;

    Materia.create({
        materiaNome
    }).then(

        res.status(200).json({'MSG':'ROTA DE INSERÇÃO'})

    );
});

router.get('/materia/listarMateria', (req, res) =>{

    Materia.findAll()
            .then(
                (Materia)=>{
                    res.send(Materia);
                }
            );
});

router.get('/materia/listarMateria/:idMateria', (req, res) =>{

    let {idMateria} = req.params;

    Materia.findByPk(idMateria)
            .then(
                (Materia) =>{
                    res.send(Materia);
                }
            );
});


router.delete('/materia/excluirMateria/:idMateria', (req,res)=>{

    let {idMateria} = req.params;

    Materia.destroy(
        {where: {idMateria}}
    ).then(

        ()=>{
            res.send('MATERIA ENVIADA COM SUCESSO!');
        }
    );
});

// ATUALIZAR CURSO
router.put('/materia/alterarMateria', (req, res)=> {

    let {idMateria, materiaNome} = req.body;

    Materia.update({
        materiaNome
    },
    
    {where: {idMateria}}
    
    ).then(
        () => {
            res.send('DADOS DE MATERIA ALTERADOS COM SUCESSO :)');
        }
    );
});

module.exports = router;