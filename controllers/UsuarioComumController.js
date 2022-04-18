const express = require('express');
const UsuarioComum = require('../model/UsuarioComum');
const Usuario = require('../model/Usuario');

var attributes = { exclude: [] }

const router = express.Router();

router.post('/usuario/inserirUsuarioComum', (req,res)=>{
    console.log(req.body);

    const {apelido, foto, biografia, pontuacao, reputacao, moderador, tblUsuarioIdUsuario} = req.body;
    
    UsuarioComum.create({
        apelido,
        foto,
        biografia,
        pontuacao,
        moderador,
        reputacao,
        tblUsuarioIdUsuario
    }).then(
        
        res.status(200).json({'MSG':'Rota de inserção'})
    );
});

/* ROTA DE LISTAGEM GERAL DE Usuario (VERBO HTTP: GET)*/
router.get(
    '/usuario/listarUsuarioComum',
    (req, res)=>{
        //{order:['id', 'DESC']}
        UsuarioComum.findAll({
            raw:true,
            attributes:attributes,
            include:[{
                model: Usuario,
                required:true,
                attributes:['nome', 'email'],
            }],
            order:[['tblUsuarioIdUsuario', 'ASC']],
        }).then(
                    (Usuario)=>{
                        res.send(Usuario);
                    }
                );

        //res.send('ROTA DE LISTAGEM GERAL DE Usuario');
    }
);

/* ROTA DE LISTAGEM POR ID DE CATEGORIA (VERBO HTTP: GET)*/
router.get( '/usuario/listarUsuarioComum/:idUsuarioComum', (req, res)=>{

    let {idUsuarioComum} = req.params;
    // console.log("ID: " + id);
    UsuarioComum.findByPk(idUsuarioComum)
            .then(
                (Usuario)=>{
                    res.send(Usuario);
                }
            );

});

/* ROTA DE EXCLUSÃO DE USUARIO (VERBO HTTP: DELETE)*/
router.delete(
    '/usuario/excluirUsuarioComum/:idUsuarioComum',
    (req, res)=>{

let {idUsuarioComum} = req.params;


        UsuarioComum.destroy(
            {where: {idUsuarioComum}}
        ).then(

            ()=>{
                res.send('USUARIO EXCLUÍDO COM SUCESSO!');
            }

        );

    }
);

router.put(
    '/usuario/alterarUsuarioComum',
    (req, res)=>{

        // console.log(req.body);
        let {idUsuarioComum, apelido, foto, biografia, pontuacao, moderador, reputacao, tblUsuarioIdUsuario} = req.body;

        UsuarioComum.update(
                {apelido,
                foto,
                biografia,
                pontuacao,
                moderador,
                reputacao,
                tblUsuarioIdUsuario},
                {where: {idUsuarioComum}}
        ).then(
            ()=>{
                res.send('DADOS DE USUARIO ALTERADOS COM SUCESSO!');
            }
        );

    }
);



module.exports = router;
