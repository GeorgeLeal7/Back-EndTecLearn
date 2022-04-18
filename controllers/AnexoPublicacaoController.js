const express = require('express');

const AnexoPublicacao = require('../model/AnexoPublicacao');

const router = express.Router();

// POST CURSO
router.post('/anexopublicacao/inserirAnexoPublicacao', (req, res) => {
    console.log(req.body);

    const { idPublicacao, anexo, tblPublicacaoIdPublicacao } = req.body;

    AnexoPublicacao.create({ 
        idPublicacao,
        anexo,
        tblPublicacaoIdPublicacao
    }).then(

        res.status(200).json({'MSG':'ROTA DE INSERÇÃO'})
    );
});

// GET CURSO
router.get('/anexopublicacao/listarAnexoPublicacao', (req, res) =>{

    AnexoPublicacao.findAll()
        .then(
            (AnexoPublicacao)=>{
                res.send(AnexoPublicacao);
            }
        );
});

// GET CURSO POR ID
router.get('/anexopublicacao/listarAnexoPublicacao/:idAnexoPublicacao', (req, res)=> {

    let {idAnexoPublicacao} = req.params;

    AnexoPublicacao.findByPk(idAnexoPublicacao)
        .then(
            (AnexoPublicacao)=>{
                res.send(AnexoPublicacao);
            }
        );

});

// DELETE CURSO
router.delete('/anexopublicacao/excluirAnexoPublicacao/:idAnexoPublicacao', (req,res)=>{

    let {idAnexoPublicacao} = req.params;

    AnexoPublicacao.destroy(
        {where: {idAnexoPublicacao}}
    ).then(

        ()=>{
            res.send('AnexoPublicacao Excluido COM SUCESSO!');
        }
    );
});

// ATUALIZAR CURSO
router.put('/anexopublicacao/alterarAnexoPublicacao', (req, res)=> {

    let {idAnexoPublicacao, idPublicacao, anexo, tblPublicacaoIdPublicacao} = req.body;

    AnexoPublicacao.update({
        idPublicacao, anexo, tblPublicacaoIdPublicacao
    },
    
    {where: {idAnexoPublicacao}}
    
    ).then(
        () => {
            res.send('DADOS DE AnexoPublicacao ALTERADOS COM SUCESSO :)');
        }
    );
});

module.exports = router;
