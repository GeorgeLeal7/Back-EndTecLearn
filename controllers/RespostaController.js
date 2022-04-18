const express = require('express');
const Publicacao = require('../model/Publicacao');
const Resposta = require('../model/Resposta');
const UsuarioComum = require('../model/UsuarioComum');

const router = express.Router();

router.post('/resposta/inserirResposta', (req, res) => {
    console.log(req.body);

    const { verificacao, descricao, imagem, dataHora, tblUsuariosComunIdUsuarioComum, tblPublicacoIdPublicacao } = req.body;

    Resposta.create({
        verificacao,
        descricao,
        imagem, 
        dataHora,
        tblUsuariosComunIdUsuarioComum,
        tblPublicacoIdPublicacao
    }).then(

        res.status(200).json({'MSG':'INSERIDO COM SUCESSO'})
    );

});

router.get('/resposta/listarResposta', (req, res) => {

    Resposta.findAll({
        raw:true,
        include:[{
            model: UsuarioComum,
            required: true,
            attributes: ['apelido', 'foto', 'biografia', 'pontuacao', 'moderador', 'reputacao'] 
        },
    {
        model: Publicacao,
            required: true,
            attributes: ['titulo', 'descricao', 'imagem'] 
    }]
    })
            .then(
                (Resposta)=>{
                    res.send(Resposta);
                }
            );
});

router.get('/resposta/listarResposta/:idResposta', (req, res) => {

    let { idResposta } = req.params;

    Resposta.findByPk(idResposta)
            .then(
                (Resposta)=> {
                    res.send(Resposta);
                }
            );
});

router.delete('/resposta/excluirResposta/:idResposta', (req, res) => {

    let { idResposta } = req.params;

    Resposta.destroy(
        {where: {idResposta}}
    ).then(

        () => {
            res.send('Resposta DELETADA COM SUCESSO');
        }
    );

});

router.put('/resposta/alterarResposta', (req, res) => {
    
    let { idResposta, verificacao, descricao, imagem, dataHora, tblUsuariosComunIdUsuarioComum, tblPublicacoIdPublicacao } = req.body;

    Resposta.update({
        verificacao, descricao, imagem, dataHora, tblUsuariosComunIdUsuarioComum, idResposta, tblPublicacoIdPublicacao
    },
    
    {where:{idResposta}}
    ).then(

        () => {
            res.send('Dados de Resposta alterados com sucesso');
        }
    );
});

module.exports = router;