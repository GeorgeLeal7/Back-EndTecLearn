const express = require('express');


const Categoria = require('../model/Categoria');


const router = express.Router();

router.post('/categoria/inserirCategoria', (req,res) => {
    console.log(req.body);

    const { categoriaNome, previa } = req.body;

    Categoria.create({
        categoriaNome, 
        previa
    }).then(

        res.status(200).json({'MSG':'INSERIDO COM SUCESSO'})

    );
});

router.get('/categoria/listarCategoria', (req, res) => {

    Categoria.findAll()
             .then(
                 (Categoria) => {
                     res.send(Categoria);
                 }
             );
});

router.get('/categoria/listarCategoria/:idCategoria', (req,res) => {

    let {idCategoria} = req.params;

    Categoria.findByPk(idCategoria)
         .then(
            (Categoria)=>{
                res.send(Categoria);
            }
         );

});

router.delete('/categoria/excluirCategoria/:idCategoria', (req, res) => {

    let {idCategoria} = req.params;

    Categoria.destroy(
            {where: {idCategoria}}
        ).then(

            ()=> {
                res.send('CATEGORIA DELETADA COM SUCESSO!');
            }
    );

});

router.put('/categoria/alterarCategoria', (req, res) => {

    let {idCategoria, categoriaNome, previa} = req.body;

    Categoria.update({
        categoriaNome,
        previa
    },
    
    {where: {idCategoria}} 
    
    ).then(

        () => {
            res.send('CATEGORIA ALTERADA COM SUCESSO :)');
        }
    );
});

module.exports = router;