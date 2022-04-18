const express = require('express');

const Usuario = require('../model/Usuario');

const router = express.Router();

router.post('/usuario/inserirUsuario', (req,res)=>{
    console.log(req.body);

    const {nome, email, senha, status, classificacao} = req.body;
    
    Usuario.create({
        nome,
        email,
        senha,
        status,
        classificacao
    }).then(
        
        res.status(200).json({'MSG':'Rota de inserção'})
    );
});

/* ROTA DE LISTAGEM GERAL DE Usuario (VERBO HTTP: GET)*/
router.get(
    '/usuario/listarUsuario',
    (req, res)=>{
        //{order:['id', 'DESC']}
        Usuario.findAll()
                .then(
                    (Usuario)=>{
                        res.send(Usuario);
                    }
                );

        //res.send('ROTA DE LISTAGEM GERAL DE Usuario');
    }
);

/* ROTA DE LISTAGEM POR ID DE CATEGORIA (VERBO HTTP: GET)*/
router.get( '/usuario/listarUsuario/:idUsuario', (req, res)=>{

    let {idUsuario} = req.params;
    // console.log("ID: " + id);

    Usuario.findByPk(idUsuario)
            .then(
                (Usuario)=>{
                    res.send(Usuario);
                }
            );

});

/* ROTA DE EXCLUSÃO DE USUARIO (VERBO HTTP: DELETE)*/
router.delete(
    '/usuario/excluirUsuario/:idUsuario',
    (req, res)=>{

let {idUsuario} = req.params;


        Usuario.destroy(
            {where: {idUsuario}}
        ).then(

            ()=>{
                res.send('USUARIO EXCLUÍDO COM SUCESSO!');
            }

        );

    }
);

router.put(
    '/usuario/alterarUsuario',
    (req, res)=>{

        // console.log(req.body);
        let {idUsuario, nome, email, senha, status, classificacao} = req.body;

        Usuario.update(
                {nome,
                email,
                senha,
                status,
                classificacao},
                {where: {idUsuario}}
        ).then(
            ()=>{
                res.send('DADOS DE USUARIO ALTERADOS COM SUCESSO!');
            }
        );

    }
);



module.exports = router;
