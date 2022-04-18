const express = require('express');
const Publicacao = require('../model/Publicacao');
const Categoria = require('../model/Categoria');

const PublicacaoCategoria = require('../model/PublicacaoCategoria');

const router = express.Router();

// POST PublicacaoCategoria
router.post('/publicacaocategoria/inserirPublicacaoCategoria', (req, res) => {
    console.log(req.body);

    const { tblPublicacoIdPublicacao, tblCategoriaIdCategoria } = req.body;

    PublicacaoCategoria.create({
        tblPublicacoIdPublicacao,
        tblCategoriaIdCategoria
    }).then(

        res.status(200).json({'MSG':'ROTA DE INSERÇÃO'})
    );
});

// GET PublicacaoCategoria
router.get('/publicacaocategoria/listarPublicacaoCategoria', (req, res) =>{

    // res.status(200).json({'TESTE': 'OK'})

    PublicacaoCategoria.findAll({
        raw: true,
        include:[{
            model: Publicacao,
            require: true,
            attributes:['titulo', 'descricao', 'imagem']
        },
        {
            model: Categoria,
            require: true,
            attributes:['categoriaNome', 'previa']}]
    })
        .then(
            (PublicacaoCategoria)=>{
                res.send(PublicacaoCategoria);
            }
        );
});

// GET PublicacaoCategoria POR ID
router.get('/publicacaocategoria/listarPublicacaoCategoria/:idPublicacaoCategoria', (req, res)=> {

    let {idPublicacaoCategoria} = req.params;

    PublicacaoCategoria.findByPk(idPublicacaoCategoria)
        .then(
            (PublicacaoCategoria)=>{
                res.send(PublicacaoCategoria);
            }
        );

});

// DELETE PublicacaoCategoria
router.delete('/publicacaocategoria/excluirPublicacaoCategoria/:idPublicacaoCategoria', (req,res)=>{

    let {idPublicacaoCategoria} = req.params;

    PublicacaoCategoria.destroy(
        {where: {idPublicacaoCategoria}}
    ).then(

        ()=>{
            res.send('PublicacaoCategoria DELETADO COM SUCESSO!');
        }
    );
});

// ATUALIZAR PublicacaoCategoria
router.put('/publicacaocategoria/alterarPublicacaoCategoria', (req, res)=> {

    let {idPublicacaoCategoria, tblPublicacoIdPublicacao, tblCategoriaIdCategoria} = req.body;

    PublicacaoCategoria.update({
        tblPublicacoIdPublicacao,
        tblCategoriaIdCategoria
    },
    
    {where: {idPublicacaoCategoria}}
    
    ).then(
        () => {
            res.send('DADOS DE PublicacaoCategoria ALTERADOS COM SUCESSO :)');
        }
    );
});

module.exports = router;
