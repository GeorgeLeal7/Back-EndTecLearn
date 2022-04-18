const express = require('express');

const ElogioResposta = require('../model/ElogioResposta');

const router = express.Router();

// POST CURSO
router.post('/elogioresposta/inserirElogioResposta', (req, res) => {
    console.log(req.body);

    const { dataHora, idUsuarioComum, idResposta } = req.body;

    ElogioResposta.create({ 
        dataHora,
        idUsuarioComum,
        idResposta
    }).then(

        res.status(200).json({'MSG':'ROTA DE INSERÇÃO'})
    );
});
router.get('/elogioresposta/listarElogioResposta', (req, res) =>{

    ElogioResposta.findAll()
            .then(
                (ElogioResposta)=>{
                    res.send(ElogioResposta);
                }
            );
});

router.get('/elogioresposta/listarElogioResposta/:idElogioResposta', (req, res) =>{

    let {idElogioResposta} = req.params;

    ElogioResposta.findByPk(idElogioResposta)
            .then(
                (ElogioResposta) =>{
                    res.send(ElogioResposta);
                }
            );
});


router.delete('/elogioresposta/excluirElogioResposta/:idElogioResposta', (req,res)=>{

    let {idElogioResposta} = req.params;

    ElogioResposta.destroy(
        {where: {idElogioResposta}}
    ).then(

        ()=>{
            res.send('ElogioResposta ENVIADA COM SUCESSO!');
        }
    );
});

// ATUALIZAR CURSO
router.put('/elogioresposta/alterarElogioResposta', (req, res)=> {

    let {idElogioResposta, dataHora, idUsuarioComum, idResposta} = req.body;

    ElogioResposta.update({
        dataHora,
        idUsuarioComum,
        idResposta
    },
    
    {where: {idElogioResposta}}
    
    ).then(
        () => {
            res.send('DADOS DE ElogioResposta ALTERADOS COM SUCESSO :)');
        }
    );
});



module.exports = router;