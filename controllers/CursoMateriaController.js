const express = require('express');

const CursoMateria = require('../model/CursoMateria');
const Curso = require('../model/Curso');
const Materia = require('../model/Materia');

var attributes = { exclude: [] }



const router = express.Router();

// POST CURSOMATERIA
router.post('/cursomateria/inserirCursoMateria', (req, res) => {
    console.log(req.body);

    const { tblCursoIdCurso, tblMateriaIdMateria } = req.body;

    CursoMateria.create({
        tblCursoIdCurso,
        tblMateriaIdMateria
    }).then(

        res.status(200).json({'MSG':'ROTA DE INSERÇÃO'})
    );
});

// GET CURSOMATERIA
router.get('/cursomateria/listarCursoMateria', (req, res) =>{

    // res.status(200).json({'TESTE': 'OK'})

    CursoMateria.findAll({
        raw:true,
        attributes:attributes,
        include:[{
            model: Materia,
            required:true,
            attributes:['materiaNome']},
        {
            model: Curso,
            require: true,
            attributes: ['cursoNome']}],
        order:[['tblMateriaIdMateria',  'ASC']],
      
    }).then(
            (CursoMateria)=>{
                res.send(CursoMateria);
            }
        );
});

// GET CURSOMATERIA POR ID
router.get('/cursomateria/listarCursoMateria/:idCursoMateria', (req, res)=> {

    let {idCursoMateria} = req.params;

    CursoMateria.findByPk(idCursoMateria)
        .then(
            (CursoMateria)=>{
                res.send(CursoMateria);
            }
        );

});

// DELETE CURSOMATERIA
router.delete('/cursomateria/excluirCursoMateria/:idCursoMateria', (req,res)=>{

    let {idCursoMateria} = req.params;

    CursoMateria.destroy(
        {where: {idCursoMateria}}
    ).then(

        ()=>{
            res.send('CursoMateria DELETADO COM SUCESSO!');
        }
    );
});

// ATUALIZAR CURSOMATERIA
router.put('/cursomateria/alterarCursoMateria', (req, res)=> {

    let {idCursoMateria, tblCursoIdCurso, tblMateriaIdMateria} = req.body;

    CursoMateria.update({
        tblCursoIdCurso,
        tblMateriaIdMateria
    },
    
    {where: {idCursoMateria}}
    
    ).then(
        () => {
            res.send('DADOS DE CursoMateria ALTERADOS COM SUCESSO :)');
        }
    );
});

module.exports = router;
