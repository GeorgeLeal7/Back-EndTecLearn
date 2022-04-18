const express = require('express');

const Publicacao = require('../model/Publicacao');
const UsuarioComum = require('../model/UsuarioComum');

var attributes = { exclude: [] }

const router = express.Router();

// POST CURSOMATERIA
router.post('/publicacao/inserirPublicacao', (req, res) => {
    console.log(req.body);

    const { titulo, descricao, imagem, tblUsuariosComunIdUsuarioComum } = req.body;

    Publicacao.create({
        titulo,
        descricao,
        imagem,
        tblUsuariosComunIdUsuarioComum
    }).then(

        res.status(200).json({'MSG':'Publicacao INSERIDA COM SUCESSO '})
    );
});

// GET CURSOMATERIA
router.get('/publicacao/listarPublicacao', (req, res) =>{

    // res.status(200).json({'TESTE': 'OK'})

    Publicacao.findAll({
            raw:true,
            attributes:attributes,
            include:[{
                model: UsuarioComum,
                required: true,
                attributes:['apelido'],
            }],
            order:[['tblUsuariosComunidUsuarioComum',  'ASC']],
          
        }).then(
            (Publicacao)=>{
                res.send(Publicacao);
            }
        );
});

// GET CURSOMATERIA POR ID
router.get('/publicacao/listarPublicacao/:idPublicacao', (req, res)=> {

    let {idPublicacao} = req.params;

    Publicacao.findByPk(idPublicacao)
        .then(
            (Publicacao)=>{
                res.send(Publicacao);
            }
        );

});

// DELETE CURSOMATERIA
router.delete('/publicacao/excluirPublicacao/:idPublicacao', (req,res)=>{

    let {idPublicacao} = req.params;

    Publicacao.destroy(
        {where: {idPublicacao}}
    ).then(

        ()=>{
            res.send('Publicacao DELETADO COM SUCESSO!');
        }
    );
});

// ATUALIZAR CURSOMATERIA
router.put('/publicacao/alterarPublicacao', (req, res)=> {

    let {idPublicacao, titulo, descricao, imagem, tblUsuariosComunIdUsuarioComum} = req.body;

    Publicacao.update({
        titulo,
        descricao,
        imagem,
        tblUsuariosComunIdUsuarioComum
    },
    
    {where: {idPublicacao}}
    
    ).then(
        () => {
            res.send('DADOS DE Publicacao ALTERADOS COM SUCESSO :)');
        }
    );
});

module.exports = router;
