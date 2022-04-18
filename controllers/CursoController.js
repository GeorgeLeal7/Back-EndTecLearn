const express = require('express');

const Curso = require('../model/Curso');

const router = express.Router();

// POST CURSO
router.post('/curso/inserirCurso', (req, res) => {
    console.log(req.body);

    const { cursoNome } = req.body;

    Curso.create({
        cursoNome
    }).then(

        res.status(200).json({'MSG':'ROTA DE INSERÇÃO'})
    );
});

// GET CURSO
router.get('/curso/listarCurso', (req, res) =>{

    Curso.findAll()
        .then(
            (Curso)=>{
                res.send(Curso);
            }
        );
});

// GET CURSO POR ID
router.get('/curso/listarCurso/:idCurso', (req, res)=> {

    let {idCurso} = req.params;

    Curso.findByPk(idCurso)
        .then(
            (Curso)=>{
                res.send(Curso);
            }
        );

});

// DELETE CURSO
router.delete('/curso/excluirCurso/:idCurso', (req,res)=>{

    let {idCurso} = req.params;

    Curso.destroy(
        {where: {idCurso}}
    ).then(

        ()=>{
            res.send('CURSO ENVIADO COM SUCESSO!');
        }
    );
});

// ATUALIZAR CURSO
router.put('/curso/alterarCurso', (req, res)=> {

    let {idCurso, cursoNome} = req.body;

    Curso.update({
        cursoNome
    },
    
    {where: {idCurso}}
    
    ).then(
        () => {
            res.send('DADOS DE CURSO ALTERADOS COM SUCESSO :)');
        }
    );
});

module.exports = router;