const express = require('express');

const MateriaCategoria = require('../model/MateriaCategoria');

const router = express.Router();

router.post('/materiacategoria/inserirMateriaCategoria', (req, res) => {
    console.log(req.body);

    const { idMateria, idCategoria } = req.body;

    MateriaCategoria.create({
        idMateria,
        idCategoria
    }).then(
        
        res.status(200).json({'MSG':'CATEGORIA DA MATÉRIA INSERIDA COM SUCESSO!'})
    );
});


router.get('/materiacategoria/listarMateriaCategoria', (req, res) => {

    MateriaCategoria.findAll()
                    .then(
                        (MateriaCategoria)=> {
                            res.send(MateriaCategoria);
                        }
                    );
});


router.get('/materiacategoria/listarMateriaCategoria/:idMateriaCategoria', (req, res)=> {

    let { idMateriaCategoria } = req.params;

    MateriaCategoria.findByPk(idMateriaCategoria)
                    .then(
                        (MateriaCategoria)=>{
                            res.send(MateriaCategoria);
                        }
                    );
});


router.delete('/materiacategoria/excluirMateriaCategoria/:idMateriaCategoria', (req, res) => {

    let { idMateriaCategoria } = req.params;

    MateriaCategoria.destroy(
        {where:{idMateriaCategoria}}
    ).then(

        () => {
            res.send('CATEGORIA DA MATERIA DELETADA COM SUCESSO!');
        }
    );
});


router.put('/materiacategoria/alterarMateriaCategoria/:idMateriaCategoria', (req, res) =>{

    let { idMateriaCategoria, idMateria, idCategoria } = req.body;

    MateriaCategoria.update({
            idMateria,
            idCategoria
    },
    
    {where: {idMateriaCategoria}}
    
    ).then(
        () => {
            res.send('DADOS DE PUBLICACAOCATEGORIA ALTERADOS COM SUCESSO :)');
        }
    );
});


module.exports = router;